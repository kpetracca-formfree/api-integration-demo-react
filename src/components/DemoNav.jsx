import React from "react";
import { useHistory } from "react-router-dom";

import image from "../images/icons8-home.svg";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9000;

  * {
    color: var(--white);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
  }

  img {
    height: var(--nav-height);
  }

  a,
  img {
    cursor: pointer;
    height: var(--nav-height);
  }

  a:hover {
    cursor: pointer;
    background-color: var(--darker);
    transition: 0.3s ease-in-out;
    color: var(--white);
  }
`;

const DemoNav = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/");
  };

  return (
    <>
      <DemoNavStyled>
        <div className="left">
          <img src={image} alt="logo" onClick={clickHandler}></img>
          <a onClick={clickHandler}>FindYourMortgage.com</a>
        </div>
        <div className="right">
          <a>FAQ</a>
          <a>Resources</a>
          <a>About Us</a>
          <a>Contact</a>
        </div>
      </DemoNavStyled>
    </>
  );
};

export default DemoNav;
