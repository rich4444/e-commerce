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
    &.onSale {
        position: relative;
        box-shadow: 0 0 10px 0 red;
        animation: burn 1.5s linear infinite alternate;

        @keyframes burn {
            from {
                box-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85,
                    -0.2em -0.2em 0.4em #ffae34, 0.2em -0.3em 0.3em #ec760c,
                    -0.2em -0.4em 0.4em #cd4606, 0.1em -0.5em 0.7em #973716,
                    0.1em -0.7em 0.7em #451b0e;
            }
            45% {
                box-shadow: 0.1em -0.2em 0.5em #fefcc9, 0.15em 0 0.4em #feec85,
                    -0.1em -0.25em 0.5em #ffae34, 0.15em -0.45em 0.5em #ec760c,
                    -0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
                    0.2em -1em 0.8em #451b0e;
            }
            70% {
                box-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85,
                    -0.2em -0.2em 0.6em #ffae34, 0.2em -0.3em 0.4em #ec760c,
                    -0.2em -0.4em 0.7em #cd4606, 0.1em -0.5em 0.7em #973716,
                    0.1em -0.7em 0.9em #451b0e;
            }
            to {
                box-shadow: -0.1em -0.2em 0.6em #fefcc9, -0.15em 0 0.6em #feec85,
                    0.1em -0.25em 0.6em #ffae34, -0.15em -0.45em 0.5em #ec760c,
                    0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
                    -0.2em -1em 0.8em #451b0e;
            }
        }

        &::before {
            content: "OFERTA";
            position: absolute;
            top: 10px;
            right: 10px;
            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 50%;
            text-align: center;
            line-height: 4;
            font-size: 0.7rem;
            font-weight: 900;
            color: white;
            box-shadow: 0 0 0 2px white, 0 0 0 5px red, 0px 10px 10px 5px black;
            rotate: 45deg;
        }
    }
    &:hover {
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
