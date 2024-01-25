import { ServicePromise } from "@/types/services";
import { Todo, TodoSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { yupSafeParse } from "@/helpers/errors/yup";

type TodoReturnData = Record<keyof Partial<Todo>, unknown>;

type TodoService = {
  getAll: () => ServicePromise<Todo[]>;
  create: (state: any, formData: FormData) => ServicePromise<Todo | undefined>;
};

const Todos: Todo[] = [
  {
    id: 1,
    text: "Buy Milk",
    name: "Zul",
  },
];

export const TodoService: TodoService = {
  getAll: async function () {
    return {
      success: true,
      message: "Success Get All Todos!",
      data: Todos,
    };
  },
  create: async function (state: any, formData: FormData) {
    const rawData = {
      name: formData.get("name") || undefined,
      text: formData.get("text") || undefined,
    };

    const parseResult = await yupSafeParse(
      TodoSchema.validate(rawData, {
        abortEarly: false,
        strict: true,
      }),
    );

    if (!parseResult.success) {
      const errorData = {} as TodoReturnData;

      if (typeof parseResult.error === "string") {
        return {
          success: false,
          message: parseResult.error,
        };
      }

      parseResult.error.inner.forEach((_errInner) => {
        const path = _errInner.path as keyof Partial<Todo>;
        errorData[path] = _errInner.errors[0];
      });

      return {
        success: false,
        message: parseResult.error.message,
        error: errorData,
      };
    }

    const data = {
      id: Date.now(),
      ...(rawData as Todo),
    };

    Todos.push(data);

    revalidatePath("/yup");

    return {
      success: true,
      message: "Create Todo SUccess",
      data,
    };
  },
};

export type { TodoReturnData };
