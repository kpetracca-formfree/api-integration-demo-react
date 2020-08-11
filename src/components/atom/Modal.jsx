import React, { useRef } from "react";

import styled from "styled-components";

const ModalStyled = styled.div`
  z-index: 9998;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.3s;
  max-width: 100vw;

  .container {
    z-index: 9999;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.5),
      0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    width: 95%;
    max-width: var(--md-cont);
    min-height: 150px;
    max-height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: 5px;

    button {
      align-self: flex-end;
    }
  }

  .scroll {
    overflow: scroll;
  }
`;

const Modal = (props) => {
  const {
    allowOutsideClick,
    scroll,
    setGlobalState,
    buttonText,
    children,
  } = props;
  const modal = useRef(null);

  const clickHandler = (event) => {
    if (modal.current.contains(event.target)) {
      return;
    } else if (allowOutsideClick) {
      setGlobalState(false);
    }
  };

  const closeHandler = () => {
    setGlobalState(false);
  };

  return (
    <ModalStyled onClick={clickHandler}>
      <div className="container" ref={modal}>
        {scroll ? (
          <div className="scroll">{children}</div>
        ) : (
          <div>{children}</div>
        )}
        <button onClick={closeHandler}>{buttonText}</button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
