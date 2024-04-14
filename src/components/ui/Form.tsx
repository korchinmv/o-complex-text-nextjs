import { Input } from "@/types/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "@/types/Product";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import NumberInput from "./NumberInput";
import Button from "./Button";

interface FormProps {
  buttonState: boolean;
  productsList: Product[] | Product;
}

const schema = yup
  .object()
  .shape({
    phone: yup.string().required(),
  })
  .required();

const Form = ({ buttonState, productsList }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const formSubmit: SubmitHandler<Input> = (data) =>
    console.log({ phone: data, cart: productsList });

  return (
    <form
      className='flex flex-col sm:flex-row'
      action='#'
      onSubmit={handleSubmit(formSubmit)}
    >
      <NumberInput
        css='mb-[9px] mr-0 sm:mr-[17px] sm:mb-0'
        name='phone'
        register={{ ...register("phone") }}
        btnState={buttonState}
      />
      <Button
        text='заказать'
        type='submit'
        label={"заказать товар или товары"}
        btnState={buttonState}
      />
    </form>
  );
};

export default Form;
