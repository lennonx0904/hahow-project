import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import styled from "styled-components";

import ProfileContainer from "../Profiles/ProfileContainer";
import { fetchHeroList } from "../../api";
import { useParams } from "react-router-dom";
const Container = styled.div`
  padding: 2rem;
`;

const HeroListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;

function HeroList() {
  const [heroList, setHeroList] = useState([]);
  let { heroId } = useParams();

  useEffect(() => {
    fetchHeroList().then((data) => {
      setHeroList(data);
    });
  }, []);

  /**
   * @param id each hero's own id
   * @param heroId the selected hero's id
   */
  const heroes = heroList.map((hero) => {
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
    <Container>
      <HeroListWrapper>{heroes}</HeroListWrapper>
      {heroId && <ProfileContainer heroId={heroId} />}
    </Container>
  );
}

export default HeroList;
