import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "all",
};

export const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {
        changeType: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default typeSlice.reducer;

export const { changeType } = typeSlice.actions;
