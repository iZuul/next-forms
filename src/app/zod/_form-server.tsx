import TextInput from "@/components/form/text-input";
import SubmitButton from "@/components/button/submit-button";
import { TodoService } from "./_service";

export default function ZodTodoFormServer() {
  const action = async (formData: FormData) => {
    "use server";
    await TodoService.create(null, formData);
  };
  return (
    <form action={action} className="mt-10 flex flex-col gap-5">
      <TextInput placeholder="Type Name" name="name" />
      <TextInput placeholder="What you want to do?..." name="text" />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
