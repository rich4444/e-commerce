import styled from "styled-components";

const HeaderStyled = styled.header`
    height: 300px;
    width: 100%;
    background-color: pink;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    #logo-small {
        display: none;
    }

    .logo-container {
        height: 100%;
        width: 40%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-left: 20px;

        img {
            width: 100%;
            padding: 0 25px 0 10px;
        }

        .wave {
            width: 100px;
            height: 100%;
            position: absolute;
            right: 0;
            z-index: 10;
            svg {
                transform: translateX(75px);
                height: 100%;
                width: 100%;
                path {
                    stroke: none;
                    fill: #ffffff;
                    filter: drop-shadow(40px 0 10px black);
                }
            }
        }
    }

    .slides-container {
        position: relative;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 768px) {
        height: 350px;
        .logo-container {
            display: none;
        }

        #logo-small {
            display: block;
            position: absolute;
            top: 10px;
            left: 10px;
            width: 250px;
            max-width: 50%;
        }
    }
    @media (max-width: 480px) {
        height: 450px;
        #logo-small {
            top: 20px;
            left: 50%;
            max-width: 90%;
            transform: translateX(-50%);
        }
    }
`;

export default HeaderStyled;
