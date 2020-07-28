import React, { useState, useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { HeroContext } from "context/heroContext/heroContext";
import { GlobalContext } from "context/globalContext/globalContext";
import { patchHeroProfile } from "../../api";
import { useParams } from "react-router-dom";
import useCustomSnackbar from "components/common/snackbar";

const CountersWrapper = styled.div`
  border: 1px solid green;
  flex-grow: 1;
`;
const SubmitWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid green;
`;

const AvailablePoints = styled.div`
  font-size: 1.24rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const SumbitButton = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 0.75rem 4rem;
  border-radius: 5px;
  background-color: #79bbea;
  cursor: pointer;
`;

function Profile() {
  const { heroProfileState } = useContext(HeroContext);
  let { heroId } = useParams();
  const { globalState, globalDispatch } = useContext(GlobalContext);
  console.log("globalState", globalState);
  const [availablePoints, setAvailablePoints] = useState(0);

  const {
    enqueueSuccessSnackbar,
    enqueueWarningSnackbar,
  } = useCustomSnackbar();

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

  async function handleSubmit(heroId, profile) {
    const res = await patchHeroProfile(heroId, profile);

    console.log("i喔喔喔喔喔", res);

    if (res === "OK") {
      globalDispatch({
        type: "SUBMIT_SUCCESS",
        payload: { succes: "SUBMIT_SUCCESS" },
      });
      enqueueSuccessSnackbar("儲存成功");
      return;
    }
    enqueueWarningSnackbar("儲存失敗");
  }

  return (
    <>
      <CountersWrapper>{abilityCounters}</CountersWrapper>
      <SubmitWrapper>
        <AvailablePoints>剩餘點數： {availablePoints}</AvailablePoints>
        <SumbitButton
          onClick={() => {
            handleSubmit(heroId, heroProfileState);
          }}
        >
          儲存
        </SumbitButton>
      </SubmitWrapper>
    </>
  );
}

export default Profile;
