import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        mostSellItems: builder.query ({
            query: () => ({
                url: "/most-sell-products",
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            }),
            providesTags: ["Product"]
        })
    })
})

export const { useMostSellItemsQuery } = productApi;