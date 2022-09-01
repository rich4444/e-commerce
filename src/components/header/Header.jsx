import React from "react";
import styled from "styled-components";
import Slide from "./Slide";
import hoodie from "../../images/hoddie.webp";
import cosplay from "../../images/cosplay.webp";
import uniform from "../../images/uniform.webp";
import { useState } from "react";

const Header = () => {
    const initialSlides = [
        {
            classIndex: 0,
            textLeft: "HOODIES A LA MODA",
            textRight: "DISEÑOS PERSONALIZADOS",
            middleElement: createMiddleObject("hoodie"),
            cPrimary: "#ed7eee",
            cSecondary: "#6ddfee",
            angle: 45,
        },
        {
            classIndex: 1,
            textLeft: "COSPLAYS DE ANIME",
            textRight: "HECHOS POR ENCARGO",
            middleElement: createMiddleObject("cosplay"),
            cPrimary: "#7efff4ff",
            cSecondary: "#f15da2fd",
            angle: 15,
        },
        {
            classIndex: 2,
            textLeft: "UNIFORMES DE COLEGIO",
            textRight: "TODOS LOS TALLES",
            middleElement: createMiddleObject("uniform"),
            cPrimary: "#c2c2c2",
            cSecondary: "#3be27bff",
            angle: -15,
        },
    ];

    const initialBackSlide = (
        <Slide
            id={"static"}
            textLeft={"UNIFORMES DE COLEGIO"}
            textRight={"TODOS LOS TALLES"}
            middleElement={createMiddleObject("cosplay")}
            cPrimary={"#fb06fffd"}
            cSecondary={"#3be27b"}
            angle={-15}
        />
    );

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
    }, 5000);

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
                textLeft={slide.textLeft}
                textRight={slide.textRight}
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
                textLeft={slide.textLeft}
                textRight={slide.textRight}
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
            {backSlide}
            {whatToShow()}
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
    overflow: hidden;
`;

export default Header;
