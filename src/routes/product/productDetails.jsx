import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { urlFor } from "../../lib/client";
import StyledProductDetails from "./StyledProductDetails";
import { Link } from "react-router-dom";
import { add } from "../../redux/cartSlice";

const ProductDetails = () => {
    const { id } = useParams();
    const productsData = useSelector((state) => state.productsData.value);
    const cartData = useSelector((state) => state.cart.value);
    const [currentImage, setCurrentImage] = useState();
    const [currentQty, setCurrentQty] = useState(1);
    const dispatch = useDispatch();

    //TODO make it change the image automatically after X seconds
    // const previewImages = [];

    // const intervalID = setInterval(changeImage, 1000);
    // function changeImage() {
    //     if (previewImages.length > 1) {
    //         console.log(previewImages);
    //     }
    // }

    function qtyHandler(e) {
        let newValue = Number(e.target.value);
        if (newValue < 1) newValue = 1;
        setCurrentQty(newValue);
    }

    function addToCart(p) {
        const newObj = { product: p, qty: currentQty };
        dispatch(add(newObj));
    }

    return (
        <>
            {productsData
                ?.filter((p) => {
                    return p.slug.current === id;
                })
                ?.map((p, i) => {
                    if (!currentImage) setCurrentImage(p.image[0]);
                    return (
                        <StyledProductDetails
                            key={i}
                            image={
                                currentImage
                                    ? urlFor(currentImage)
                                    : urlFor(p.image[0])
                            }
                        >
                            <div className="bg-image"></div>

                            <div className="img-container">
                                <img
                                    src={
                                        currentImage
                                            ? urlFor(currentImage)
                                            : urlFor(p.image[0])
                                    }
                                    alt=""
                                />

                                <div className="images-preview-container">
                                    {p.image.map((item, j) => {
                                        //TODO change image automatically?
                                        //previewImages.push(item);
                                        return (
                                            <div
                                                key={j}
                                                className={`images-preview ${
                                                    currentImage == item &&
                                                    "selected"
                                                }`}
                                            >
                                                <img
                                                    src={urlFor(item)}
                                                    alt="preview of another model"
                                                    onClick={() =>
                                                        setCurrentImage(item)
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
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
                                        value={currentQty}
                                        onChange={(e) => qtyHandler(e)}
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
                                    <Link
                                        to={"/cart"}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <button
                                            className="buy"
                                            onClick={() => addToCart(p)}
                                        >
                                            COMPRAR
                                        </button>
                                    </Link>

                                    <button
                                        className="add"
                                        onClick={() => addToCart(p)}
                                    >
                                        CARRITO 🛒
                                        <span>
                                            {Object.entries(cartData).reduce(
                                                (acc, current) =>
                                                    (acc += current[1].qty),
                                                0
                                            )}
                                        </span>
                                    </button>

                                    <button className="back">
                                        <Link
                                            to={"/"}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
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
