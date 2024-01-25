"use client";

import TextInput from "@/components/form/text-input";
import { useFormState } from "react-dom";
import { createTodo } from "./_action";
import SubmitButton from "@/components/button/submit-button";
import { Controller, useForm } from "react-hook-form";
import { Todo, TodoResolver } from "./schema";
import { useEffect } from "react";
import { StateAction } from "@/types/action";

const defaultValues: Todo = {
  text: "",
  name: "",
};

export default function YupTodoForm() {
  const {
    control,
    setError,
    formState: { isValid },
    trigger,
    reset,
  } = useForm<Todo>({
    defaultValues,
    mode: "all",
    resolver: TodoResolver,
  });

  const [state, formAction] = useFormState<StateAction<Todo>, FormData>(
    createTodo,
    null,
  );

  useEffect(() => {
    // this get error from server and sent it back to the field
    if (!state?.success && state?.error) {
      const mapError = new Map(Object.entries<string>(state?.error));
      mapError.forEach((errValue, key) => {
        const todoKey = key as keyof Todo;
        setError(todoKey, { message: errValue });
      });
    }
  }, [state, setError]);

  const action = (formData: FormData) => {
    trigger();
    if (!isValid) return;
    formAction(formData);
    reset();
  };

  return (
    <form action={action} className="mt-10 flex flex-col gap-5">
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => {
          return (
            <TextInput
              {...field}
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
