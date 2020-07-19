import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;

const Image = styled.img`
  backgroung-image: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg";
  cursor: pointer;
`;
const Name = styled.div`
  color: red;
  padding: 1rem 0;
  text-align: center;
`;

function Hero({ id, name, image }) {
  return (
    <Link to={`/heroes/${id}`}>
      <HeroCard>
        <Image src={`${image}`} />
        <Name>{name}</Name>
      </HeroCard>
    </Link>
  );
}

export default Hero;
