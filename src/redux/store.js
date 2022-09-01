import { configureStore } from "@reduxjs/toolkit";
//import reducers here
import counterReducer from "./counterSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
