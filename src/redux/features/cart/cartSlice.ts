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
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      const newItem = payload;
      const id = payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else if (existingItem) {
        existingItem.quantity!++;
      }
    },

    removeItem(state, { payload }) {
      const id = payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingItem.quantity!--;
        }
      }
    },
  },
});

export const { addProduct, removeItem } = cartReducer.actions;

export default cartReducer.reducer;
