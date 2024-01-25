import { getAllTodo } from "./_action";

export default async function YupTodoList() {
  const todos = await getAllTodo();

  if (!todos.success) return <div>{todos.message}</div>;

  return (
    <ul className="w-full">
      {todos.data?.map((_todo) => {
        return (
          <li className="py-3 px-2 bg-slate-300 w-full flex" key={_todo.id}>
            <div className="w-20 font-bold">{_todo.name}</div>
            <div className="flex-1">{_todo.text}</div>
          </li>
        );
      })}
    </ul>
  );
}
