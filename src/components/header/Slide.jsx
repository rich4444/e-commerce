import React from "react";
import SlideStyled from "./StyledSlide";

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



export default Slide;
