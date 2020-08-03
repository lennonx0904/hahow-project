import moxios from "moxios";
import { storeFactory } from "./testUtils";
import { fetchHeroList, fetchHeroProfile } from "actions";

describe("get method action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("add hero list array to state", () => {
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

    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: heroList,
      });

      return store.dispatch(fetchHeroList()).then(() => {
        const newState = store.getState();
        expect(newState.heroList).toBe(heroList);
      });
    });
  });

  test("add profile object to state", () => {
    const profile = {
      str: 2,
      int: 7,
      agi: 9,
      luk: 7,
    };

    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: profile,
      });

      return store.dispatch(fetchHeroProfile(1)).then(() => {
        const newState = store.getState();
        expect(newState.hero.profile).toBe(profile);
      });
    });
  });
});
