// src/redux/features/faq/faqApi.js
import baseApi from "../../api/baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET all FAQs
        getAllFaqs: builder.query({
            query: () => "/faqs/get-faqs",
            providesTags: ["Faq"],
        }),




    }),
    overrideExisting: false,
});

export const {
    useGetAllFaqsQuery,
} = faqApi;
