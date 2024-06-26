import { Children } from "@/types/Children";

const Container = ({ children }: Children) => {
  return (
    <div className='container max-w-[998px] w-full flex flex-col'>
      {children}
    </div>
  );
};

export default Container;
