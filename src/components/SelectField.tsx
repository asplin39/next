import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";

type SelectType = Omit<React.ComponentProps<"select">, "children">;
export const SelectField: FC<SelectType> = ({ className, ...props }) => {
  return (
    <select
      className={overrideTailwindClasses(
        `select-bordered select w-full max-w-xs ${className}`
      )}
    >
      <option disabled selected>
        Who shot first?
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
};
