import { Safe } from "@/types/type-safe";
import { ValidationError } from "yup";

async function yupSafeParse<I>(
  promise: Promise<I>,
): Promise<Safe<I, ValidationError | string>> {
  try {
    const data = await promise;
    return { data, success: true };
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }

      return { success: false, error: error.message };
    }
    return { success: false, error: "Something wrong!" };
  }
}

export { yupSafeParse };
