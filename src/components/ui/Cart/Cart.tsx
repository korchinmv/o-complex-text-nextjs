import { useState } from "react";
import { useForm } from "react-hook-form";
import CartItem from "./CartItem";
import NumberInput from "../NumberInput";
import Button from "../Button";

interface CartProps {
  css: string;
}

const Cart = ({ css }: CartProps) => {
  const [number, setNumber] = useState<string>("");
  const { register, handleSubmit, watch } = useForm();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  return (
    <div
      className={`bg-[--bg-card-color] rounded-[15px] p-[12px] py-[10px] max-w-[708px] w-full ${css}`}
    >
      <h3 className='text-[36px] text-center sm:text-left mb-[7px] sm:mb-[11px] leading-none'>
        Добавленные товары
      </h3>

      <ul className='mb-[30px] sm:mb-[20px]'>
        <CartItem />
        <CartItem />
      </ul>

      <form className='flex flex-col sm:flex-row' action='#'>
        <NumberInput
          number={number}
          handleInput={handleInput}
          css='mb-[9px] mr-0 sm:mr-[17px] sm:mb-0'
          name='phone'
        />
        <Button
          text='заказать'
          type='submit'
          label={"заказать товар или товары"}
        />
      </form>
    </div>
  );
};

export default Cart;
