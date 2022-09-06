import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [], //TODO CHANGE BACK TO EMPTY
};

export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag: (state, action) => {
            if (state.value.indexOf(action.payload) < 0)
                state.value.push(action.payload);
        },
        removeTag: (state, action) => {
            state.value = state.value.filter((item) => item !== action.payload);
        },
    },
});

export default tagsSlice.reducer;

export const { addTag, removeTag } = tagsSlice.actions;
