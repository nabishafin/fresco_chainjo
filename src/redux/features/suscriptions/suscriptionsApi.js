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
        // getSubscriptionById: builder.query({
        //     query: (id) => `/subscriptions/${id}`,
        //     providesTags: (result, error, id) => [{ type: "Subscription", id }],
        // }),

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
    useAddSubscriptionMutation,
    useUpdateSubscriptionMutation,
    useDeleteSubscriptionMutation,
} = subscriptionsApi;
