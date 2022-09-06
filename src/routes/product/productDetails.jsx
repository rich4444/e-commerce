import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { urlFor } from "../../lib/client";
import styled from "styled-components";

const ProductDetails = () => {
    const { id } = useParams();
    const productsData = useSelector((state) => state.productsData.value);

    return (
        <>
            {productsData
                ?.filter((p) => {
                    console.log(p)
                    return p.slug.current == id;
                })
                ?.map((p, i) => {
                    return (
                        <StyledProductDetails
                            key={i}
                            image={urlFor(p.image[0])}
                        >
                            <div className="bg-image"></div>
                            <h1>TESINGS</h1>
                            <h2>{p.name}</h2>
                            <img src={urlFor(p.image[0])} alt="" />
                        </StyledProductDetails>
                    );
                })}
        </>
    );
};

const StyledProductDetails = styled.div`
    height: 100vh;
    overflow: hidden;
    .bg-image {
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        height: 100%;
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center;
        filter: blur(10px);
    }
`;

export default ProductDetails;
