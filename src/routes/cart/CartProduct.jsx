import React from "react";
import styled from "styled-components";
import { urlFor } from "../../lib/client";
import IconClose from "./../../images/icons/icon-close.png";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/cartSlice";

const CartProduct = ({ product, qty }) => {
    const dispatch = useDispatch();

    return (
        <StyledCartProduct>
            <button
                className="removeItem"
                onClick={() => dispatch(remove(product._id))}
            >
                <img src={IconClose} alt="" />
            </button>
            <img
                src={urlFor(product.image[0])}
                alt="small preview of the product"
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
        background-color: none;
        border: none;
        outline: none;
        cursor: pointer;
        img {
            height: 100%;
            width: 100%;
        }
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
