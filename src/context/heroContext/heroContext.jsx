import React, { createContext } from "react";

export const initialState = {
  str: 8,
  int: 0,
  agi: 0,
  luk: 0,
};

// export const HeroContext = createContext(initialState);
export const HeroContext = createContext(initialState);

export const HeroProvider = ({ children }) => {
  return (
    <HeroContext.Provider value={initialState}>{children}</HeroContext.Provider>
  );
};
