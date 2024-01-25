import { ResultPromise, ServicePromise } from "@/types/services";
import { Todo, TodoSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { ServiceAction } from "@/types/action";

type TodoReturnData = Record<keyof Partial<Todo>, unknown>;

type TodoService = {
  getAll: () => ServicePromise<Todo[]>;
  create: ServiceAction<Todo>;
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

    const parse = await TodoSchema.safeParse(rawData);
    if (!parse.success) {
      const errorData = {} as TodoReturnData;

      parse.error.errors.forEach((_errItem) => {
        const path = _errItem.path[0] as keyof Partial<Todo>;
        errorData[path] = _errItem.message;
      });

      return {
        success: false,
        message: parse.error.message,
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
