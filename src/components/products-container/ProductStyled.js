import styled from "styled-components";

const ProductStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    aspect-ratio: 1;
    background-color: white;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    border: 1px solid gray;
    max-width: 100%;
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

    @media (max-width: 480px) {
        .data {
            h3,
            h4 {
                font-size: clamp(0.5rem, 5vw, 1.5rem);
            }
        }
    }
`;

export default ProductStyled;
