import Link from "next/link";
import ZodTodoForm from "./_form";
import ZodTodoList from "./_list";
import ZodTodoFormFormState from "./_form-form-state";
import ZodTodoFormServer from "./_form-server";

export default function YupPage() {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <div className="flex w-full items-center justify-between">
        <nav className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/yup">Yup</Link>
        </nav>
        <span className="font-bold">Zod Page</span>
      </div>
      <div className="my-10 flex w-full gap-10">
        <div className="flex-1">
          <div className="text-center font-semibold">
            React Hook Form + useFormState + Server Action
          </div>
          <ZodTodoForm />
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold">
            useFormState + Server Action
          </div>
          <ZodTodoFormFormState />
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold">Server Action Only</div>
          <ZodTodoFormServer />
        </div>
      </div>
      <div className="w-full">
        <ZodTodoList />
      </div>
    </div>
  );
}
