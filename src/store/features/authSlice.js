import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token : null
    },
    reducers: {
        addUser: (state, {payload}) => {
            console.log(payload)
            state.user = payload.user ;
            state.token = payload.token;
            Cookies.set("user" , JSON.stringify(state.user), {expires: 365})
            Cookies.set("token" , state.token, {expires: 365})
        },
        removeUser: (state) => {
            state.user = null
            state.token = null
            Cookies.remove("user")
            Cookies.remove("token")
        }
    }
})

export const { addUser , removeUser } = authSlice.actions;
export default authSlice.reducer;