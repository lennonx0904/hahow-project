import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { HeroContext } from "../../context/heroContext/heroContext";

const CountersWrapper = styled.div`
  padding: 0 3rem;
  border: 1px solid green;
`;
const SubmitWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid green;
`;

const SumbitButton = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem 4rem;
  border-radius: 5px;
  background-color: #79c9e8;
  cursor: pointer;
`;

// function calcTotalPoints(heroProfile) {
//   return Object.values(heroProfile).reduce((acc, cur) => {
//     return acc + cur;
//   });
// }

function Profile() {
  const { heroProfileState } = useContext(HeroContext);
  // const [totalPoints, setTotalPoints] = useState(0);
  const [availablePoints, setAvailablePoints] = useState(0);

  const abilityCounters = Object.entries(heroProfileState).map(
    ([attribute, point]) => {
      return (
        <Counter
          key={`attribute-${attribute}`}
          attribute={attribute}
          point={point}
          availablePoints={availablePoints}
          setAvailablePoints={setAvailablePoints}
        />
      );
    }
  );

  

  console.log("totalPoints", availablePoints);

  return (
    <>
      <CountersWrapper>{abilityCounters}</CountersWrapper>
      <SubmitWrapper>
        <p>剩餘點數： {availablePoints}</p>
        <SumbitButton>儲存</SumbitButton>
      </SubmitWrapper>
    </>
  );
}

export default Profile;
