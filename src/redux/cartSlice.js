import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            let currentQty = 0;
            if (state.value[action.payload.product._id]?.qty)
                currentQty += Number(
                    state.value[action.payload.product._id].qty
                );
            state.value[action.payload.product._id] = {
                product: action.payload.product,
                qty: currentQty + action.payload.qty,
            };
        },
        remove: (state, action) => {
            delete state.value[action.payload];
        },
    },
});

/**
 *
 * itemsInCart = {
 *      idtesting: {
 *          id: idtesting,
 *          product: product,
 *          qty: 3
 *          }
 * }
 */

export default cartSlice.reducer;

export const { add, remove } = cartSlice.actions;
