import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getCategories : builder.query({
            query: ({perPage , page}) => ({
                url: `/categories?limit=${perPage}&page=${page}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }),
            providesTags: ["Category"]
        })
    })
})

export const { useGetCategoriesQuery } = categoryApi;