import styled from "styled-components";

const StyledCart = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: #dedede;
    align-items: center;
    .cartContainer {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 600px;
        max-width: 95%;
        min-height: 50%;
        box-shadow: 5px 5px 10px 5px #33333381;
        padding: 10px;

        h1 {
            text-align: center;
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 10px;
        }

        .productsContainer {
            border-bottom: 2px solid black;
            max-height: 50vh;
            overflow-y: scroll;
            padding: 10px;
        }

        h2 {
            text-align: right;
            margin-top: auto;
        }

        .navigationButtons {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            button {
                border: none;
                outline: none;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 10px 0 black;
                }
                &:active {
                    transform: scale(1);
                    box-shadow: 0 0 1px 0 black;
                }
            }

            .pay {
                padding: 10px 20px;
                background-color: black;
                color: white;
            }

            .back {
                background-color: white;
                padding: 5px 15px;
                border: 1px solid black;
            }
        }
    }

    #logo {
        width: 250px;
        max-width: 90%;
        position: fixed;
        top: 10px;
        left: 10px;
    }

    @media (max-width: 480px) {
        .cartContainer {
            h1, h2 {
                font-size: clamp(1rem, 5vw, 1.5rem);
            }
            .navigationButtons {
                margin-top: 10px;
                flex-direction: column-reverse;
            }
        }
    }
`;

export default StyledCart;
