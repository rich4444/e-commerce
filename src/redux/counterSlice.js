import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.value++;
        },
        decrease: (state) => {
            state.value--;
        },
    },
});

export default counterSlice.reducer;

export const { increase, decrease } = counterSlice.actions;
