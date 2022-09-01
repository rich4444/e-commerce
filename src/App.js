import "./App.css";
import React, { useState, useEffect } from "react";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductsContainer from "./components/products-container/ProductsContainer";

function App() {
    return (
        <div lang="ES-es" className="App">
            <Header />
            <Navbar />
            <main>
                <Filters />
                <ProductsContainer />
            </main>
        </div>
    );
}

export default App;
