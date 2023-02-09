import { describe, it, expect } from "vitest";
import { formatDate } from "../../utils/utils";

describe("Utils", () => {
  it("formatDate should return correct date", () => {
    const date = new Date("2023-02-09T19:42:31.909Z");
    const formatedDate = formatDate(date);
    expect(formatedDate).toBe("2023-02-09 / 19:42");
  });
});
