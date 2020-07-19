import React, {  useContext, useReducer ,createContext} from "react";
import styled from "styled-components";
import Counter from "./Counter";
import {
  // HeroContext,
  // HeroProvider,
  initialState,
} from "../../context/heroContext/heroContext";

const data = {
  str: 2,
  int: 7,
  agi: 9,
  luk: 7,
};


function reducer(state, action) {
  switch (action.type) {
    case "STR_INCREMENT":
      return { ...state, ...{ str: state.str + 1 } };
    case "STR_DECREMENT":
      return { ...state, ...{ str: state.str - 1 } };
    default:
      throw new Error();
  }
}

export const HeroContext = createContext(initialState);


function Profile() {
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

  
  
  const heroProfile = Object.entries(data).map(([attribute, point]) => {
    return (
      <Counter
        key={`attribute-${attribute}`}
        attribute={attribute}
        point={point}
        dispatch={dispatch}
      />
    );
  });
  console.log("heroProfile", heroProfile);

  return (
    <HeroContext.Provider value={heroPointState}>
      <div>{heroProfile}</div>
    </HeroContext.Provider>
  );
}

export default Profile;
