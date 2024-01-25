"use client";

import TextInput from "@/components/form/text-input";
import { createTodo } from "./_action";
import SubmitButton from "@/components/button/submit-button";
import { Controller } from "react-hook-form";
import { Todo, TodoResolver } from "./schema";
import useRHFAction from "@/hooks/usRHFAction";

const defaultValues: Todo = {
  text: "",
  name: "",
};

export default function ZodTodoForm() {
  const { onAction, control, formRef } = useRHFAction({
    action: createTodo,
    rhfProps: {
      defaultValues,
      resolver: TodoResolver,
    },
    disableRHF: true, // if this true it still running but the action not the react hook form, react hook form didnt trigger
  });

  return (
    <form ref={formRef} action={onAction} className="mt-10 flex flex-col gap-5">
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => {
          return (
            <TextInput
              {...field}
              name="name"
              placeholder="Type Name"
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="text"
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            name="text"
            placeholder="What you want to do?..."
            error={Boolean(error?.message)}
            helperText={error?.message}
          />
        )}
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
