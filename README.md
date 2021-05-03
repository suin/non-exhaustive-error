# @suin/non-exhaustive-error

An error class to detect non-exhaustive if/switch statements in TypeScript.

## Installation

```bash
yarn add @suin/non-exhaustive-error
# or
npm install @suin/non-exhaustive-error
```

## Usage

### Basic Usage

Use `NonExhaustiveError` in default case of `switch` statement.

```typescript
import { NonExhaustiveError } from "@suin/non-exhaustive-error";

type Status = "good" | "normal" | "bad";

function statusToNumber(status: Status): number {
  switch (status) {
    case "good":
      return 1;
    case "normal":
      return 0;
    default:
      // this switch statement is non-exhaustive as here is no case statement for "bad".
      throw new NonExhaustiveError(status); // You will get a compile error here by TypeScript compiler check.
  }
}
```

## API Reference

https://suin.github.io/non-exhaustive-error/
