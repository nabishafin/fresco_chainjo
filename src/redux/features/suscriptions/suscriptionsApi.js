// src/redux/features/subscriptions/subscriptionsApi.js
import baseApi from "../../api/baseApi";

export const subscriptionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET all subscriptions
        getAllSubscriptions: builder.query({
            query: () => "/coins/get-coins",
            providesTags: ["Subscription"],
        }),

        // GET single subscription by ID
        getSubscriptionById: builder.query({
            query: (id) => `/coins/get-single-ccoin/${id}`,
            providesTags: (result, error, id) => [{ type: "Subscription", id }],
        }),

        // Pay for coins
        payCoin: builder.mutation({
            query: (data) => ({
                url: "/coins/pay-coin",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Subscription"],
        }),

        // // CREATE new subscription
        // addSubscription: builder.mutation({
        //     query: (data) => ({
        //         url: "/subscriptions",
        //         method: "POST",
        //         body: data,
        //     }),
        //     invalidatesTags: ["Subscription"],
        // }),

        // // UPDATE subscription
        // updateSubscription: builder.mutation({
        //     query: ({ id, ...data }) => ({
        //         url: `/subscriptions/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: (result, error, { id }) => [{ type: "Subscription", id }],
        // }),

        // // DELETE subscription
        // deleteSubscription: builder.mutation({
        //     query: (id) => ({
        //         url: `/subscriptions/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Subscription"],
        // }),
    }),
    overrideExisting: false,
});

export const {
    useGetAllSubscriptionsQuery,
    useGetSubscriptionByIdQuery,
    usePayCoinMutation,
    useAddSubscriptionMutation,
    useUpdateSubscriptionMutation,
    useDeleteSubscriptionMutation,
} = subscriptionsApi;
