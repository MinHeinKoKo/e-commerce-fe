// import axios from "axios";

import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const fetchMostSellItems = async() => {
//     try {
//         const { data } = await axios.get("http://127.0.0.1:8000/api/most-sell-products")
//         .then((response) => {
//             console.log(response.data)
//         })
//         return data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

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