import { baseApi } from "@/redux/api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFuyhBill: builder.mutation({
      query: (data) => ({
        url: "/payments/create-bill",
        method: "POST",
        body: data,
      }),
    }),
    getFuyhBillStatus: builder.query({
      query: (billId) => ({
        url: `/payments/bill/${billId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateFuyhBillMutation,
  useLazyGetFuyhBillStatusQuery,
} = paymentApi;
