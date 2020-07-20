import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";
// import Counter from "./Counter";
import { HeroContext } from "../../context/heroContext/heroContext";
import { HeroReducer } from "../../context/heroContext/heroReducer";

import { fetchHeroProfile } from "../../api";

const Wrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  justify-content: space-between;
`;

function ProfileContainer({ heroId }) {
  const [heroProfileState, dispatch] = useReducer(HeroReducer, {});
  console.log("profile", heroProfileState);
  useEffect(() => {
    fetchHeroProfile(heroId).then((data) => {
      dispatch({ type: "UPDATE_HERO_PROFILE", payload: data });
    });
  }, [heroId]);

  return (
    <HeroContext.Provider value={{ heroProfileState, dispatch }}>
      <Wrapper>
        <Profile />
      </Wrapper>
    </HeroContext.Provider>
    // <HeroProvider>
    //   <div>{heroProfile}</div>
    // </HeroProvider>
  );
}

export default ProfileContainer;
