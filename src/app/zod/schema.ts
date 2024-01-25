import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const TodoSchema = z.object({
  text: z.string().trim().min(1, "text is required!").default(""),
  name: z.string().trim().min(1, "name is required").default(""),
});

type Todo = z.infer<typeof TodoSchema> & {
  id?: number;
};

const TodoResolver = zodResolver(TodoSchema);

export { TodoSchema, TodoResolver };

export type { Todo };
