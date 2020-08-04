import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { demoModalGlobal } from "../utils/recoilStates";

import styled from "styled-components";

const DemoStartStyled = styled.nav`
  height: var(--main-height);
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 50px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DemoStart = () => {
  const [demoModal, setDemoModal] = useRecoilState(demoModalGlobal);

  const history = useHistory();

  const clickHandler = () => {
    setDemoModal(false);
    history.push("/pos");
  };

  return (
    <DemoStartStyled>
      <p>{demoModal.toString()}</p>
      {demoModalGlobal ? (
        <>
          <h1>Welcome to the Demo!</h1>
          <button onClick={clickHandler}>Begin</button>
        </>
      ) : (
        ""
      )}
    </DemoStartStyled>
  );
};

export default DemoStart;
