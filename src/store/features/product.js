import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: null,
    products : null,
    carts: [],
    mostSells: null,
    totalPrice: 0,
    orders: []
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
            const order = state.orders.find((o) => o.product_id === add.id);
            if (!item) {
              state.carts.push(action.payload);
              state.orders.push({'product_id' : add.id , 'qty' : 1})
              state.totalPrice += parseFloat(action.payload.discountPrice);
            } else {
              item.qty += 1;
              order.qty += 1;
              state.totalPrice += parseFloat(item.discountPrice);
            }
        },
        removeOneQty: (state, action) => {
            const itemId = action.payload;
            console.log(itemId)
            const item = state.carts.find((cart) => cart?.id === itemId);
            const order = state.orders.find((o) => o.product_id === add.id);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                    order.qty -= 1;
                } else {
                    state.carts = state.carts.filter((cart) => cart?.id !== itemId);
                    state.orders = state.orders.filter((o) => o?.id !== itemId);
                }
                state.totalPrice -= parseFloat(item.discountPrice);
            }
        },
        removeFromCarts: (state, action) => {
            const itemId = action.payload;
            const re = state.carts.find((cart) => cart?.id === itemId);
            const t = parseFloat(re.discountPrice) * parseInt(re.qty);
            const item = state.carts.filter((cart) => cart?.id !== itemId);
            const orders = state.carts.filter((o) => o?.id !== itemId);
            state.carts = item;
            state.orders = orders;
            state.totalPrice -= t;
        },
        removeAllFromCarts : (state) => {
            state.carts = [];
            state.orders = [];
        }
    }
})

export const { setCatgory , setProducts , addToCarts , setMostSells,removeAllFromCarts , removeFromCarts, removeOneQty } = productSlice.actions
export default productSlice.reducer;