import React from "react";
import styled from "styled-components";

const Slide = ({
    text,
    middleElement,
    cPrimary,
    cSecondary,
    angle,
    started,
    id,
}) => {
    return (
        <SlideStyled
            primary={cPrimary}
            secondary={cSecondary}
            angle={angle}
            id={id}
            started={started}
        >
            <div className="middleElement">{middleElement}</div>
            <h3 className="rightText">{text}</h3>
        </SlideStyled>
    );
};

const SlideStyled = styled.div`
    --color-a: ${(props) => props.primary};
    --color-b: ${(props) => props.secondary};

    background: ${(props) => props.primary};
    background: linear-gradient(
        ${(props) => -props.angle + "deg"},
        var(--color-a),
        var(--color-b),
        var(--color-a)
    );
    background-size: 400%;
    animation: ${(props) =>
        props.started &&
        `
    animated-gradient 10s ease infinite alternate,
    slideEnter 1s ease-out forwards;
  `};
    &#static {
        animation: animated-gradient 10s ease infinite alternate;
        position: absolute;
    }
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
    padding: 20px 50px 20px 70px;
    overflow: hidden;

    h3 {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 900;
        color: white;
        text-shadow: 1px 1px 1px black;
        padding: 10px;
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        height: 200px;
        transition: transform 3s ease;
        animation: float 6s ease-in-out infinite;
    }

    @keyframes slideEnter {
        0% {
            filter: opacity(0);
        }
        100% {
            filter: opacity(1);
        }
    }

    @keyframes animated-gradient {
        from {
            background-position: left;
        }
        to {
            background-position: right;
        }
    }

    @keyframes float {
        0% {
            filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.6));
            transform: translatey(5px);
        }
        50% {
            filter: drop-shadow(5px 25px 10px rgba(0, 0, 0, 0.2));
            transform: translatey(-15px);
        }
        100% {
            filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.6));
            transform: translatey(5px);
        }
    }

    .rightText {
        transform: translateX(100%);
        filter: opacity(0);
        animation: slideInFromRight 1s ease-out 1s forwards;
    }
    .middleElement {
        transform: translateY(110%);
        filter: opacity(0);
        animation: slideInFromBottom 1s ease-out 1s forwards;
    }

    @keyframes slideInFromRight {
        0% {
            transform: translateX(100%);
            filter: opacity(0);
        }
        100% {
            transform: translateX(0);
            filter: opacity(1);
        }
    }

    @keyframes slideInFromBottom {
        0% {
            transform: translateX(-200%);
            filter: opacity(0);
        }
        100% {
            transform: translateX(0);
            filter: opacity(1);
        }
    }

    @media (max-width: 768px) {
        padding: 50px 30px 10px 30px;
        h3 {
            font-size: clamp(2rem, 5vw, 3rem);
        }
    }

    @media (max-width: 480px) {
        text-align: center;
        flex-direction: column;
        padding: 100px 30px 10px 30px;
        gap: 10px;
        h3 {
            font-size: clamp(1rem, 10vw, 2rem);
        }
    }
`;

export default Slide;
