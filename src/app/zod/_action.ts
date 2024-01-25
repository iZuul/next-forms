"use server";

import { TodoService } from "./_service";

const createTodo = TodoService.create;
const getAllTodo = TodoService.getAll;

export { createTodo, getAllTodo };
