import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import ProductsContainerStyled from "./ProductsContainerStyled";

const ProductsContainer = () => {
    const productsData = useSelector((state) => state.productsData.value);
    const currentType = useSelector((state) => state.type.value);
    const currentTags = useSelector((state) => state.tags.value);
    const currentSort = useSelector((state) => state.sort.value);

    const matchType = (type) => {
        if (currentType === "all") return true;
        return type === currentType;
    };

    const matchTags = (tags) => {
        if (currentTags.length <= 0 || tags == undefined) return true;
        for (let i = 0; i < currentTags.length; i++) {
            if (!tags.includes(currentTags[i])) return false;
        }
        return true;
    };

    const sortFunc = (a, b) => {
        if (currentSort === "priceDesc") {
            return b.price - a.price;
        } else if (currentSort === "priceAsc") {
            return a.price - b.price;
        } else {
            return a.name <= b.name ? -1 : 1;
        }
    };

    const propOption = {
        glare: true,
        "max-glare": 0.5,
        reverse: true,
        transition: true,
        speed: 300,
        max: 10,
    };
    return (
        <ProductsContainerStyled>
            {productsData
                ?.filter((item) => {
                    return matchType(item.type) && matchTags(item.tags);
                })
                .sort((a, b) => {
                    return sortFunc(a, b);
                })
                .map((p, i) => {
                    return <Product key={i} product={p} options={propOption} />;
                })}
        </ProductsContainerStyled>
    );
};

export default ProductsContainer;
