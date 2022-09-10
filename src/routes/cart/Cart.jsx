import React from "react";
import StyledCart from "./StyledCart";
import CartProduct from "./CartProduct";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const cartData = useSelector((state) => state.cart.value);

    return (
        <StyledCart>
            <img id="logo" src={logo} alt="logo de mis princesas" />
            <div className="cartContainer">
                <h1>
                    Tienes{" "}
                    {Object.entries(cartData).reduce(
                        (acc, current) => (acc += current[1].qty),
                        0
                    )}{" "}
                    artículos en tu carrito
                </h1>
                <div className="productsContainer">
                    {Object.entries(cartData).map((item) => {
                        return (
                            <CartProduct
                                key={item[0]}
                                product={item[1].product}
                                qty={item[1].qty}
                            />
                        );
                    })}
                </div>
                <h2>
                    Total $
                    {Object.entries(cartData).reduce(
                        (acc, current) => (acc += current[1].qty * current[1].product.price),
                        0
                    )}
                </h2>
                <div className="navigationButtons">
                    <button className="back">
                        <Link
                            to={"/"}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            ← Seguir Navegando
                        </Link>
                    </button>
                    <button className="pay">Proceder con el pago</button>
                </div>
            </div>
        </StyledCart>
    );
};

export default Cart;
