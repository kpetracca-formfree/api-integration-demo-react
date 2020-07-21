import React from "react";
import { useLocation } from "react-router-dom";

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

  a {
    width: 100%;
    height: 100%;
    color: var(--white);
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const POSNavStyled = styled.nav`
  height: var(--nav-pos-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    color: var(--grey-dark);
    font-weight: bold;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
  }

  a:hover,
  p:hover {
    cursor: pointer;
    background-color: var(--ff-blue);
    transition: 0.3s ease-in-out;
    color: var(--white);
    border-radius: 4px;
  }
`;

const DemoNav = () => {
  let location = useLocation();
  return (
    <>
      <DemoNavStyled>
        <a href="/">
          <p>FindYourMortgage.com</p>
        </a>
      </DemoNavStyled>
      {location.pathname.includes("/pos") ? (
        <POSNavStyled>
          <div className="left">
            <a href="/pos">Home</a>
          </div>
          <div className="right">
            <p>FAQ</p>
            <p>Resources</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </POSNavStyled>
      ) : (
        ""
      )}
    </>
  );
};

export default DemoNav;
