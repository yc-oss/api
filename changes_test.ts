import { assertEquals, assertRejects, assertStringIncludes } from "@std/assert";
import {
  buildCompanyChangeSet,
  hasCompanyChanges,
  renderCompanyChangesMarkdown,
  writeCompanyChangeFiles,
} from "./changes.ts";

const baseCompany = {
  id: 1,
  name: "Acme AI",
  slug: "acme-ai",
  batch: "S24",
  one_liner: "Builds agents for invoices",
  website: "https://acme.example",
  url: "https://www.ycombinator.com/companies/acme-ai",
  isHiring: false,
};

Deno.test("buildCompanyChangeSet detects added, removed, and updated companies", () => {
  const removedCompany = {
    ...baseCompany,
    id: 2,
    name: "Old Co",
    slug: "old-co",
  };
  const addedCompany = {
    ...baseCompany,
    id: 3,
    name: "New Co",
    slug: "new-co",
    one_liner: "Newly launched",
  };

  const changeSet = buildCompanyChangeSet({
    previousCompanies: [baseCompany, removedCompany],
    currentCompanies: [
      {
        ...baseCompany,
        one_liner: "Builds agents for receipts",
        isHiring: true,
      },
      addedCompany,
    ],
    generatedAt: "2026-06-30T00:00:00.000Z",
  });

  assertEquals(changeSet.summary, {
    previous_total: 2,
    current_total: 2,
    added: 1,
    removed: 1,
    updated: 1,
  });
  assertEquals(changeSet.added.map((company) => company.slug), ["new-co"]);
  assertEquals(changeSet.removed.map((company) => company.slug), ["old-co"]);
  assertEquals(changeSet.updated.map((company) => company.slug), ["acme-ai"]);
  assertEquals(changeSet.updated[0].changed_fields, ["isHiring", "one_liner"]);
  assertEquals(changeSet.updated[0].changes.one_liner, {
    before: "Builds agents for invoices",
    after: "Builds agents for receipts",
  });
  assertEquals(hasCompanyChanges(changeSet), true);
});

Deno.test("renderCompanyChangesMarkdown summarizes the daily diff", () => {
  const changeSet = buildCompanyChangeSet({
    previousCompanies: [baseCompany],
    currentCompanies: [
      {
        ...baseCompany,
        one_liner: "Builds agents for receipts",
        isHiring: true,
      },
      {
        ...baseCompany,
        id: 3,
        name: "New Co",
        slug: "new-co",
        url: "https://www.ycombinator.com/companies/new-co",
      },
    ],
    generatedAt: "2026-06-30T00:00:00.000Z",
  });

  const markdown = renderCompanyChangesMarkdown(changeSet);

  assertStringIncludes(markdown, "# YC company changes for 2026-06-30");
  assertStringIncludes(markdown, "- Added: 1");
  assertStringIncludes(markdown, "## Added companies");
  assertStringIncludes(
    markdown,
    "[New Co](https://www.ycombinator.com/companies/new-co)",
  );
  assertStringIncludes(markdown, "## Updated companies");
  assertStringIncludes(
    markdown,
    "`one_liner`: Builds agents for invoices → Builds agents for receipts",
  );
});

Deno.test("renderCompanyChangesMarkdown handles days with no company changes", () => {
  const changeSet = buildCompanyChangeSet({
    previousCompanies: [baseCompany],
    currentCompanies: [baseCompany],
    generatedAt: "2026-06-30T00:00:00.000Z",
  });

  assertEquals(hasCompanyChanges(changeSet), false);
  assertStringIncludes(
    renderCompanyChangesMarkdown(changeSet),
    "No company records changed.",
  );
});

Deno.test("writeCompanyChangeFiles writes dated and latest change files", async () => {
  const directory = await Deno.makeTempDir();
  const changeSet = buildCompanyChangeSet({
    previousCompanies: [baseCompany],
    currentCompanies: [{ ...baseCompany, isHiring: true }],
    generatedAt: "2026-06-30T00:00:00.000Z",
  });

  const { written } = await writeCompanyChangeFiles({ directory, changeSet });

  assertEquals(written.sort(), [
    "2026-06-30.json",
    "2026-06-30.md",
    "latest.json",
    "latest.md",
  ]);
  const latestJson = JSON.parse(
    await Deno.readTextFile(`${directory}/latest.json`),
  );
  assertEquals(latestJson.summary.updated, 1);
  assertStringIncludes(
    await Deno.readTextFile(`${directory}/latest.md`),
    "`isHiring`: false → true",
  );
});

Deno.test("writeCompanyChangeFiles skips no-change days to avoid noisy commits", async () => {
  const directory = await Deno.makeTempDir();
  const changeSet = buildCompanyChangeSet({
    previousCompanies: [baseCompany],
    currentCompanies: [baseCompany],
    generatedAt: "2026-06-30T00:00:00.000Z",
  });

  const { written } = await writeCompanyChangeFiles({ directory, changeSet });

  assertEquals(written, []);
  await assertRejects(
    () => Deno.stat(`${directory}/latest.json`),
    Deno.errors.NotFound,
  );
});
