import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import { Product } from "@/types/Product";
import CartItem from "./CartItem";
import Form from "../Form";

interface CartProps {
  css: string;
}

const Cart = ({ css }: CartProps) => {
  const productsList = useAppSelector(cartSelector);
  console.log(productsList);

  return (
    <div
      className={`bg-[--bg-card-color] rounded-[15px] p-[12px] py-[10px] max-w-[708px] w-full ${css}`}
    >
      <h3 className='text-[36px] text-center sm:text-left mb-[7px] sm:mb-[11px] leading-none'>
        {productsList?.cartItems.length > 0
          ? "Добавленные товары"
          : "Добавьте товары"}
      </h3>

      <ul className='mb-[30px] sm:mb-[20px]'>
        {productsList.cartItems?.map((product: Product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      </ul>

      <Form
        buttonState={productsList?.cartItems.length > 0 ? false : true}
        productsList={productsList?.cartItems}
      />
    </div>
  );
};

export default Cart;
