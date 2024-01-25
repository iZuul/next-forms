import { ServiceAction, StateAction } from "@/types/action";
import { ServicePromise } from "@/types/services";
import { useCallback, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { useForm, UseFormProps, FieldValues } from "react-hook-form";

type UseRHFActionProps<T extends FieldValues, U> = {
  rhfProps: UseFormProps<T>;
  action: ServiceAction<U>;
  disableRHF?: boolean;
};

export default function useRHFAction<T extends FieldValues, U>({
  action,
  rhfProps,
  disableRHF,
}: UseRHFActionProps<T, U>) {
  const rhf = useForm<T>({
    mode: "all",
    ...rhfProps,
  });
  const [state, formAction] = useFormState<StateAction<U>, FormData>(
    action,
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);

  const { setError } = rhf;

  useEffect(() => {
    // this gets an error from the server and sends it back to the field
    if (!state?.success && state?.error) {
      const mapError = new Map(Object.entries<string>(state?.error));
      mapError.forEach((errValue, key) => {
        const todoKey = key as keyof T;
        setError(todoKey as any, { message: errValue });
      });
    }
  }, [state, setError]);

  const onAction = (formData: FormData) => {
    if (disableRHF) {
      formAction(formData);
      console.log(formRef.current);
      rhf.reset();
      return;
    }

    rhf.trigger();

    if (!rhf.formState.isValid) return;

    formAction(formData);
    rhf.reset();
  };

  const result = {
    ...rhf,
    formRef,
    state,
    formAction,
    onAction,
  };

  return result;
}
