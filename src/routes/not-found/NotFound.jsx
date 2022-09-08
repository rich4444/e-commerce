import React from "react";
import bgImage from "./../../images/notfound.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NotFound = () => {
    return (
        <StyledNotFound bgImage={bgImage}>
            <img id="logo" src={logo} alt="logo de mis princesas" />
            <div className="textContainer">
                <h1>Pagina no encontrada</h1>
                <p>
                    La pagina que estas buscando no esta disponible en nuetra
                    web prefieres
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <button>volver a la pagina principal</button>
                    </Link>
                </p>
            </div>
        </StyledNotFound>
    );
};

const StyledNotFound = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    filter: brightness(0.8);
    box-shadow: inset 0 0 20px 20px #000000da;
    display: flex;
    align-items: center;
    justify-content: center;

    #logo {
        width: 250px;
        max-width: 90%;
        position: fixed;
        top: 10px;
        left: 10px;
        filter: drop-shadow(0 0 5px white);
    }

    .textContainer {
        width: 100%;
        height: fit-content;
        background-color: #ffffffdd;
        padding: 20px 20px;
        width: 600px;
        max-width: 100%;
        h1 {
            font-size: clamp(1.2rem, 5vw, 2.2rem);
            margin-bottom: 10px;
        }
        p {
            font-size: clamp(1rem, 5vw, 1.3rem);
            line-height: 1.5;
            button {
                font-size: clamp(1rem, 5vw, 1.3rem);
                background-color: black;
                color: white;
                border-radius: 30px;
                padding: 5px 15px;
                outline: none;
                border: none;
                cursor: pointer;
            }
        }
    }
`;

export default NotFound;
