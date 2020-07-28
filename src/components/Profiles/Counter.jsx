import React, { useContext } from "react";
import styled from "styled-components";
import { HeroContext } from "../../context/heroContext/heroContext";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Attribute = styled.div`
  padding: 1rem;
  width: 80px;
`;

// const Button = styled.div`
//   cursor: pointer;
//   border: 1px solid black;
//   padding: 1rem;
// `;
const Point = styled.div`
  padding: 0 1rem;
  width: 4rem;
  text-align: center;
`;

function Counter({ attribute, point, availablePoints, setAvailablePoints }) {
  const { heroProfileDispatch } = useContext(HeroContext);

  return (
    <CounterWrapper>
      <Attribute>{attribute.toUpperCase()}</Attribute>

      <AddBoxIcon
        color={availablePoints === 0 ? "disabled" : "action"}
        fontSize="large"
        onClick={() => {
          if (availablePoints === 0) return;
          heroProfileDispatch({
            type: "UPDATE_HERO_PROFILE",
            payload: { [attribute]: point + 1 },
          });
          setAvailablePoints(availablePoints - 1);
        }}
      />

      <Point>{point}</Point>
      <IndeterminateCheckBoxIcon
        color={point === 0 ? "disabled" : "action"}
        fontSize="large"
        onClick={() => {
          if (point === 0) return;
          heroProfileDispatch({
            type: "UPDATE_HERO_PROFILE",
            payload: { [attribute]: point - 1 },
          });
          setAvailablePoints(availablePoints + 1);
        }}
      />
    </CounterWrapper>
  );
}

export default Counter;
