import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentHeroId } from "actions";

const lightGray = "#c6c7c8";
const shadow = "4px 4px 4px 0 rgba(0, 0, 0, 0.4)";
const translate = "translate(-8px, -8px)";

const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${lightGray};
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => (props.isCurrentHero ? `${translate}` : "none")};
  box-shadow: ${(props) => (props.isCurrentHero ? `${shadow}` : "none")};
  &:hover {
    transform: translate(-8px, -8px);
    box-shadow: ${(props) => (props.isCurrentHero ? `${shadow}` : "none")};
  }

  @media (max-width: 992px) {
    transform: ${(props) => (props.isCurrentHero ? `${translate}` : "none")};
    box-shadow: ${(props) => (props.isCurrentHero ? `${shadow}` : "none")};
  }
`;

const Image = styled.img`
  cursor: pointer;
  border-radius: 5px;
`;

const Name = styled.div`
  padding: 1rem 0 0.5rem;
  text-align: center;
  font-family: "Kalam", cursive;
  font-size: 1.5rem;
`;

function Hero({ id, name, image }) {
  const currentHeroId = useSelector((state) => state.hero.currentHeroId);
  const dispatch = useDispatch();
  const isCurrentHero = id === currentHeroId;

  return (
    <HeroCard
      isCurrentHero={isCurrentHero}
      onClick={() => {
        dispatch(updateCurrentHeroId(id));
      }}
    >
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </HeroCard>
  );
}

export default Hero;
