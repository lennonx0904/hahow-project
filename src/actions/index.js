import axios from "axios";
import {
  FETCH_HERO_LIST,
  FETCH_HERO_PROFILE,
  UPDATE_CURRENT_HERO_ID,
  UPDATE_HERO_PROFILE,
} from "constant";

export const API_HOST = "https://hahow-recruit.herokuapp.com";
export const HEROES_URL = `${API_HOST}/heroes`;
export const HERO_PROFILE_URL = `${API_HOST}/heroes`;

export function fetchHeroList() {
  return async (dispatch) => {
    try {
      const res = await axios.get(HEROES_URL);
      dispatch({ type: FETCH_HERO_LIST, payload: res.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };
}

export function updateCurrentHeroId(id) {
  return (dispatch) => {
    dispatch({ type: UPDATE_CURRENT_HERO_ID, payload: id });
  };
}

export function fetchHeroProfile(heroId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${HERO_PROFILE_URL}/${heroId}/profile`);
      dispatch({ type: FETCH_HERO_PROFILE, payload: res.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };
}

export function updateHeroProfile(attribute, point) {
  return (dispatch) => {
    dispatch({ type: UPDATE_HERO_PROFILE, payload: { [attribute]: point } });
  };
}

export async function patchHeroProfile(heroId, profile) {
  try {
    const res = await axios.patch(
      `${HERO_PROFILE_URL}/${heroId}/profile`,
      profile
    );
    return res.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
