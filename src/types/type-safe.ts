type Safe<I, O> =
  | {
      success: true;
      data: I;
    }
  | {
      success: false;
      error: O;
    };

export type { Safe };
