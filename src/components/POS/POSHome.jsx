import React from "react";
import { useHistory } from "react-router-dom";

import image from "../../images/icons8-home.svg";

import styled from "styled-components";

const POSHomeStyled = styled.div`
  height: var(--main-height);
  width: 100%;
  padding: 0 50px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    width: 50%;

    .action {
      padding: 30px 0;
    }
  }
`;

const POSHome = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/pos/application/start");
  };

  return (
    <POSHomeStyled>
      <div className="hero">
        <img src={image}></img>
        <h1>FindYourMortgage Today!</h1>
      </div>
      <div className="content">
        <p>
          We offer a quick and easy mortgage application process for customers,
          allowing you to fill out short form, connect to your banks and let our
          process automate the rest so we can get you that much closer to
          getting your mortgage loan.
        </p>
        <div className="action">
          <p>
            Fill in your information and find out just how much you can borrow!
          </p>
          <button onClick={clickHandler}>Begin Application</button>
        </div>
      </div>
    </POSHomeStyled>
  );
};

export default POSHome;
