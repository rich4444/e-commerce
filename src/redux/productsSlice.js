import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const productsSlice = createSlice({
    name: "productsData",
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default productsSlice.reducer;

export const { saveData } = productsSlice.actions;
