import React from "react";
import styled from "styled-components";

const Slide = ({
    textRight,
    textLeft,
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
            <h3 className="leftText">{textLeft}</h3>
            <div className="middleElement">{middleElement}</div>
            <h3 className="rightText">{textRight}</h3>
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
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    overflow: hidden;

    h3 {
        font-size: 2.5rem;
        font-weight: 900;
        color: white;
        text-shadow: 1px 1px 1px black;
        padding: 10px;
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        &:first-child {
            text-align: right;
        }
    }

    img {
        height: 200px;
        transform: rotate(${(props) => props.angle / 5 + "deg"}) !important;
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
            filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
            transform: translatey(0px);
        }
        50% {
            filter: drop-shadow(5px 25px 15px rgba(0, 0, 0, 0.2));
            transform: translatey(-15px);
        }
        100% {
            filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
            transform: translatey(0px);
        }
    }

    .leftText {
        transform: translateX(-100%);
        filter: opacity(0);
        animation: slideInFromLeft 1s ease-out 1s forwards;
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

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            filter: opacity(0);
        }
        100% {
            transform: translateX(0);
            filter: opacity(1);
        }
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
            transform: translateY(200%);
            filter: opacity(0);
        }
        100% {
            transform: translateY(0);
            filter: opacity(1);
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;

        padding: 20px 0;
        h3 {
            font-size: 1.5rem;
            text-align: center;
            &:first-child {
                text-align: center;
            }
        }
        img {
        }
    }

    @media (max-width: 400px) {
        height: 400px;
    }
`;

export default Slide;
