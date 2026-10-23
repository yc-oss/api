import { assertEquals } from "@std/assert";
import { sortBatches } from "./batches.ts";

Deno.test("sortBatches orders long-form and legacy batch names chronologically", () => {
  const names = [
    "Winter 2012",
    "S21",
    "Winter 2027",
    "Fall 2026",
    "Spring 2026",
    "Summer 2026",
    "W26",
    "Unspecified",
  ];
  assertEquals(sortBatches(names), [
    "Winter 2027",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
    "W26",
    "S21",
    "Winter 2012",
    "Unspecified",
  ]);
  assertEquals(names[0], "Winter 2012");
});
