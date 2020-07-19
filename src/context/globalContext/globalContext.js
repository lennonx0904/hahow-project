import { createContext } from "react";

export const initialState = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
};

export const globalContext = createContext(initialState);
