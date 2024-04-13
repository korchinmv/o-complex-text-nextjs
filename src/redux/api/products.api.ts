import { api } from "./api.js";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, size }) => `products?page=${page}&page_size=${size}`,
    }),
    getScrollProducts: builder.query({
      query: ({ page, size }) => `products?page=${page}&page_size=${size}`,
    }),
  }),
});

export const { useLazyGetScrollProductsQuery, useGetProductsQuery } =
  productsApi;
