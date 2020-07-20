import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ROUTES from "../../constant/routes";

const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c6c7c8;

  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  &:hover {
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.16);
  }
`;

const Image = styled.img`
  cursor: pointer;
`;
const Name = styled.div`
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
`;

function Hero({ id, name, image, heroId }) {
  const isCurrentHero = heroId === id;
  return (
    <Link to={`${ROUTES.HOEM_PAGE}/${id}`}>
      <HeroCard
        style={{ transform: isCurrentHero ? "translate(0, -20px)" : "none" }}
      >
        <Image src={`${image}`} />
        <Name>{name}</Name>
      </HeroCard>
    </Link>
  );
}

export default Hero;
