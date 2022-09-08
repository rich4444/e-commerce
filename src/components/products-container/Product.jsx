import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { urlFor } from "../../lib/client";
import { Link } from "react-router-dom";
import ProductStyled from "./ProductStyled";

const Product = (props) => {
    const { product, options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <Link
            to={"/product/" + product.slug.current}
            style={{ textDecoration: "none" }}
        >
            <ProductStyled
                image={urlFor(product.image[0])}
                ref={tilt}
                {...rest}
            >
                <div className="data">
                    <h4>{product.name}</h4>
                    <h3>${product.price}</h3>
                </div>
            </ProductStyled>
        </Link>
    );
};

export default Product;
