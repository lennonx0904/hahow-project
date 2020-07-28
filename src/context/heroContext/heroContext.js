import React, { createContext, useReducer } from "react";
import { HeroReducer } from "./heroReducer";

export const HeroContext = createContext();

// export const HeroProvider = ({ children }) => {
//   const [heroProfileState, dispatch] = useReducer(HeroReducer, {});
//   return (
//     <HeroContext.Provider value={{ heroProfileState, dispatch }}>
//       {children}
//     </HeroContext.Provider>
//   );
// };
