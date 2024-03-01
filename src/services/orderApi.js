import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

const token = Cookies.get('token');

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/api"}),
    tagTypes: ['Order'],
    endpoints:(builder) => ({
        getReceipts: builder.query({
            query:() =>({
                url: '/orders',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    authorization: `Bearer ${token}`,
                }
            }),
            providesTags: ['Order']
        }),
        order: builder.mutation({
            query :(orders) =>({
                url: '/orders',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
                body: orders
            })
        }),
    })
})

export const { useGetReceiptsQuery, useOrderMutation } = orderApi