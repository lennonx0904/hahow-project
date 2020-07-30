import axios from "axios";

export const API_HOST = "https://hahow-recruit.herokuapp.com";
export const HEROES_URL = `${API_HOST}/heroes`;
export const HERO_PROFILE_URL = `${API_HOST}/heroes`;

// List Heroes [GET] https://hahow-recruit.herokuapp.com/heroes
// Single Hero [GET] https://hahow-recruit.herokuapp.com/heroes/:heroId
// Profile of Hero [GET] https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// Patch Hero's Profile [PATCH] https://hahow-recruit.herokuapp.com/heroes/:heroId/profile

// export async function fetchHeroList() {
//   try {
//     const res = await axios.get(HEROES_URL);
//     return res.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export async function fetchHeroProfile(heroId) {
//   try {
//     const res = await axios.get(`${HERO_PROFILE_URL}/${heroId}/profile`);

//     return res.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export async function patchHeroProfile(heroId, profile) {
//   try {
//     const res = await axios.patch(`${HERO_PROFILE_URL}/${heroId}/profile`, profile);
  
//     return res.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
