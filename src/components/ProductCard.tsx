import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { useState } from "react";
import { Product } from "@/types/Product";
import Image from "next/image";
import Button from "./ui/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [buyed, setBuyed] = useState<boolean>(false);
  const [inputNumber, setInputNumber] = useState<number>(1);
  const dispatch = useAppDispatch();

  const incrementItem = (event) => {
    dispatch(
      addProduct({
        totalQty: inputNumber,
        totalPrice: inputNumber * product.price,
      })
    );
    event.stopPropagation();
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputNumber(event.target.value);
  };

  const handleAddProductInCart = () => {
    dispatch(addProduct(product));
    setBuyed(true);
  };

  return (
    <li>
      <article className='bg-[--bg-card-color] py-[9px] px-[10px] rounded-[15px] flex flex-col h-full'>
        <Image
          className='rounded-[15px] w-[310px] h-[366px] object-cover object-top self-center'
          width={0}
          height={0}
          src={product?.image_url}
          unoptimized
          alt={`${product.title} image`}
          priority
        />
        <h4 className='text-center text-[36px] line-clamp-2'>
          {product.title}
        </h4>
        <p className='line-clamp-5 flex-grow-1'>{product.description}</p>
        <div className='mt-auto text-center mb-[33px] text-[36px]'>
          <span>цена: </span>
          <span>{product.price}₽</span>
        </div>
        {buyed ? (
          <div className='flex justify-between text-[36px] text-[--light-color]'>
            <button
              className='w-[68px] h-[68px] rounded-[15px] bg-[--bg-page-color]'
              // onClick={(event) => incrementItem(event)}
            >
              -
            </button>
            <input
              className='w-[128px] p-[3px] text-center rounded-[15px] bg-[--bg-page-color] outline outline-transparent'
              value={inputNumber}
              onChange={handleInputChange}
            />

            <button
              className='w-[68px] h-[68px] rounded-[15px] bg-[--bg-page-color]'
              onClick={(event) => incrementItem(event)}
            >
              +
            </button>
          </div>
        ) : (
          <Button
            text='купить'
            type='button'
            label='добавить товар в корзину'
            handleClick={handleAddProductInCart}
          />
        )}
      </article>
    </li>
  );
};

export default ProductCard;
