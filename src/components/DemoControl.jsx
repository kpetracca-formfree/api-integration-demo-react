import React from "react";
import { useRecoilState } from "recoil";
import { demoTypeGlobal } from "./../utils/recoilStates";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const DemoControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  width: var(--control-width);
  padding: 5px;
  background-color: var(--grey-light);
  border-right: solid 1px var(--white);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0);

  h1 {
    padding: 5px;
    width: 100%;
    text-align: left;
  }

  nav {
    display: flex;
    align-items: center;

    button {
      width: 75px;
    }

    .selected {
      background-color: var(--ff-blue);
    }

    .selected:hover {
      background-color: var(--ff-blue-dark);
    }
  }
`;

const DemoControl = () => {
  const [demoType, setDemoType] = useRecoilState(demoTypeGlobal);

  const history = useHistory();

  const changeDemoType = (e) => {
    history.replace("/");
    setDemoType(e.target.value);
  };

  return (
    <DemoControlStyled>
      <h1>Demo Dash:</h1>
      <nav>
        {demoType === "POS" ? (
          <button
            onClick={(e) => changeDemoType(e)}
            value="POS"
            className="selected"
          >
            POS Demo
          </button>
        ) : (
          <button onClick={(e) => changeDemoType(e)} value="POS">
            POS Demo
          </button>
        )}
        {demoType === "LOS" ? (
          <button
            onClick={(e) => changeDemoType(e)}
            value="LOS"
            className="selected"
          >
            LOS Demo
          </button>
        ) : (
          <button onClick={(e) => changeDemoType(e)} value="LOS">
            LOS Demo
          </button>
        )}
      </nav>
    </DemoControlStyled>
  );
};

export default DemoControl;
