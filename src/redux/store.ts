import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import cartReducer from "./features/cart/cartSlice";

export const store = () => {
  return configureStore({
    reducer: {
      cartReducer,
      [api.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
