import Link from "next/link";
import YupTodoForm from "./_form";
import YupTodoList from "./_list";
import YupTodoFormFormState from "./_form-form-state";
import YupTodoFormServer from "./_form-server";

export default function YupPage() {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <div className="flex w-full items-center justify-between">
        <nav className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/zod">Zod</Link>
        </nav>
        <span className="font-bold">Yup Page</span>
      </div>
      <div className="my-10 flex w-full gap-10">
        <div className="flex-1">
          <div className="text-center font-semibold">
            React Hook Form + useFormState + Server Action
          </div>
          <YupTodoForm />
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold">
            useFormState + Server Action
          </div>
          <YupTodoFormFormState />
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold">Server Action Only</div>
          <YupTodoFormServer />
        </div>
      </div>
      <div className="w-full">
        <YupTodoList />
      </div>
    </div>
  );
}
