import { ComponentProps, FC } from 'react'
import { overrideTailwindClasses } from 'tailwind-override'

type ErrorMessageProps = ComponentProps<'p'>
export const ErrorMessage: FC<ErrorMessageProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = overrideTailwindClasses(`text-red-500 font-bold ${className}`)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
