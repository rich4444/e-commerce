import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { urlFor } from "../../lib/client";
import StyledProductDetails from "./StyledProductDetails";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const productsData = useSelector((state) => state.productsData.value);
    const [currentImage, setCurrentImage] = useState();

    //TODO make it change the image automatically after X seconds
    // const previewImages = [];

    // const intervalID = setInterval(changeImage, 1000);
    // function changeImage() {
    //     if (previewImages.length > 1) {
    //         console.log(previewImages);
    //     }
    // }

    return (
        <>
            {productsData
                ?.filter((p) => {
                    return p.slug.current == id;
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
