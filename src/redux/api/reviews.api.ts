import { api } from "./api.js";

export const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "reviews",
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
