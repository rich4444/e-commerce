import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { urlFor } from "../../lib/client";
import StyledProductDetails from "./StyledProductDetails";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const productsData = useSelector((state) => state.productsData.value);

    return (
        <>
            {productsData
                ?.filter((p) => {
                    return p.slug.current == id;
                })
                ?.map((p, i) => {
                    return (
                        <StyledProductDetails
                            key={i}
                            image={urlFor(p.image[0])}
                        >
                            <div className="bg-image"></div>

                            <div className="img-container">
                                <img src={urlFor(p.image[0])} alt="" />
                            </div>

                            <div className="data-container">
                                <div className="title-container">
                                    <h1>{p.name}</h1>
                                    <h2>${p.price}</h2>
                                </div>

                                <div className="options-container">
                                    <label htmlFor="cantidad">Cantidad </label>
                                    <input
                                        type="number"
                                        name="cantidad"
                                        id="cantidad"
                                        min="1"
                                        defaultValue="1"
                                    />
                                    <label htmlFor="color">Color </label>
                                    <select name="color" id="selected-color">
                                        <option value="black">Negro</option>
                                    </select>
                                    <label htmlFor="talle">Talle </label>
                                    <select name="talle" id="selected-size">
                                        <option value="M">M</option>
                                    </select>
                                </div>

                                <div className="buttons-container">
                                    <button className="buy">COMPRAR</button>
                                    <button className="add">CARRITO 🛒</button>

                                    <button className="back">
                                        <Link
                                            to={"/"}
                                            style={{ textDecoration: "none", color: "inherit"}}
                                        >
                                            {"<"} Volver
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </StyledProductDetails>
                    );
                })}
        </>
    );
};

export default ProductDetails;
