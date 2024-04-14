"use client";
import { useState, useEffect } from "react";
import { useGetReviewsQuery } from "@/redux/api/reviews.api";
import { Review } from "@/types/Review";
import { v4 as uuidv4 } from "uuid";
import { ClipLoader } from "react-spinners";
import { Product } from "@/types/Product";
import {
  PRODUCTS_LIST_DESKTOP,
  PRODUCTS_LIST_MOBILE,
} from "../utils/variables";
import { useAppSelector } from "@/redux/hooks";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import Container from "@/components/Container";
import Title from "@/components/Title";
import ReviewCard from "@/components/ReviewCard";
import Error from "@/components/Error";
import Cart from "@/components/ui/Cart/Cart";
import ProductCard from "@/components/ProductCard";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetchDataSize, setFetchDataSize] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(true);
  const windowSize = useWindowSize();

  const {
    data: dataReviews,
    error: errorReviews,
    isFetching: isFetchingReviews,
  } = useGetReviewsQuery("");

  useEffect(() => {
    if (fetching) {
      fetch(
        `${process.env.BASE_URL}products?page=${currentPage}&page_size=${fetchDataSize}`
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts([...products, ...data.products]);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [products, fetching, currentPage, fetchDataSize]);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // получение карточек товаров в зависимости от ширины экрана
  const showCount = () => {
    if (windowSize.width > 768) {
      setFetchDataSize(PRODUCTS_LIST_DESKTOP);
    } else if (windowSize.width < 480) {
      setFetchDataSize(PRODUCTS_LIST_MOBILE);
    }
  };

  useEffect(() => {
    showCount();
  }, [windowSize.width, products]);

  return (
    <main className='flex flex-col items-center justify-between py-[13px] sm:py-[55px] px-[14px]'>
      <Title name='тестовое задание' css='mb-[97px] sm:mb-[105px]' />
      <Container>
        {errorReviews ? (
          <Error
            text={"Произошла ошибка. Проблему мы решим.."}
            css={"mb-[20px]"}
          />
        ) : null}

        {isFetchingReviews ? (
          <ClipLoader className='mx-auto' color='#777' />
        ) : (
          <>
            <ul className='grid grid-cols-1 gap-[15px] sm:gap-[34px] sm:grid-cols-2 w-full mb-[240px]'>
              {dataReviews?.map((reviewCard: Review) => {
                return <ReviewCard key={uuidv4()} data={reviewCard?.text} />;
              })}
            </ul>

            <Cart css={"mx-auto mb-[47px]"} />

            <ul className='grid grid-cols-1 gap-[18px] sm:gap-[35px] sm:grid-cols-2 md:grid-cols-3 w-full'>
              {products?.map((product: Product) => {
                return <ProductCard key={uuidv4()} product={product} />;
              })}
            </ul>
            {fetching && (
              <ClipLoader className='mx-auto mt-[20px]' color='#777' />
            )}
          </>
        )}
      </Container>
    </main>
  );
}
