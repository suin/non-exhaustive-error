import { NonExhaustiveError } from "./index";

test("usage example", () => {
  type Status = "good" | "normal" | "bad";
  function statusToNumber(status: Status): number {
    switch (status) {
      case "good":
        return 1;
      case "normal":
        return 0;
      default:
        // @ts-expect-error TS2345
        throw new NonExhaustiveError(status);
    }
  }
  expect(() => statusToNumber("bad")).toThrowErrorMatchingInlineSnapshot(
    `"If/switch control flow may not be exhaustive. Unhandled value was detected: bad"`
  );
});

describe("NonExhaustiveError", () => {
  it("should have value property", () => {
    const object = {};
    const error = new NonExhaustiveError(object as never);
    expect(error.value).toBe(object);
  });
});

describe("message", () => {
  it("should describe non-exhaustive statement", () => {
    const value = "the value";
    const error = new NonExhaustiveError(value as never);
    expect(error.message).toMatchInlineSnapshot(
      `"If/switch control flow may not be exhaustive. Unhandled value was detected: the value"`
    );
  });
});
