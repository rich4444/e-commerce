import styled from "styled-components";
import "@fontsource/raleway";

const StyledProductDetails = styled.div`
    width: 900px;
    max-width: 100%;
    height: 100vh;
    margin: auto;
    padding: 100px 20px;

    overflow: hidden;

    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    .bg-image {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-image: url(${(props) => props.image});
        background-size: 105%;
        scale: 1.1;
        background-repeat: no-repeat;
        filter: blur(5px) brightness(0.8);
        box-shadow: inset 0 0 50px 50px #000000da;
        animation: animated-bg 10s ease-in-out infinite alternate;

        @keyframes animated-bg {
            from {
                background-position: center 55%;
            }
            to {
                background-position: center 45%;
            }
        }
    }

    .img-container {
        background-color: white;
        height: 70vh;
        aspect-ratio: 0.75;
        max-width: 50vw;
        box-shadow: 5px 5px 10px 0 #00000080;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .data-container {
        background-color: white;
        height: 65vh;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 30px 30px 30px 15px;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100px;
            background-color: white;
            top: 0;
            left: -100px;
            z-index: -1;
        }

        .title-container {
            h1 {
                font-family: "Raleway";
                font-weight: 600;
            }
            h2 {
                margin-top: 10px;
                font-weight: 200;
                font-size: 1.5rem;
            }
        }

        .options-container {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            margin-bottom: 10px;
            max-width: 100%;
            label {
                background-color: white;
                width: fit-content;
                margin: auto;
                translate: 0 5px;
            }
            input,
            select {
                padding: 5px 10px;
                outline: none;
                border: 1px solid black;
                border-radius: 50px;
                text-align: center;
            }
        }

        .buttons-container {
            display: flex;
            flex-direction: column;

            width: 250px;
            max-width: 100%;
            margin-top: auto;

            button {
                padding: 5px 20px;
                border: none;
                outline: none;
                font-family: "Raleway";
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                &:nth-child(1),
                &:nth-child(2) {
                    &:hover {
                        transform: scale(1.05);
                        box-shadow: 0 5px 10px 0 #00000096;
                    }
                    &:active {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 #00000096;
                    }
                }

                &:nth-child(1) {
                    background-color: black;
                    color: white;
                }
                &:nth-child(2) {
                    background-color: white;
                    border: 2px solid black;
                }
                &:nth-child(3) {
                    margin-top: 5px;
                    background-color: transparent;
                    text-align: right;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 20px;
        gap: 0;
        .data-container {
            height: 90%;
            padding: 20px;
            max-width: 55%;

            &:before {
                content: none;
            }
        }
        .img-container {
            height: auto;
            aspect-ratio: 0.75;
            box-shadow: 5px 5px 10px 0 #00000080;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 20px;
        position: relative;

        .data-container {
            padding: 10px;
            max-width: 100%;
            height: auto;

            .title-container {
                h1 {
                    font-size: 1.5rem;
                }
                h2 {
                    font-size: 1.2rem;
                }
            }
        }
        .img-container {
            height: 100%;
        }
    }
`;

export default StyledProductDetails;
