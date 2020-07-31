import React, { useEffect } from "react";
import Hero from "./Hero";
import styled from "styled-components";
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

function HeroList() {
  const heroList = useSelector((state) => state.heroList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroList());
  }, [dispatch]);

  const heroes = heroList.map((hero) => {
    const { id, name, image } = hero;
    return <Hero key={`hero-${id}`} id={id} name={name} image={image} />;
  });

  return (
    <Container>
      <HeroListWrapper>{heroes}</HeroListWrapper>
    </Container>
  );
}

export default HeroList;
