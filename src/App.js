import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductsContainer from "./components/products-container/ProductsContainer";
import { Link } from "react-router-dom";

function App() {
    return (
        <div lang="ES-es" className="App">
            <nav style={{ padding: "1rem" }}>
                <Link to="/invoices">Invoices</Link>
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Header />
            <Navbar />
            <main>
                <ProductsContainer />
            </main>
        </div>
    );
}

export default App;
