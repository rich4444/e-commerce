import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import NotFound from "./routes/not-found/NotFound";
import ProductDetails from "./routes/product/productDetails";
import Cart from "./routes/cart/Cart";

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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
