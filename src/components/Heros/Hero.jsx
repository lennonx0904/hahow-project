import React, { useContext } from "react";
import styled from "styled-components";
import { HeroContext } from "context/heroContext/heroContext";
// import { Link } from "react-router-dom";
// import ROUTES from "../../constant/routes";
// import { useHistory } from "react-router-dom";
const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c6c7c8;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: transform 300ms ease-in-out;
  transform: ${(props) =>
    props.isCurrentHero ? "translate(0, -20px)" : "none"};
  box-shadow: ${(props) =>
    props.isCurrentHero ? "4px 4px 4px 0 rgba(0, 0, 0, 0.5)" : "none"};
  &:hover {
    box-shadow: ${(props) =>
      props.isCurrentHero
        ? "4px 4px 4px 0 rgba(0, 0, 0, 0.5)"
        : "4px 4px 4px 0 rgba(0, 0, 0, 0.16)"};
  }

  @media (max-width: 992px) {
    transform: none;
    box-shadow: ${(props) =>
      props.isCurrentHero ? "4px 4px 4px 0 rgba(0, 0, 0, 0.5)" : "none"};
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

/**
 * @param id each hero's own id
 * @param heroId the selected hero's id
 */
function Hero({ id, name, image }) {
  // const history = useHistory();
  // const isCurrentHero = heroId === id;
  const { heroDispatch } = useContext(HeroContext);
  return (
    // <Link to={`${ROUTES.HEROES_PAGE}/${id}`}>
    <HeroCard
      // isCurrentHero={isCurrentHero}
      onClick={() => {
        heroDispatch({ type: "UPDATE_CURRENT_HERO_ID", payload: id });
      }}
    >
      <Image src={`${image}`} alt={`${name}`} />
      <Name>{name}</Name>
    </HeroCard>
    // </Link>
  );
}

export default Hero;
