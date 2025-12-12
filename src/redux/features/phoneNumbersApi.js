import baseApi from "../api/baseApi";

export const phoneNumbersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET all phone numbers
        getAllPhoneNumbers: builder.query({
            query: (search) => {
                const params = new URLSearchParams();
                if (search) params.append("search", search);
                return `/phoneNumbers/get-all-phone-numbers?${params.toString()}`;
            },
            providesTags: ["PhoneNumbers"],
        }),
        // CONFIRM phone number
        confirmPhoneNumber: builder.mutation({
            query: (data) => ({
                url: "/phoneNumbers/confirm-phone-number",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["PhoneNumbers"],
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllPhoneNumbersQuery, useLazyGetAllPhoneNumbersQuery, useConfirmPhoneNumberMutation } = phoneNumbersApi;
