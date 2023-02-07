import { forwardRef } from 'react'
import { ErrorMessage } from 'src/components/Text/ErrorMessage'

type T = {
  containerClassName?: string
  info?: string
  label?: string
  validation?: any
  required?: boolean
  errorMessage?: string
} & JSX.IntrinsicElements['input']
export const Input = forwardRef<HTMLInputElement, T>(
  (
    { containerClassName, label, required, info, errorMessage, ...inputProps },
    ref,
  ) => {
    return (
      <div className={`font-normal ${containerClassName}`}>
        {(label || required) && (
          <div className="flex pb-3 justify-between ">
            {label && <p className="mr-[40px] text-black-700">{label}</p>}
          </div>
        )}
        <input
          className="w-full px-3 py-2 text-md bg-white border border-black-900 rounded-sm"
          ref={ref}
          {...inputProps}
        />
        {info && <p className="pt-2 text-xs text-black-900">{info}</p>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    )
  },
)

Input.displayName = 'Input'
