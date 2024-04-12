import { ChangeEventHandler } from "react";
import InputMask from "react-input-mask";

interface NumberInputProps {
  number: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  css?: string;
}

const NumberInput = ({ number, handleInput, css }: NumberInputProps) => {
  return (
    <InputMask
      className={`bg-[--bg-page-color] text-[26px] sm:text-[36px] text-[--light-color] px-[13px] sm:px-[16px] py-[12px] rounded-[15px] sm:w-[400px] ${css}`}
      mask='+7 (999) 999 99-99'
      alwaysShowMask
      value={number}
      onChange={handleInput}
    />
  );
};

export default NumberInput;
