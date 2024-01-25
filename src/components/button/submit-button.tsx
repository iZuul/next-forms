"use client";

import { useFormStatus } from "react-dom";
import type { ButtonProps } from "./button";
import Button from "./button";
import Spinner from "../loader/spinner";

export default function SubmitButton({ children }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit">
      {pending ? <Spinner /> : null}
      {children}
    </Button>
  );
}
