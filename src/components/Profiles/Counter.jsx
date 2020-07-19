import React, { useState, useContext, useReducer, createContext } from "react";
import styled from "styled-components";
import {
  // HeroContext,
  // HeroProvider,
  initialState,
} from "../../context/heroContext/heroContext";

import { HeroContext } from "./Profile";

const CounterWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 1rem;
`;
const Point = styled.div`
  padding: 0 1rem;
  color: blue;
  display: flex;
  align-items: center;
`;

// function reducer(state, action) {
//   switch (action.type) {
//     case "STR_INCREMENT":
//       return { ...state, ...{ str: state.str + 1 } };
//     case "STR_DECREMENT":
//       return { ...state, ...{ str: state.str - 1 } };
//     default:
//       throw new Error();
//   }
// }
// const HeroContext = createContext(initialState);

function Counter({ attribute, point, dispatch }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state", state);
  // const value = useContext(HeroContext);
  // console.log("value", value);
  // const heroPointState = {
  //   str: state.str,
  //   int: state.int,
  //   agi: state.agi,
  //   luk: state.luk,
  // };

  return (
    // <HeroContext>
      <CounterWrapper>
        {attribute}
        <Button
          onClick={() => {
            dispatch({ type: `${attribute.toUpperCase()}_INCREMENT` });
          }}
        >
          +
        </Button>
        <Point>{point}</Point>
        <Button
          onClick={() => {
            // if (point === 0) return;
            dispatch({ type: `${attribute.toUpperCase()}_DECREMENT` });
          }}
        >
          -
        </Button>
      </CounterWrapper>
    // </HeroContext>
  );
}

export default Counter;
