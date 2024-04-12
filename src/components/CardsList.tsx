import ReviewCard from "./ReviewCard";

interface CardsListProps {
  cards: ;
}

const CardsList = ({cards}: CardsListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-[10px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-[25px] w-full">
      cards?.map((card) => (
          <ReviewCard key={game.id} game={game} />
        )
    </ul>
  );
};

export default CardsList;
