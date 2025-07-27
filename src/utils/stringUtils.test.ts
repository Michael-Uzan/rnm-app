import { capitalize } from "./stringUtils";

describe("capitalize", () => {
  it("should capitalize the first letter of a lowercase word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should work with a single letter", () => {
    expect(capitalize("h")).toBe("H");
  });

  it("should leave the rest of the string unchanged", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  it("should return an empty string if input is empty", () => {
    expect(capitalize("")).toBe("");
  });

  it("should not change a string that starts with an uppercase letter", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should work with special characters", () => {
    expect(capitalize("!oops")).toBe("!oops"); // first char isn't a letter
  });
});
