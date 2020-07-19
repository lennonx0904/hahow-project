import React from "react";
import Hero from "./Hero";
import styled from "styled-components";

const data = [
  {
    id: "1",
    name: "Daredevil",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
  },
  {
    id: "2",
    name: "Thor",
    image:
      "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
  },
  {
    id: "3",
    name: "Iron Man",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
  },
  {
    id: "4",
    name: "Hulk",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
  },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function HeroList() {
  const heroes = data.map((hero, idx) => {
    const { id, name, image } = hero;
    return <Hero key={`hero-${id}`} id={id} name={name} image={image} />;
  });

  return <Wrapper>{heroes}</Wrapper>;
}

export default HeroList;
