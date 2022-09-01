import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";
import { client, urlFor } from "../../lib/client";

const ProductsContainer = () => {
    const [productsData, setProductsData] = useState();

    useEffect(() => {
        client
            .fetch('*[_type == "product"]', {})
            .then((res) => {
                setProductsData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });

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
            {productsData?.map((p, i) => {
                return <Box key={i} product={p} options={propOption} />;
            })}
        </ProductsContainerStyled>
    );
};

function Box(props) {
    const { product, options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <BoxStyled image={urlFor(product.image[0])} ref={tilt} {...rest}>
            <div className="data">
                <h4>{product.name}</h4>
                <h3>${product.price}</h3>
            </div>
        </BoxStyled>
    );
}

const BoxStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    aspect-ratio: 1;
    border: 1px solid #0077ffff;
    isolation: isolate;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    &:hover {
        z-index: 10;
        box-shadow: 0 0 20px 5px #5e5e5e88;
    }
    .data {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3,
        h4 {
            background-color: #353535b9;
            font-size: 1.4rem;
            width: 100%;
            padding: 10px;
            text-align: center;
            color: white;
            text-shadow: 1px 1px 2px black;
            transition: all 0.3s ease;
            transform: translateY(-100%);
        }
        h3 {
            transform: translateY(100%);
        }

        &:hover > h3,
        &:hover > h4 {
            transform: translateY(0);
        }
    }
`;

const ProductsContainerStyled = styled.div`
    width: 100%;
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
