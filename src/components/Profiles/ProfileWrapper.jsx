import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { HeroContext } from "context/heroContext/heroContext";
import { HeroReducer } from "context/heroContext/heroReducer";
import { fetchHeroProfile } from "api";
import Profile from "./Profile";

export default function ProfileWrapper() {
  const [heroProfileState, heroProfileDispatch] = useReducer(HeroReducer, {});
  let { heroId } = useParams();
  console.log("NEW!!", heroId);
  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId).then((data) => {
        heroProfileDispatch({ type: "UPDATE_HERO_PROFILE", payload: data });
      });
    }
  }, [heroId]);
  return (
    <HeroContext.Provider value={{ heroProfileState, heroProfileDispatch }}>
      <Profile />
    </HeroContext.Provider>
  );
}
