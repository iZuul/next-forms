import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

type TextInputProps = {
  label?: ReactNode;
  error?: boolean;
  helperText?: ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <label className="form-control w-full">
        {label ? (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        ) : null}
        <input
          ref={ref}
          type="text"
          className="input input-bordered w-full"
          {...props}
        />
        {error ? (
          <div className="label">
            <span className="label-text-alt text-error">{helperText}</span>
          </div>
        ) : null}
      </label>
    );
  },
);
TextInput.displayName = "TextInput";

export default TextInput;
