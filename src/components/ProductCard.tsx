import Image from "next/image";
import Button from "./ui/Button";

interface ProductCardProps {
  urlImg: string;
  title: string;
  price: number;
  descr: string;
}

const ProductCard = ({ urlImg, title, price, descr }: ProductCardProps) => {
  return (
    <li>
      <article className='bg-[--bg-card-color] py-[9px] px-[10px] rounded-[15px] flex flex-col h-full'>
        <Image
          className='rounded-[15px] w-[310px] h-[366px] object-cover object-top self-center'
          width={0}
          height={0}
          src={urlImg}
          unoptimized
          alt={`${title} image`}
          priority
        />
        <h4 className='text-center text-[36px] line-clamp-2'>{title}</h4>
        <p className='line-clamp-5 flex-grow-1'>{descr}</p>
        <div className='mt-auto text-center mb-[33px] text-[36px]'>
          <span>цена: </span>
          <span>{price}₽</span>
        </div>
        <Button text='купить' type='button' label='добавить товар в корзину' />

        <div className='flex justify-between text-[36px] text-[--light-color]'>
          <button
            className='w-[68px] h-[68px] rounded-[15px] bg-[--bg-page-color]'
            // onClick={(event) => incrementItem(event)}
          >
            -
          </button>
          <input className='w-[128px] p-[3px] text-center rounded-[15px] bg-[--bg-page-color] outline outline-transparent'></input>
          <button
            className='w-[68px] h-[68px] rounded-[15px] bg-[--bg-page-color]'
            // onClick={(event) => decreaseItem(event)}
          >
            +
          </button>
        </div>
      </article>
    </li>
  );
};

export default ProductCard;
