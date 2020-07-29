import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { HeroContext } from "context/heroContext/heroContext";
// import { GlobalContext } from "context/globalContext/globalContext";
import { patchHeroProfile } from "../../api";
import { useParams } from "react-router-dom";
import useCustomSnackbar from "components/common/snackbar";

const Wrapper = styled.div`
  display: flex;
  // padding: 0 3rem;
  justify-content: space-between;
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

const CountersWrapper = styled.div`
  flex-grow: 1;
`;
const SubmitWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 992px) {
    padding: 1rem 1.75rem;
  }
`;

const AvailablePoints = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const SumbitButton = styled.div`
  text-align: center;
  padding: 0.75rem 4rem;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) =>
    props.shouldDisableSubmit ? "#c6c7c8" : "#266794"};
  cursor: ${(props) => (props.shouldDisableSubmit ? "not-allowed" : "pointer")};
`;

function Profile() {
  const { heroProfileState } = useContext(HeroContext);
  let { heroId } = useParams();
  // const { globalState, globalDispatch } = useContext(GlobalContext);

  const [availablePoints, setAvailablePoints] = useState(0);
  const shouldDisableSubmit = availablePoints !== 0;

  const {
    enqueueSuccessSnackbar,
    enqueueWarningSnackbar,
  } = useCustomSnackbar();

  useEffect(() => {});

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
    if (shouldDisableSubmit) return;
    const res = await patchHeroProfile(heroId, profile);
    if (res === "OK") {
      // globalDispatch({
      //   type: "SUBMIT_SUCCESS",
      //   payload: { succes: "SUBMIT_SUCCESS" },
      // });
      enqueueSuccessSnackbar("儲存成功");
      return;
    }
    enqueueWarningSnackbar("儲存失敗");
  }

  return (
    <Wrapper>
      <CountersWrapper>{abilityCounters}</CountersWrapper>
      <SubmitWrapper>
        <AvailablePoints>剩餘點數： {availablePoints}</AvailablePoints>
        <SumbitButton
          shouldDisableSubmit={shouldDisableSubmit}
          onClick={() => {
            handleSubmit(heroId, heroProfileState);
          }}
        >
          儲存
        </SumbitButton>
      </SubmitWrapper>
    </Wrapper>
  );
}

export default Profile;
