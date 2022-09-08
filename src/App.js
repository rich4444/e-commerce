import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductsContainer from "./components/products-container/ProductsContainer";

function App() {
    return (
        <div lang="ES-es" className="App">
            <Header />
            <Navbar />
            <main>
                <ProductsContainer />
            </main>
        </div>
    );
}

export default App;
