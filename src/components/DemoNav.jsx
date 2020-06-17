import React from "react";
import { useRecoilState } from "recoil";
import { demoTypeGlobal } from "../utils/recoilStates";

import styled from "styled-components";

const DemoNavStyled = styled.nav`
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0);
  background-image: -webkit-linear-gradient(
    -66deg,
    var(--ff-red-gradient-light) 39%,
    var(--ff-red-gradient-dark) 100%
  );
  height: var(--nav-height);
  width: 100%;
  color: var(--white);
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 5px;
  }
`;

const DemoNav = () => {
  // eslint-disable-next-line
  const [demoType, setDemoType] = useRecoilState(demoTypeGlobal);
  return (
    <DemoNavStyled>
      <p>Fake Website</p>
      {demoType ? <p>{" | "}</p> : ""}
      <p>{demoType}</p>
    </DemoNavStyled>
  );
};

export default DemoNav;
