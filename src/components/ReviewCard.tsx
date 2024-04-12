import DOMPurify from "dompurify";

const ReviewCard = ({ data }) => {
  return (
    <li>
      <article
        className="bg-[]"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}
      ></article>
    </li>
  );
};

export default ReviewCard;
