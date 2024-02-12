import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./features/display";
import productSlice from "./features/product";
import Cookies from "js-cookie";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";
import { authApi } from "../services/AuthApi.js";
import authSlice from './features/authSlice.js'

const themeFromCookies = Cookies.get("theme");
const userFromCookies = Cookies.get("user") === undefined ? null : JSON.parse(Cookies.get("user"));
const tokenFromCookies = Cookies.get("token") ? Cookies.get("token") : null;

const initialState = {
    display: {
        currentMode: themeFromCookies,
    },
    // Use "user" as the key for the preloaded state
    auth: {
        user: userFromCookies,
        token: tokenFromCookies,
    },
};


const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        display: displaySlice,
        auth: authSlice,
        product: productSlice,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, categoryApi.middleware),
});

export default store;
