import React from "react";
import styled from "styled-components";
import Cart from "../cart/Cart";

const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li>| ROPA</li>
                <li>| COSPLAY</li>
                <li>| UNIFORMES</li>
            </ul>
            <Cart />
        </NavbarStyled>
    );
};

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #f8d9fc;
    padding: 5px 15px;
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        font-weight: 600;
    }
`;

export default Navbar;
