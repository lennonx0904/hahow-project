import { combineReducers } from "redux";
import {
  FETCH_HERO_LIST,
  FETCH_HERO_PROFILE,
  UPDATE_CURRENT_HERO_ID,
  UPDATE_HERO_PROFILE,
} from "constant";

export const initialHeroState = { profile: {}, currentHeroId: 0 };

export function heroListReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HERO_LIST:
      return [...state, ...payload];
    default:
      return state;
  }
}

export function heroReducer(state = initialHeroState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HERO_PROFILE:
      return { ...state, ...{ profile: payload } };
    case UPDATE_CURRENT_HERO_ID:
      return { ...state, ...{ currentHeroId: payload } };
    case UPDATE_HERO_PROFILE:
      const newProfile = { ...state.profile, ...payload };
      return { ...state, ...{ profile: newProfile } };
    default:
      return state;
  }
}

export default combineReducers({
  heroList: heroListReducer,
  hero: heroReducer,
});
