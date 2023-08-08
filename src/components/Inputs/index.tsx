import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { IconType } from "react-icons/lib/esm/iconBase";
import { StylesInputs } from "./style";

interface InputsProps {
  name: string;
  register: UseFormRegisterReturn;
  Icons?: IconType;
  type?: "password" | "button" | "email"
}

export function Inputs({ name, register, Icons, type }: InputsProps) {
  return (
    <StylesInputs>
      {Icons && <Icons aria-hidden="true" />}
      <input
        type={type ? type : "text"}
        id={name}
        placeholder={name}
        {...register}
        aria-label={name}
      />
    </StylesInputs>
  );
}
