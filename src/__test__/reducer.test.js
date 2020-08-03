import {
  FETCH_HERO_LIST,
  FETCH_HERO_PROFILE,
  UPDATE_CURRENT_HERO_ID,
  UPDATE_HERO_PROFILE,
} from "constant";

import { heroListReducer, heroReducer, initialHeroState } from "reducers";

// test("returns default initial state of `false` when no action is passed", () => {
//   const newState = heroListReducer(undefined, {});
//   expect(newState).toBe(false);
// });
// test("returns state of true upon receiving an action of type `CORRECT_GUESS`", () => {
//   const newState = successReducer(undefined, {
//     type: actionTypes.CORRECT_GUESS,
//   });
//   expect(newState).toBe(true);
// });

describe("return initial state when no action is passed", () => {
  test("heroListReducer", () => {
    const newState = heroListReducer(undefined, []);
    expect(newState).toEqual([]);
  });

  test("heroReducer", () => {
    const newState = heroReducer(undefined, {});
    expect(newState).toEqual({ profile: {}, currentHeroId: 0 });
  });
});

describe("return new state after receiving an action", () => {
  test("FETCH_HERO_LIST", () => {
    const heroList = [
      {
        id: "1",
        name: "Daredevil",
        image: "aaa",
      },
      {
        id: "2",
        name: "Thor",
        image: "bbb",
      },
      {
        id: "3",
        name: "Iron Man",
        image: "ccc",
      },
      {
        id: "4",
        name: "Hulk",
        image: "ddd",
      },
    ];
    const newState = heroListReducer([], {
      type: FETCH_HERO_LIST,
      payload: heroList,
    });
    expect(newState).toEqual(heroList);
  });

  test("UPDATE_CURRENT_HERO_ID", () => {
    const newState = heroReducer(initialHeroState, {
      type: UPDATE_CURRENT_HERO_ID,
      payload: 3,
    });
    expect(newState).toEqual({ profile: {}, currentHeroId: 3 });
  });
  
  test("UPDATE_HERO_PROFILE", () => {
    const newState = heroReducer(initialHeroState, {
      type: UPDATE_HERO_PROFILE,
      payload: { str: 5 },
    });
    expect(newState).toEqual({ profile: { str: 5 }, currentHeroId: 0 });
  });
});
