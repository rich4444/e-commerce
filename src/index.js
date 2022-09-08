import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./routes/product/productDetails";

import { useDispatch } from "react-redux";
import { client } from "./lib/client";
import { saveData } from "./redux/productsSlice";



function LoadData() {
    const dispatch = useDispatch();

    useEffect(() => {
        client
            .fetch('*[_type == "product"]', {})
            .then((res) => {
                dispatch(saveData(res));
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return <></>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <LoadData />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/e-commerce" element={<App />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
