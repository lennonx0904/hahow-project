import React, { useState, useEffect, useReducer, memo } from "react";
import Hero from "./Hero";
import styled from "styled-components";

import Profile from "../Profiles/Profile";
import { fetchHeroList } from "../../api";
import { useParams } from "react-router-dom";
import { HeroContext } from "context/heroContext/heroContext";
import { HeroReducer } from "context/heroContext/heroReducer";
import { fetchHeroProfile } from "api";
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const HeroListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  width: 100%;
  max-width: 1280px;
  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 88%;
  }
  @media (max-width: 576px) {
    width: 70%;
    flex-direction: column;
  }
`;

function HeroList() {
  const [heroProfileState, heroProfileDispatch] = useReducer(HeroReducer, {});
  const [heroes, setHeroes] = useState([]);
  let { heroId } = useParams();

  useEffect(() => {
    fetchHeroList().then((data) => {
      setHeroes(data);
    });
  }, []);

  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId).then((data) => {
        heroProfileDispatch({ type: "UPDATE_HERO_PROFILE", payload: data });
      });
    }
  }, [heroId]);

  /**
   * @param id each hero's own id
   * @param heroId the selected hero's id
   */
  const heroList = heroes.map((hero) => {
    const { id, name, image } = hero;
    return (
      <Hero
        key={`hero-${id}`}
        id={id}
        name={name}
        image={image}
        heroId={heroId}
      />
    );
  });

  return (
    <HeroContext.Provider value={{ heroProfileState, heroProfileDispatch }}>
      <Container>
        <HeroListWrapper>{heroList}</HeroListWrapper>
        {heroId && <Profile heroId={heroId} />}
      </Container>
    </HeroContext.Provider>
  );
}

export default memo(HeroList);
