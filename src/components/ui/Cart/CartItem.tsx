const CartItem = () => {
  return (
    <li className='text-[24px] flex justify-between max-w-[380px] w-full'>
      <h3>Товар</h3>
      <div className=''>
        <span className='mr-[15px]'>x3</span>
        <span>1900₽</span>
      </div>
    </li>
  );
};

export default CartItem;
