export type CompanySnapshot = {
  id: number;
  name: string;
  slug: string;
  batch?: string;
  one_liner?: string;
  url?: string;
  [key: string]: unknown;
};

export type CompanyFieldChange = {
  before: unknown;
  after: unknown;
};

export type UpdatedCompany = {
  id: number;
  name: string;
  slug: string;
  batch: string | undefined;
  url: string | undefined;
  changed_fields: string[];
  changes: Record<string, CompanyFieldChange>;
};

export type CompanyChangeSet = {
  generated_at: string;
  summary: {
    previous_total: number;
    current_total: number;
    added: number;
    removed: number;
    updated: number;
  };
  added: CompanySnapshot[];
  removed: CompanySnapshot[];
  updated: UpdatedCompany[];
};

export type BuildCompanyChangeSetOptions = {
  previousCompanies: CompanySnapshot[];
  currentCompanies: CompanySnapshot[];
  generatedAt: string;
};

const compareCompanies = (a: CompanySnapshot, b: CompanySnapshot): number => {
  const idComparison = a.id - b.id;
  if (idComparison !== 0) return idComparison;
  return a.slug.localeCompare(b.slug);
};

const stableStringify = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b));
    return `{${
      entries.map(([key, nestedValue]) =>
        `${JSON.stringify(key)}:${stableStringify(nestedValue)}`
      ).join(",")
    }}`;
  }
  return JSON.stringify(value);
};

const valuesEqual = (a: unknown, b: unknown): boolean =>
  stableStringify(a) === stableStringify(b);

const buildCompanyMap = (
  companies: CompanySnapshot[],
): Map<number, CompanySnapshot> =>
  new Map(companies.map((company) => [company.id, company]));

export const buildCompanyChangeSet = ({
  previousCompanies,
  currentCompanies,
  generatedAt,
}: BuildCompanyChangeSetOptions): CompanyChangeSet => {
  const previousById = buildCompanyMap(previousCompanies);
  const currentById = buildCompanyMap(currentCompanies);

  const added = currentCompanies
    .filter((company) => !previousById.has(company.id))
    .sort(compareCompanies);
  const removed = previousCompanies
    .filter((company) => !currentById.has(company.id))
    .sort(compareCompanies);
  const updated = currentCompanies
    .filter((company) => previousById.has(company.id))
    .map((company) => {
      const previousCompany = previousById.get(company.id)!;
      const fieldNames = Array.from(
        new Set([
          ...Object.keys(previousCompany),
          ...Object.keys(company),
        ]),
      ).sort((a, b) => a.localeCompare(b));
      const changedFields = fieldNames.filter((fieldName) =>
        !valuesEqual(previousCompany[fieldName], company[fieldName])
      );

      if (changedFields.length === 0) return undefined;

      const changes = Object.fromEntries(
        changedFields.map((fieldName) => [fieldName, {
          before: previousCompany[fieldName],
          after: company[fieldName],
        }]),
      ) as Record<string, CompanyFieldChange>;

      return {
        id: company.id,
        name: company.name,
        slug: company.slug,
        batch: company.batch,
        url: company.url,
        changed_fields: changedFields,
        changes,
      };
    })
    .filter((company): company is UpdatedCompany => company !== undefined)
    .sort((a, b) => {
      const idComparison = a.id - b.id;
      if (idComparison !== 0) return idComparison;
      return a.slug.localeCompare(b.slug);
    });

  return {
    generated_at: generatedAt,
    summary: {
      previous_total: previousCompanies.length,
      current_total: currentCompanies.length,
      added: added.length,
      removed: removed.length,
      updated: updated.length,
    },
    added,
    removed,
    updated,
  };
};

export const hasCompanyChanges = (changeSet: CompanyChangeSet): boolean =>
  changeSet.summary.added > 0 || changeSet.summary.removed > 0 ||
  changeSet.summary.updated > 0;

const truncate = (value: string): string => {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 160) return normalized;
  return `${normalized.slice(0, 157)}...`;
};

const valueToMarkdown = (value: unknown): string => {
  if (typeof value === "string") return truncate(value);
  if (value === null || value === undefined) return String(value);
  return truncate(JSON.stringify(value));
};

const companyLink = (company: Pick<CompanySnapshot, "name" | "url">): string =>
  company.url ? `[${company.name}](${company.url})` : company.name;

const renderCompanyBullet = (company: CompanySnapshot): string => {
  const details = [company.batch, company.one_liner]
    .filter((value): value is string =>
      typeof value === "string" && value.length > 0
    )
    .join(" — ");
  return `- ${companyLink(company)}${details ? ` (${details})` : ""}`;
};

export const renderCompanyChangesMarkdown = (
  changeSet: CompanyChangeSet,
): string => {
  const date = changeSet.generated_at.slice(0, 10);
  let markdown = `# YC company changes for ${date}\n\n`;
  markdown += `- Previous total: ${changeSet.summary.previous_total}\n`;
  markdown += `- Current total: ${changeSet.summary.current_total}\n`;
  markdown += `- Added: ${changeSet.summary.added}\n`;
  markdown += `- Removed: ${changeSet.summary.removed}\n`;
  markdown += `- Updated: ${changeSet.summary.updated}\n\n`;

  if (!hasCompanyChanges(changeSet)) {
    markdown += "No company records changed.\n";
    return markdown;
  }

  if (changeSet.added.length > 0) {
    markdown += "## Added companies\n\n";
    markdown += changeSet.added.map(renderCompanyBullet).join("\n");
    markdown += "\n\n";
  }

  if (changeSet.removed.length > 0) {
    markdown += "## Removed companies\n\n";
    markdown += changeSet.removed.map(renderCompanyBullet).join("\n");
    markdown += "\n\n";
  }

  if (changeSet.updated.length > 0) {
    markdown += "## Updated companies\n\n";
    for (const company of changeSet.updated) {
      markdown += `### ${companyLink(company)}\n\n`;
      for (const fieldName of company.changed_fields) {
        const change = company.changes[fieldName];
        markdown += `- \`${fieldName}\`: ${valueToMarkdown(change.before)} → ${
          valueToMarkdown(change.after)
        }\n`;
      }
      markdown += "\n";
    }
  }

  return markdown;
};

export type WriteCompanyChangeFilesOptions = {
  directory: string;
  changeSet: CompanyChangeSet;
};

export type WriteCompanyChangeFilesResult = {
  written: string[];
};

export const writeCompanyChangeFiles = async ({
  directory,
  changeSet,
}: WriteCompanyChangeFilesOptions): Promise<WriteCompanyChangeFilesResult> => {
  if (!hasCompanyChanges(changeSet)) return { written: [] };

  await Deno.mkdir(directory, { recursive: true });

  const date = changeSet.generated_at.slice(0, 10);
  const json = JSON.stringify(changeSet, null, 2) + "\n";
  const markdown = renderCompanyChangesMarkdown(changeSet);
  const files = [
    { name: `${date}.json`, content: json },
    { name: `${date}.md`, content: markdown },
    { name: "latest.json", content: json },
    { name: "latest.md", content: markdown },
  ];

  for (const file of files) {
    await Deno.writeTextFile(`${directory}/${file.name}`, file.content);
  }

  return { written: files.map((file) => file.name) };
};
