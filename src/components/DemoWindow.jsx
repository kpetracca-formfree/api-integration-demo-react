import React from "react";
import { useRecoilState } from "recoil";
import { demoTypeGlobal } from "../utils/recoilStates";

import POSHome from "./POS/POSHome";
import LOSHome from "./LOS/LOSHome";

import styled from "styled-components";

const DemoWindowStyled = styled.div`
  height: var(--main-height);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DemoWindow = () => {
  const [demoType, setDemoType] = useRecoilState(demoTypeGlobal);

  return (
    <DemoWindowStyled>
      {demoType === "POS" ? <POSHome /> : ""}
      {demoType === "LOS" ? <LOSHome /> : ""}
    </DemoWindowStyled>
  );
};

export default DemoWindow;
