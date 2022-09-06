import { configureStore } from "@reduxjs/toolkit";
//import reducers here
import counterReducer from "./counterSlice.js";
import productsReducer from "./productsSlice.js";
import typeReducer from "./typeSlice.js";
import tagsReducer from "./tagsSlice.js";
import sortReducer from "./sortSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productsData: productsReducer,
        tags: tagsReducer,
        type: typeReducer,
        sort: sortReducer,
    },
});
