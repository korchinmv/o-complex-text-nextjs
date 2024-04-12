interface ErrorProps {
  text: string;
  css?: string;
}

const Error = ({ text, css }: ErrorProps) => {
  return (
    <p className={`text-[26px] text-[--red-color] text-center ${css}`}>
      {text}
    </p>
  );
};

export default Error;
