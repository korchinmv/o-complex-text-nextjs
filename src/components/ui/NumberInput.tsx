import { ChangeEventHandler } from "react";
import InputMask from "react-input-mask";

interface NumberInputProps {
  number: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  css?: string;
  name: string;
}

const NumberInput = ({ number, handleInput, name, css }: NumberInputProps) => {
  return (
    <InputMask
      className={`bg-[--bg-page-color] text-[25px] sm:text-[36px] text-[--light-color] px-[13px] sm:px-[16px] py-[12px] rounded-[15px] sm:max-w-[400px] h-[68px] ${css}`}
      mask='+7 (999) 999 99-99'
      alwaysShowMask
      value={number}
      onChange={handleInput}
      name={name}
    />
  );
};

export default NumberInput;
