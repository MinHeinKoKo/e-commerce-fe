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
              state.totalPrice += parseFloat(action.payload.discountPrice);
            } else {
              item.qty += 1;
              state.totalPrice += parseFloat(item.discountPrice);
            }
        },
        removeOneQty: (state, action) => {
            const itemId = action.payload;
            console.log(itemId)
            const item = state.carts.find((cart) => cart?.id === itemId);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.carts = state.carts.filter((cart) => cart?.id !== itemId);
                }
                state.totalPrice -= parseFloat(item.discountPrice);
            }
        },
        removeFromCarts: (state, action) => {
            const itemId = action.payload;
            const re = state.carts.find((cart) => cart?.id === itemId);
            const t = parseFloat(re.discountPrice) * parseInt(re.qty);
            const item = state.carts.filter((cart) => cart?.id !== itemId);
            state.carts = item;
            state.totalPrice -= t;
        }
    }
})

export const { setCatgory , setProducts , addToCarts , setMostSells, removeFromCarts, removeOneQty } = productSlice.actions
export default productSlice.reducer;