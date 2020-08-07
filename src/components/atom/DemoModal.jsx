import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { demoModalGlobal } from "../../utils/recoilStates";

import styled from "styled-components";

const DemoModalStyled = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.3s;
  max-width: 100vw;

  .container {
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    width: 95%;
    max-width: var(--md-cont);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 5px;

    h1 {
      font-size: 1.2rem;
      padding: 15px;
    }

    button {
      align-self: flex-end;
      width: 100px;
    }
  }
`;

const DemoModal = (props) => {
  const modal = useRef(null);
  const [demoModal, setDemoModal] = useRecoilState(demoModalGlobal);

  const clickHandler = (event) => {
    if (modal.current.contains(event.target)) {
      return;
    } else {
      setDemoModal(false);
    }
  };

  const closeHandler = () => {
    setDemoModal(false);
  };

  return (
    <DemoModalStyled onClick={clickHandler}>
      <div className="container" ref={modal}>
        <h1>Welcome to the FormFree POS Integration Demo!</h1>
        <button onClick={closeHandler}>Begin</button>
      </div>
    </DemoModalStyled>
  );
};

export default DemoModal;
