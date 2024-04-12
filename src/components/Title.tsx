interface TitleProps {
  name: string;
  css?: string;
}

const Title = ({ name, css }: TitleProps) => {
  return (
    <h1
      className={`text-[--light-color] text-[40px] bg-[--bg-title-color] leading-1 max-w-[1442px] w-full text-center rounded-[15px] py-[6px] px-[10px] sm:text-[96px] ${
        css ? css : ""
      }`}
    >
      {name}
    </h1>
  );
};

export default Title;
