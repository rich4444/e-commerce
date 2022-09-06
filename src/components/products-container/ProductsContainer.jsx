import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";

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
        if (currentTags.length <= 0) return true;
        for (let i = 0; i < currentTags.length; i++) {
            console.log(currentTags);
            if (tags.includes(currentTags[i])) return true;
        }
        return false;
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
        scale: 1.1,
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

const ProductsContainerStyled = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    --grid-layout-gap: 10px;
    --grid-column-count: 4;
    --grid-item--min-width: 250px;

    /**
   * Calculated values.
   */
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: calc(
        (100% - var(--total-gap-width)) / var(--grid-column-count)
    );

    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(
            max(var(--grid-item--min-width), var(--grid-item--max-width)),
            1fr
        )
    );
    grid-gap: var(--grid-layout-gap);
`;

export default ProductsContainer;
