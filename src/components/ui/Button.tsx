interface ButtonProps {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label: React.ButtonHTMLAttributes<HTMLButtonElement>["aria-label"];
  btnState: boolean;
  handleClick?: () => void;
}

const Button = ({ text, type, label, handleClick, btnState }: ButtonProps) => {
  return (
    <button
      className='bg-[--bg-page-color] h-[68px] text-[26px] py-[14px] px-[10px] sm:text-[36px] text-[--light-color] rounded-[15px] w-full leading-none disabled:bg-[--bg-title-color]'
      type={type}
      aria-label={label}
      onClick={handleClick}
      disabled={btnState}
    >
      {text}
    </button>
  );
};

export default Button;
