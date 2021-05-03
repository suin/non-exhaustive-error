export class NonExhaustiveError extends Error {
  readonly value: unknown;

  constructor(value: never) {
    super(
      `If/switch control flow may not be exhaustive. Unhandled value was detected: ${value}`
    );
    this.value = value;
  }
}
