"use client";

import TextInput from "@/components/form/text-input";
import { createTodo } from "./_action";
import SubmitButton from "@/components/button/submit-button";
import { Todo } from "./schema";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { ServicePromise } from "@/types/services";

const defaultValues: Todo = {
  text: "",
  name: "",
};

export default function ZodTodoFormSecond() {
  const [state, onAction] = useFormState<ServicePromise<Todo>, FormData>(
    createTodo,
    { success: true, message: "", data: defaultValues },
  );
  const formRef = useRef<HTMLFormElement>(null);

  const action = async (formData: FormData) => {
    await onAction(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={action} className="mt-10 flex flex-col gap-5">
      <TextInput
        placeholder="Type Name"
        name="name"
        error={!state?.success && state?.error?.name}
        helperText={!state?.success && state?.error?.name}
      />
      <TextInput
        placeholder="What you want to do?..."
        name="text"
        error={!state?.success && state?.error?.text}
        helperText={!state?.success && state?.error?.text}
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
