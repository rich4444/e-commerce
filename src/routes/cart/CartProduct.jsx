import React from "react";
import styled from "styled-components";
import { urlFor } from "../../lib/client";

const CartProduct = ({ product, qty }) => {
    return (
        <StyledCartProduct>
            <button className="removeItem">X</button>
            <img
                src={urlFor(product.image[0])}
                alt="small photo of the product"
            />
            <p className="productName">{product.name}</p>
            <p>x{qty}</p>
            <p className="price">${product.price * qty}</p>
        </StyledCartProduct>
    );
};

const StyledCartProduct = styled.div`
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    .removeItem {
        height: 30px;
        width: 30px;
    }
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        overflow: hidden;
    }
    .productName {
    }

    .price {
        margin-left: auto;
    }
`;

export default CartProduct;
