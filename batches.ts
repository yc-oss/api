const seasonOrder: Record<string, number> = {
  Fall: 0,
  Summer: 1,
  Spring: 2,
  Winter: 3,
};

const batchDate = (
  name: string,
): { year: number; season: number } | undefined => {
  const longName = /^(Winter|Spring|Summer|Fall) (\d{4})$/.exec(name);
  if (longName) {
    return { year: Number(longName[2]), season: seasonOrder[longName[1]] };
  }

  const shortName = /^([WSF])(\d{2})$/.exec(name);
  if (shortName) {
    const season =
      { W: "Winter", S: "Summer", F: "Fall" }[shortName[1] as "W" | "S" | "F"];
    return { year: 2000 + Number(shortName[2]), season: seasonOrder[season] };
  }
};

export const sortBatches = (names: readonly string[]): string[] =>
  [...names].sort((a, b) => {
    if (a === "Unspecified") return b === "Unspecified" ? 0 : 1;
    if (b === "Unspecified") return -1;

    const aDate = batchDate(a);
    const bDate = batchDate(b);
    if (aDate && bDate) {
      return bDate.year - aDate.year || aDate.season - bDate.season ||
        a.localeCompare(b);
    }
    if (aDate) return -1;
    if (bDate) return 1;
    return a.localeCompare(b);
  });
