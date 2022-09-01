import React from "react";
import styled from "styled-components";

const Cart = () => {
    return (
        <CartStyled className="cart-container">
            <p id="cart-icon">🛒</p>
        </CartStyled>
    );
};

const CartStyled = styled.div`
    display: flex;
    border: 2px solid lime;
    border-radius: 30px;
    overflow: hidden;
    width: 30px;
    height: 30px;
    #cart-icon {
        background-color: red;
        width: 30px;
        height: 100%;
    }
    p {
        background-color: yellow;
    }
    input {
        text-align: right;
        outline: none;
        border: none;
    }
`;

export default Cart;
