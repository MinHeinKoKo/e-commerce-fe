import { configureStore } from "@reduxjs/toolkit";
import  displaySlice  from "./features/display";
import productSlice from "./features/product"
import Cookies from "js-cookie"
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";

const themeFromCookies = Cookies.get("theme")

const initialState = {
    display : {
        currentMode : themeFromCookies
    }
};

const store = configureStore({
    reducer: {
        [productApi.reducerPath] : productApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer ,
        display: displaySlice,
        product : productSlice
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware
    )
})

export default store;