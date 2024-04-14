import { Product } from "@/types/Product";

interface CartItemProps {
  product: Product;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <li className='text-[24px] flex justify-between max-w-[380px] w-full'>
      <h3>{product.title}</h3>
      <div>
        <span className='mr-[15px]'>{`x${product.quantity}`}</span>
        <span>{`${product.price! * product.quantity!}₽`}</span>
      </div>
    </li>
  );
};

export default CartItem;
