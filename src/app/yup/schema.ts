import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const TodoSchema = yup.object({
  text: yup.string().required(),
  name: yup.string().required(),
});

type Todo = yup.InferType<typeof TodoSchema> & {
  id?: number;
};

const TodoResolver = yupResolver(TodoSchema);

export { TodoSchema, TodoResolver };

export type { Todo };
