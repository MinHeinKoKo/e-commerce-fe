import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: null,
    products : null,
    carts: [],
    mostSells: null,
    totalPrice: 0
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers: {
        setCatgory: (state , { payload }) => {
            state.categories = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setMostSells: (state, { payload }) => {
            state.mostSells = payload
        },
        addToCarts: (state, action) => {
            const add = action.payload;
            const item = state.carts.find((cart) => cart.id === add.id);
            if (!item) {
              state.carts.push(action.payload);
              state.totalPrice += action.payload.discountPrice;
            } else {
              item.qty += 1;
              state.totalPrice += item.discountPrice;
            }
        },
        removeFromCarts: (state, action) => {
            const itemId = action.payload;
            const re = state.carts.find((cart) => cart?.id === itemId);
            const t = re.price * re.qty;
            const item = state.carts.filter((cart) => cart?.id !== itemId);
            state.carts = item;
            state.totalPrice -= t;
        }
    }
})

export const { setCatgory , setProducts , addToCarts , setMostSells, removeFromCarts } = productSlice.actions
export default productSlice.reducer;