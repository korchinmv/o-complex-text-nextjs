import { ChangeEventHandler } from "react";
import InputMask from "react-input-mask";

interface NumberInputProps {
  css?: string;
  name: string;
  register: any;
  btnState: boolean;
}

const NumberInput = ({ name, css, register, btnState }: NumberInputProps) => {
  return (
    <InputMask
      className={`bg-[--bg-page-color] text-[25px] sm:text-[36px] text-[--light-color] px-[13px] sm:px-[16px] py-[12px] rounded-[15px] sm:max-w-[400px] h-[68px] disabled:bg-[--bg-title-color] ${css}`}
      mask='+7 (999) 999 99-99'
      alwaysShowMask
      name={name}
      id='phone'
      type='text'
      disabled={btnState}
      {...register}
    />
  );
};

export default NumberInput;
