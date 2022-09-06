import React from "react";
import styled from "styled-components";
import Slide from "./Slide";
import hoodie from "../../images/hoddie.webp";
import cosplay from "../../images/cosplay.webp";
import uniform from "../../images/uniform.webp";
import logo from "../../images/logo.png";
import { useState } from "react";

const Header = () => {
    const initialSlides = [
        {
            classIndex: 0,
            text: "DISEÑOS PERSONALIZADOS",
            middleElement: createMiddleObject("hoodie"),
            cPrimary: "#ed7eee",
            cSecondary: "#6ddfee",
            angle: 45,
        },
        {
            classIndex: 1,
            text: "HECHOS POR ENCARGO",
            middleElement: createMiddleObject("cosplay"),
            cPrimary: "#7efff4ff",
            cSecondary: "#f15da2fd",
            angle: 15,
        },
        {
            classIndex: 2,
            text: "TODOS LOS TALLES",
            middleElement: createMiddleObject("uniform"),
            cPrimary: "#c2c2c2",
            cSecondary: "#3be27bff",
            angle: -33,
        },
    ];

    const [cSlide, setCurrentSlide] = useState(0);
    const [backSlide, setBackSlide] = useState();
    const [started, setStarted] = useState(false);

    function createMiddleObject(t) {
        switch (t) {
            case "hoodie":
                return (
                    <img className="middlePhoto" src={hoodie} alt="A hoodie" />
                );
            case "uniform":
                return (
                    <img
                        className="middlePhoto"
                        src={uniform}
                        alt="A cosplay"
                    />
                );
            case "cosplay":
                return (
                    <img
                        className="middlePhoto"
                        src={cosplay}
                        alt="A uniform"
                    />
                );
            default:
                <img className="middlePhoto" src={hoodie} alt="Hoodie" />;
        }
    }

    const intervalId = window.setInterval(function () {
        animateSlides();
    }, 6000);

    function animateSlides() {
        clearInterval(intervalId);
        setStarted(true);
        let curr = cSlide;
        setBackSlide(staticSlides[curr]);
        curr++;
        if (curr > 2) curr = 0;
        setCurrentSlide(curr);
    }

    const slidesElements = initialSlides.map((slide, i) => {
        return (
            <Slide
                id={i}
                key={i}
                started={started}
                text={slide.text}
                middleElement={slide.middleElement}
                cPrimary={slide.cPrimary}
                cSecondary={slide.cSecondary}
                angle={slide.angle}
            />
        );
    });

    const staticSlides = initialSlides.map((slide, i) => {
        return (
            <Slide
                id={"static"}
                key={i}
                text={slide.text}
                middleElement={slide.middleElement}
                cPrimary={slide.cPrimary}
                cSecondary={slide.cSecondary}
                angle={slide.angle}
            />
        );
    });
    function whatToShow() {
        switch (cSlide) {
            case 0:
                return slidesElements[0];
            case 1:
                return slidesElements[1];
            default:
                return slidesElements[2];
        }
    }

    return (
        <HeaderStyled>
            <div className="logo-container">
                <img src={logo} alt="logo" />

                <div className="wave">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M291.48,-0.47 C-0.84,80.44 500.84,69.58 288.66,151.48 L0.00,150.00 L0.00,0.00 Z"></path>
                    </svg>
                </div>
            </div>

            <div className="slides-container">
                {backSlide}
                {whatToShow()}
            </div>
            <img id="logo-small" src={logo} alt="logo" />
        </HeaderStyled>
    );
};

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
        width: 33%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

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

export default Header;
