import React, { createContext, useReducer } from "react";
import { HeroReducer } from "./heroReducer";
// export const initialState = {
//   str: 2,
//   int: 7,
//   agi: 9,
//   luk: 7,
// };

// export function HeroReducer(state, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "UPDATE_HERO_PROFILE":
//       return { ...state, ...payload };
//     default:
//       throw new Error();
//   }
// }
// export const HeroContext = createContext(initialState);
export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroProfileState, dispatch] = useReducer(HeroReducer, {});
  // console.log("profile", heroProfileState);
  return (
    <HeroContext.Provider value={{ heroProfileState, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
};
