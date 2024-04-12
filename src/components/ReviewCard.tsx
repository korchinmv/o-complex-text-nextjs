import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface ReviewCardProps {
  data: string;
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <li>
      {isMounted && (
        <article
          className='bg-[--bg-card-color] py-[20px] px-[27px] rounded-[15px]'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}
        ></article>
      )}
    </li>
  );
};

export default ReviewCard;
