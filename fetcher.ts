import { ensureDir } from "https://deno.land/std@0.224.0/fs/ensure_dir.ts";
import { slugify } from "https://deno.land/x/slugify/mod.ts";

const indexName = "YCCompany_By_Launch_Date_production";
interface LaunchedCompany {
  id: number;
  name: string;
  slug: string;
  former_names: string[];
  small_logo_thumb_url: string;
  website: string;
  all_locations: string;
  long_description: string;
  one_liner: string;
  team_size: number;
  highlight_black: boolean;
  highlight_latinx: boolean;
  highlight_women: boolean;
  industry: string;
  subindustry: string;
  launched_at: number;
  tags: string[];
  tags_highlighted: string[];
  top_company: boolean;
  isHiring: boolean;
  nonprofit: boolean;
  batch: string;
  status: string;
  industries: string[];
  regions: string[];
  stage: string;
  app_video_public: boolean;
  demo_day_video_public: boolean;
  app_answers: null;
  question_answers: boolean;
}

const fetchAllCompanies = async (): Promise<LaunchedCompany[]> => {
  const baseUrl = "https://45bwzj1sgc-dsn.algolia.net/1/indexes/*/queries";
  const params = new URLSearchParams({
    "x-algolia-agent":
      "Algolia for JavaScript (3.35.1); Browser; JS Helper (3.16.1)",
    "x-algolia-application-id": "45BWZJ1SGC",
    "x-algolia-api-key":
      "MjBjYjRiMzY0NzdhZWY0NjExY2NhZjYxMGIxYjc2MTAwNWFkNTkwNTc4NjgxYjU0YzFhYTY2ZGQ5OGY5NDMxZnJlc3RyaWN0SW5kaWNlcz0lNUIlMjJZQ0NvbXBhbnlfcHJvZHVjdGlvbiUyMiUyQyUyMllDQ29tcGFueV9CeV9MYXVuY2hfRGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE",
  });

  console.log("Fetching facets");
  const res = await fetch(`${baseUrl}?${params}`, {
    method: "POST",
    body: JSON.stringify({
      requests: [
        {
          indexName,
          params: `facets=%5B%22app_answers%22%2C%22app_video_public%22%2C%22batch%22%2C%22demo_day_video_public%22%2C%22highlight_black%22%2C%22highlight_latinx%22%2C%22highlight_women%22%2C%22industries%22%2C%22isHiring%22%2C%22nonprofit%22%2C%22question_answers%22%2C%22regions%22%2C%22subindustry%22%2C%22tags%22%2C%22top_company%22%5D&hitsPerPage=1000&maxValuesPerFacet=1000&query=&tagFilters=`,
        },
      ],
    }),
  });

  const json = (await res.json()) as {
    results: {
      hits: LaunchedCompany[];
      facets: { batch: Record<string, number> };
    }[];
  };
  const batches = json.results[0].facets.batch;

  let allCompanies: LaunchedCompany[] = [];
  for (const [batch, count] of Object.entries(batches)) {
    console.log(`Fetching companies for batch: ${batch}`);
    let page = 0;
    let fetchedCount = 0;
    while (fetchedCount < count) {
      const batchRes = await fetch(`${baseUrl}?${params}`, {
        method: "POST",
        body: JSON.stringify({
          requests: [
            {
              indexName,
              params: `facets=%5B%22app_answers%22%2C%22app_video_public%22%2C%22batch%22%2C%22demo_day_video_public%22%2C%22highlight_black%22%2C%22highlight_latinx%22%2C%22highlight_women%22%2C%22industries%22%2C%22isHiring%22%2C%22nonprofit%22%2C%22question_answers%22%2C%22regions%22%2C%22subindustry%22%2C%22tags%22%2C%22top_company%22%5D&hitsPerPage=1000&maxValuesPerFacet=1000&query=&tagFilters=&facetFilters=batch:${encodeURIComponent(
                batch
              )}&page=${page}`,
            },
          ],
        }),
      });
      const batchJson = await batchRes.json();
      const batchHits = batchJson.results[0].hits as LaunchedCompany[];
      allCompanies = allCompanies.concat(batchHits);
      fetchedCount += batchHits.length;
      page++;
    }
  }
  return allCompanies.sort((a, b) => a.id - b.id);
};

await ensureDir("companies");
await ensureDir("tags");
await ensureDir("industries");
await ensureDir("batches");

const companies = await fetchAllCompanies();
const results = companies.map((hit) => {
  if (typeof hit !== "object") throw new Error("Result is not of type object");
  if (hit === null) throw new Error("Object is of type null");
  if ("_highlightResult" in hit) delete hit._highlightResult;
  if ("objectID" in hit) delete hit.objectID;
  return {
    ...hit,
    url: `https://www.ycombinator.com/companies/${hit.slug}`,
    api: `https://yc-oss.github.io/api/batches/${slugify(
      hit.batch ?? "Unspecified",
      {
        lower: true,
      }
    )}/${hit.slug}.json`,
  };
});

const meta: Record<
  string,
  Record<string, { name: string; count: number; api: string }>
> = {
  companies: {
    all: {
      name: "All launched companies",
      count: results.length,
      api: "https://yc-oss.github.io/api/companies/all.json",
    },
  },
  tags: {},
  industries: {},
  batches: {},
};

await Deno.writeTextFile(
  "companies/all.json",
  JSON.stringify(results, null, 2) + "\n"
);

const uniqueTags = Array.from(new Set(results.flatMap((result) => result.tags)))
  .map((tag) => {
    const slug = slugify(tag, { lower: true });
    return {
      name: tag,
      slug,
      api: `https://yc-oss.github.io/api/tags/${slug}.json`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

for (const tag of uniqueTags) {
  const filteredResults = results.filter((result) =>
    result.tags.includes(tag.name)
  );
  await Deno.writeTextFile(
    `tags/${tag.slug}.json`,
    JSON.stringify(filteredResults, null, 2) + "\n"
  );
  meta.tags[tag.slug] = {
    name: tag.name,
    count: filteredResults.length,
    api: tag.api,
  };
}

const uniqueIndustries = Array.from(
  new Set(results.flatMap((result) => result.industries))
)
  .map((industry) => {
    const slug = slugify(industry, { lower: true });
    return {
      name: industry,
      slug,
      api: `https://yc-oss.github.io/api/industries/${slug}.json`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

for (const industry of uniqueIndustries) {
  const filteredResults = results.filter((result) =>
    result.industries.includes(industry.name)
  );
  await Deno.writeTextFile(
    `industries/${industry.slug}.json`,
    JSON.stringify(filteredResults, null, 2) + "\n"
  );
  meta.industries[industry.slug] = {
    name: industry.name,
    count: filteredResults.length,
    api: industry.api,
  };
}

const uniqueBatches = Array.from(new Set(results.map((result) => result.batch)))
  .map((batch) => {
    const slug = slugify(batch, { lower: true });
    return {
      name: batch,
      slug,
      api: `https://yc-oss.github.io/api/batches/${slug}.json`,
    };
  })
  .sort((a, b) => {
    // We also want "Unspecified" to be last
    if (a.name === "Unspecified") return 1;
    if (b.name === "Unspecified") return -1;

    // Batches are like "S21" and "W23" and we want to sort them reverse chronologically
    // so that summer is before winter and greater numbers are before smaller numbers
    const aNum = parseInt(a.name.slice(1));
    const bNum = parseInt(b.name.slice(1));

    // Order of batches is Fall, Summer, Winter
    if (aNum === bNum) {
      const aSeason = a.name.slice(0);
      const bSeason = b.name.slice(0);
      if (aSeason === "F") return -1;
      if (bSeason === "F") return 1;
      if (aSeason === "S") return -1;
      if (bSeason === "S") return 1;
      return 0;
    }

    return bNum - aNum;
  });

for (const batch of uniqueBatches) {
  const filteredResults = results.filter(
    (result) => result.batch === batch.name
  );
  await Deno.writeTextFile(
    `batches/${batch.slug}.json`,
    JSON.stringify(filteredResults, null, 2) + "\n"
  );
  meta.batches[batch.slug] = {
    name: batch.name,
    count: filteredResults.length,
    api: batch.api,
  };
}

for (const { key, slug, name } of [
  { key: "top_company", slug: "top", name: "Top companies" },
  {
    key: "highlight_black",
    slug: "black-founded",
    name: "Black-founded companies",
  },
  {
    key: "highlight_latinx",
    slug: "hispanic-latino-founded",
    name: "Hispanic/Latino-founded companies",
  },
  {
    key: "highlight_women",
    slug: "women-founded",
    name: "Women-founded companies",
  },
  { key: "nonprofit", slug: "nonprofit", name: "Not-for-profit companies" },
  { key: "isHiring", slug: "hiring", name: "Companies currently hiring" },
]) {
  const filteredResults = results.filter((result) => result[key]);
  await Deno.writeTextFile(
    `companies/${slug}.json`,
    JSON.stringify(filteredResults, null, 2) + "\n"
  );
  meta.companies[slug] = {
    name,
    count: filteredResults.length,
    api: `https://yc-oss.github.io/api/companies/${slug}.json`,
  };
}

for (const company of results) {
  await ensureDir(
    `batches/${slugify(company.batch ?? "Unspecified", {
      lower: true,
    })}`
  );
  await Deno.writeTextFile(
    `batches/${slugify(company.batch ?? "Unspecified", {
      lower: true,
    })}/${company.slug}.json`,
    JSON.stringify(company, null, 2) + "\n"
  );
}

const existingMeta = JSON.parse(await Deno.readTextFile("meta.json"));
const newMeta = {
  last_updated: new Date().toISOString(),
  readme: "https://github.com/yc-oss/api",
  ...meta,
};

const hasChanges = Object.keys(newMeta).some((key) => {
  return (
    key !== "last_updated" &&
    JSON.stringify(newMeta[key]) !== JSON.stringify(existingMeta[key])
  );
});
if (hasChanges) {
  console.log("Meta has changed, updating meta.json");
  await Deno.writeTextFile(
    "meta.json",
    JSON.stringify(newMeta, null, 2) + "\n"
  );

  const readme = await Deno.readTextFile("README.md");
  let text = `<!--start generated readme-->\n`;

  text += `\n## ℹ️ Metadata\n\n`;
  text += `API endpoint: https://yc-oss.github.io/api/meta.json\n\n`;
  text += `- Last updated: ${new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  })}\n`;
  text += `- Companies: ${results.length}\n`;
  text += `- Batches: ${uniqueBatches.length}\n`;
  text += `- Industries: ${uniqueIndustries.length}\n`;
  text += `- Tags: ${uniqueTags.length}\n`;

  text += `\n## 💻 APIs\n\n`;

  text += `\n### 🏢 Companies\n\n| List of companies | API endpoint |\n| --------------- | ------------ |\n`;
  for (const slug of Object.keys(meta.companies)) {
    text += `| ${meta.companies[slug].name} | https://yc-oss.github.io/api/companies/${slug}.json |\n`;
  }

  text += `\n### 🎓 Batches\n\n<details>\n<summary>Companies per batch</summary>\n\n| Batch | Count | API endpoint |\n| ---- | ---- | ------------ |\n`;
  for (const slug of Object.keys(meta.batches)) {
    text += `| ${meta.batches[slug].name} | ${meta.batches[slug].count} | https://yc-oss.github.io/api/batches/${slug}.json |\n`;
  }
  text += `</details>\n`;

  text += `\n### 🏭 Industries\n\n<details>\n<summary>Companies per industry</summary>\n\n| Industry | Count | API endpoint |\n| -------- | ---- | ------------ |\n`;
  for (const slug of Object.keys(meta.industries)) {
    text += `| ${meta.industries[slug].name} | ${meta.industries[slug].count} | https://yc-oss.github.io/api/industries/${slug}.json |\n`;
  }
  text += `</details>\n`;

  text += `\n### 🏷️ Tags\n\n<details>\n<summary>Companies per tag</summary>\n\n| Tag | Count | API endpoint |\n| --- | ---- | ------------ |\n`;
  for (const slug of Object.keys(meta.tags)) {
    text += `| ${meta.tags[slug].name} | ${meta.tags[slug].count} | https://yc-oss.github.io/api/tags/${slug}.json |\n`;
  }
  text += `</details>\n`;

  text += `<!--end generated readme-->\n`;

  const newReadme = readme.replace(
    /<!--start generated readme-->[\s\S]*<!--end generated readme-->/g,
    text
  );
  await Deno.writeTextFile("README.md", newReadme);
} else console.log("Meta has not changed");

export {};
