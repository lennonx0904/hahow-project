import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { HeroContext } from "context/heroContext/heroContext";
// import { patchHeroProfile } from "../../api";
// import { useParams } from "react-router-dom";
import useCustomSnackbar from "components/common/snackbar";
import { useHistory } from "react-router-dom";
// import { fetchHeroProfile } from "api";
import { fetchHeroProfile, patchHeroProfile } from "actions";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

const ProfileWrapper = styled.div`
  display: flex;
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
  // const { heroState, heroDispatch } = useContext(HeroContext);
  // const { profile, currentHeroId } = heroState;
  const [availablePoints, setAvailablePoints] = useState(0);
  const shouldDisableSubmit = availablePoints !== 0;
  const { enqueueSuccessSnackbar, enqueueErrorSnackbar } = useCustomSnackbar();

  const history = useHistory();

  const profile = useSelector((state) => state.hero.profile);
  const currentHeroId = useSelector((state) => state.hero.currentHeroId);

  const dispatch = useDispatch();

  useEffect(() => {
    setAvailablePoints(0);
    if (currentHeroId !== 0) {
      history.push(`/heroes/${currentHeroId}`);
      dispatch(fetchHeroProfile(currentHeroId));
    } else {
      history.push(`/heroes`);
    }
  }, [currentHeroId, dispatch, history]);

  const abilityCounters = Object.entries(profile).map(([attribute, point]) => {
    return (
      <Counter
        key={`attribute-${attribute}`}
        attribute={attribute}
        point={point}
        availablePoints={availablePoints}
        setAvailablePoints={setAvailablePoints}
      />
    );
  });

  async function handleSubmit(currentHeroId, profile) {
    if (shouldDisableSubmit) return;
    const res = await patchHeroProfile(currentHeroId, profile);
    if (res === "OK") {
      enqueueSuccessSnackbar("儲存成功");
      return;
    }
    enqueueErrorSnackbar("儲存失敗");
  }

  return (
    <ProfileWrapper>
      <CountersWrapper>{abilityCounters}</CountersWrapper>
      <SubmitWrapper>
        <AvailablePoints>剩餘點數： {availablePoints}</AvailablePoints>
        <SumbitButton
          disable={shouldDisableSubmit}
          shouldDisableSubmit={shouldDisableSubmit}
          onClick={() => {
            handleSubmit(currentHeroId, profile);
          }}
        >
          儲存
        </SumbitButton>
      </SubmitWrapper>
    </ProfileWrapper>
  );
}

export default Profile;
