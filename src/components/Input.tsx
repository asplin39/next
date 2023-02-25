import { forwardRef } from "react";
import { ErrorMessage } from "src/components/Text/ErrorMessage";

type T = {
  containerClassName?: string;
  errorMessage?: string;
  info?: string;
  label?: string;
  required?: boolean;
  validation?: any;
} & JSX.IntrinsicElements["input"];
export const Input = forwardRef<HTMLInputElement, T>(
  (
    { containerClassName, errorMessage, info, label, required, ...inputProps },
    ref
  ) => {
    return (
      <div className={`font-normal ${containerClassName}`}>
        {(label || required) && (
          <div className="flex justify-between pb-3">
            {label && <p className="text-black-700 mr-[40px]">{label}</p>}
          </div>
        )}
        <input
          className="text-md border-black-900 w-full rounded-sm border bg-white px-3 py-2"
          ref={ref}
          {...inputProps}
        />
        {info && <p className="text-black-900 pt-2 text-xs">{info}</p>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = "Input";
