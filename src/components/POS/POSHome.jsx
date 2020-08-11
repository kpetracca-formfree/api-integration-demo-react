import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { demoModalGlobal } from "../../utils/recoilStates";

import Modal from "../atom/Modal";

import logo from "../../images/icons8-home.svg";
import bg1 from "../../images/julian-gentilezza-ctUWE7BUEzE-unsplash.jpg";
import bg2 from "../../images/todd-kent-178j8tJrNlc-unsplash.jpg";
import bg3 from "../../images/stephen-leonardi-E1k7IchbMx8-unsplash.jpg";

import cursor from "../../images/icons8-cursor.svg";
import document from "../../images/icons8-document.svg";
import checkmark from "../../images/icons8-checkmark.svg";
import loanOfficer from "../../images/icons8-female-user.svg";
import keys from "../../images/icons8-key.svg";

import styled from "styled-components";

const POSHomeStyled = styled.div`
  min-height: var(--main-height);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bg3}) top center fixed repeat;
  background-size: cover;

  .diagonal {
    transform: skewY(-5deg);
    background-image: -webkit-linear-gradient(
      -70deg,
      rgba(255, 255, 255, 0) 0%,
      var(--white) 80%
    );
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal {
    font-size: 1.2rem !important;
  }

  .hero {
    max-width: var(--lg-cont);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
    flex-basis: 0 0 500px;
    transform: skewY(5deg);
  }

  .contentLeft {
  }

  .contentRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    width: 50%;
    min-width: 300px;

    .action {
      padding: 30px 0;
    }

    button {
      background-color: var(--ff-blue);
    }

    button:hover {
      background-color: var(--ff-blue-dark);
    }
  }

  .straight {
    background-image: -webkit-linear-gradient(
      -70deg,
      rgba(255, 255, 255, 0.5) 0%,
      var(--white) 80%
    );
    width: 100%;
    height: 70px;
    margin: 150px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      max-height: 200%;
      margin: 15px;
    }

    *:hover {
      max-height: 210%;
      transition: 0.15s ease-in-out;
      cursor: pointer;
    }
  }
`;

const POSHome = () => {
  // attach history to component from react-router library
  const history = useHistory();

  // pull in global demo modal state for component use
  const [demoModal, setDemoModal] = useRecoilState(demoModalGlobal);

  // take user to start application page when clicked
  const clickHandler = () => {
    history.push("/application/start");
  };

  return (
    <POSHomeStyled>
      {demoModal ? (
        <Modal
          allowOutsideClick={true}
          scroll={false}
          setGlobalState={setDemoModal}
          buttonText="Begin"
        >
          <h1 className="modal">
            Welcome to the FormFree POS Integration Demo!
          </h1>
        </Modal>
      ) : (
        ""
      )}
      <div className="diagonal">
        <div className="hero">
          <div className="contentLeft">
            <img src={logo}></img>
            <h1>FindYourMortgage Today!</h1>
          </div>
          <div className="contentRight">
            <p>
              We offer a quick and easy mortgage application process for
              customers, allowing you to fill out short form, connect to your
              banks and let our process automate the rest so we can get you that
              much closer to getting your mortgage loan.
            </p>
            <div className="action">
              <p>
                Fill in your information and find out just how much you can
                borrow!
              </p>
              <button onClick={clickHandler}>Begin Application</button>
            </div>
          </div>
        </div>
      </div>
      <div className="straight">
        <img src={cursor} alt="Step 1" title="Start your application" />
        <img src={document} alt="Step 2" title="Share your information" />
        <img src={checkmark} alt="Step 3" title="Verify your assets" />
        <img
          src={loanOfficer}
          alt="Step 4"
          title="Speak with one of our qualified loan officers"
        />
        <img src={keys} alt="Step 5" title="Get your loan!" />
      </div>
    </POSHomeStyled>
  );
};

export default POSHome;
