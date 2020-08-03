import { createStore } from "redux";
import rootReducer from "reducers";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
