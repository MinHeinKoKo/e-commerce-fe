import { configureStore } from "@reduxjs/toolkit";
import  displaySlice  from "./features/display";
import productSlice from "./features/product"
import Cookies from "js-cookie"
import { productApi } from "../services/productApi";

const themeFromCookies = Cookies.get("theme")

const initialState = {
    display : {
        currentMode : themeFromCookies
    }
};

const store = configureStore({
    reducer: {
        [productApi.reducerPath] : productApi.reducer,
        display: displaySlice,
        product : productSlice
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware
    )
})

export default store;