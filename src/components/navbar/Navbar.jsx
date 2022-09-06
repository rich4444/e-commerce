import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../cart/Cart";
import Filters from "./Filters";

const Navbar = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <NavbarStyled>
            <button
                className="show-navbar"
                onClick={() => setShowNavbar(!showNavbar)}
            >
                {showNavbar ? "CERRAR" : "NAVBAR"}
            </button>
            {showNavbar && (
                <ul>
                    <li>| ROPA</li>
                    <li>| COSPLAY</li>
                    <li>| UNIFORMES</li>
                </ul>
            )}
            <button
                className="filters-button"
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? "CERRAR" : "FILTROS"}
            </button>
            <Cart />

            {showFilters && <Filters />}
        </NavbarStyled>
    );
};

const NavbarStyled = styled.nav`
    position: sticky;
    z-index: 10;
    top: 0;
    display: flex;
    background-color: #f8d9fc;
    padding: 5px 15px;
    .filters-button {
        background-color: red;
        margin-left: auto;
        margin-right: 10px;
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        font-weight: 600;
    }

    @media (min-width: 300px) {
        ul {
            position: absolute;
            background-color: white;
            top: 50px;
            left: 20px;
            flex-direction: column;
            align-items: flex-start;
            width: 200px;
            border: 1px solid gray;
            padding: 15px;
            box-shadow: 3px 3px 5px 0 #11111185;
        }
    }
`;

export default Navbar;
