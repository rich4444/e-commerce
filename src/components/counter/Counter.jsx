import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../redux/counterSlice";

const Counter = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <CounterStyle>
            <h1>{counter}</h1>

            <button onClick={() => dispatch(increase())}>INCREASE</button>
            <button onClick={() => dispatch(decrease())}>DECREASE</button>
        </CounterStyle>
    );
};

const CounterStyle = styled.div`
    text-align: center;
    width: fit-content;
    background-color: #d84141;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
`;

export default Counter;
