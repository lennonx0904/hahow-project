import React, { useState, useEffect, useReducer, memo } from "react";
import Hero from "./Hero";
import styled from "styled-components";

import Profile from "../Profiles/Profile";
// import { fetchHeroList } from "../../api";
// import { useParams } from "react-router-dom";
import { HeroContext } from "context/heroContext/heroContext";
import { HeroReducer, initialHeroState } from "context/heroContext/heroReducer";
// import { fetchHeroProfile } from "api";

import { useDispatch, useSelector } from "react-redux";
import { fetchHeroList } from "actions";
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

function useHeroList() {
  const heroList = useSelector((state) => state.heroList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroList());
  }, [dispatch]);

  return heroList;
}

function HeroList() {
  // const heroList = useSelector((state) => state.heroList);
  // const heroDispatch = useDispatch();
  
  const heroList = useHeroList();
  // useEffect(() => {
  //   heroDispatch(fetchHeroList());
  // }, []);
  /**
   * @param id each hero's own id
   * @param heroId the selected hero's id
   */
  const heroes = heroList.map((hero) => {
    const { id, name, image } = hero;
    return <Hero key={`hero-${id}`} id={id} name={name} image={image} />;
  });
  console.log("rerender!!!");
  return (
    <Container>
      <HeroListWrapper>{heroes}</HeroListWrapper>
      {/* <Profile /> */}
    </Container>
  );
}

export default HeroList;
