import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "favoritesGames",
  initialState,

  reducers: {
    addProduct: (state, action) => {},
  },
});

export const { addProduct } = cartReducer.actions;

export default cartReducer.reducer;
