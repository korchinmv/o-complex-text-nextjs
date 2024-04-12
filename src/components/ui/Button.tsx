interface ButtonProps {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button
      className='bg-[--bg-page-color] text-[26px] sm:text-[36px] text-[--light-color] rounded-[15px] min-w-[268px] w-full leading-none'
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
