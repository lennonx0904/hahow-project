import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Loader from "components/common/Loader";
import useCustomSnackbar from "components/common/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchHeroProfile, patchHeroProfile } from "actions";
import ROUTES from "constant/routes";

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 88%;
    padding: 0 0.75rem;
  }
  @media (max-width: 576px) {
    width: 70%;
    flex-direction: column;
  }
`;

const CountersWrapper = styled.div`
  flex-grow: 1;
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;

const SubmitWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 992px) {
    padding: 0.75rem 0;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;

const AvailablePoints = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1rem;
  text-align: center;
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
  const [availablePoints, setAvailablePoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const profile = useSelector((state) => state.hero.profile);
  const currentHeroId = useSelector((state) => state.hero.currentHeroId);
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSuccessSnackbar, enqueueErrorSnackbar } = useCustomSnackbar();
  const shouldRenderProfile = currentHeroId !== 0;
  const shouldDisableSubmit = availablePoints !== 0;

  // update URL, profile and reset availablePoints when change card
  useEffect(() => {
    setAvailablePoints(0);
    if (currentHeroId !== 0) {
      history.push(`${ROUTES.HEROES_PAGE}/${currentHeroId}`);
      dispatch(fetchHeroProfile(currentHeroId));
      setIsLoading(true);
      return;
    }
    history.push(`${ROUTES.HEROES_PAGE}`);
  }, [currentHeroId, dispatch, history]);

  useEffect(() => {
    if (Object.keys(profile).length > 0) {
      setIsLoading(false);
    }
  }, [profile]);

  /**
   * data strcture of profile: {str: 2, int: 3, agi: 4, luk: 5}
   */
  const pointCounters = Object.entries(profile).map(([attribute, point]) => {
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
    <>
      {shouldRenderProfile ? (
        <Container>
          <ProfileWrapper>
            <CountersWrapper>
              {isLoading ? <Loader /> : pointCounters}
            </CountersWrapper>
            <SubmitWrapper>
              <AvailablePoints>剩餘點數： {availablePoints}</AvailablePoints>
              <SumbitButton
                shouldDisableSubmit={shouldDisableSubmit}
                onClick={() => {
                  handleSubmit(currentHeroId, profile);
                }}
              >
                儲存
              </SumbitButton>
            </SubmitWrapper>
          </ProfileWrapper>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
