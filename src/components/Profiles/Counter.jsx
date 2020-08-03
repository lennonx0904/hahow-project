import React from "react";
import styled from "styled-components";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { useDispatch } from "react-redux";
import { updateHeroProfile } from "actions";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Attribute = styled.div`
  padding: 1rem;
  width: 80px;
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const Point = styled.div`
  padding: 0 1rem;
  width: 4rem;
  text-align: center;
`;

function Counter({ attribute, point, availablePoints, setAvailablePoints }) {
  const dispatch = useDispatch();
  const shouldDisableIncrease = availablePoints === 0;
  const shouldDisableDecrease = point === 0;

  function handleIncrease() {
    if (shouldDisableIncrease) return;
    dispatch(updateHeroProfile(attribute, point + 1));
    setAvailablePoints(availablePoints - 1);
  }

  function handleDecrease() {
    if (shouldDisableDecrease) return;
    dispatch(updateHeroProfile(attribute, point - 1));
    setAvailablePoints(availablePoints + 1);
  }

  return (
    <CounterWrapper>
      <Attribute>{attribute.toUpperCase()}</Attribute>
      <AddBoxIcon
        color={shouldDisableIncrease ? "disabled" : "action"}
        fontSize="large"
        onClick={handleIncrease}
      />
      <Point>{point}</Point>
      <IndeterminateCheckBoxIcon
        color={shouldDisableDecrease ? "disabled" : "action"}
        fontSize="large"
        onClick={handleDecrease}
      />
    </CounterWrapper>
  );
}

export default Counter;
