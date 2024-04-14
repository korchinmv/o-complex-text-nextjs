import { Product } from "@/types/Product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  cartItems: Product[];
}

const initialState: InitialState = {
  cartItems: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log(newItem);

      if (!state.cartItems.some((item) => item.id === newItem.id)) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalQty: 1,
          totalPrice: newItem.price,
        });
      }
    },
  },
});

export const { addProduct } = cartReducer.actions;

export default cartReducer.reducer;
