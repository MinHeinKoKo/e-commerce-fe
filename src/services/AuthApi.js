import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
    tagTypes: ['Auth'],
    endpoints : (builder) => ({
        login: builder.mutation({
            query: (user) =>({
                url: "login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: user
            }),
            invalidatesTags: ["Auth"]
        }),
        register: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    Accept: "application/json"
                },
                body:user,
            }),
            invalidatesTags: ["Auth"]
        }),
        logout: builder.mutation({
            query: (token) => ({
                url : "/logout",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    authorization : `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Auth"]
        }),
    })
})

export const { useRegisterMutation , useLoginMutation , useLogoutMutation } = authApi;