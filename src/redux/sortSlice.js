import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "name",
};

export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        changeSort: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default sortSlice.reducer;

export const { changeSort } = sortSlice.actions;
