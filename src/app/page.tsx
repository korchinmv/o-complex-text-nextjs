"use client";
import { useGetReviewsQuery } from "@/redux/api/reviews.api";
import { Review } from "@/types/Review";
import { v4 as uuidv4 } from "uuid";
import { ClipLoader } from "react-spinners";
import Container from "@/components/Container";
import Title from "@/components/Title";
import ReviewCard from "@/components/ReviewCard";
import Error from "@/components/Error";
import Cart from "@/components/ui/Cart/Cart";

export default function Home() {
  const {
    isLoading: isLoadingReviews,
    data: dataReviews,
    error: errorReviews,
    isFetching: isFetchingReviews,
  } = useGetReviewsQuery("");

  return (
    <main className='flex flex-col items-center justify-between py-[13px] sm:py-[55px] px-[14px]'>
      <Title name='тестовое задание' css='mb-[97px] sm:mb-[105px]' />
      <Container>
        {errorReviews && (
          <Error
            text={"Произошла ошибка. Отзывы мы Вам не покажем.."}
            css={"mb-[20px]"}
          />
        )}
        {isLoadingReviews || isFetchingReviews ? (
          <ClipLoader className='mx-auto' color='#777' />
        ) : (
          <ul className='grid grid-cols-1 gap-[15px] sm:gap-[34px] sm:grid-cols-2 w-full mb-[243px]'>
            {dataReviews?.map((reviewCard: Review) => {
              return <ReviewCard key={uuidv4()} data={reviewCard?.text} />;
            })}
          </ul>
        )}
        <Cart css={"mx-auto"} />
      </Container>
    </main>
  );
}
