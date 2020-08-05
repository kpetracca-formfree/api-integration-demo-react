import React from "react";

import styled from "styled-components";

const DemoFooterStyled = styled.nav`
  background-image: -webkit-linear-gradient(
    -66deg,
    rgba(0, 0, 0, 0.6) 0%,
    var(--grey-dark) 80%
  );
  min-height: var(--footer-height);
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 9000;

  * {
    color: var(--white);
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-end;
    text-decoration: none;
  }

  a,
  li {
    cursor: pointer;
  }

  a:hover,
  li:hover {
    cursor: pointer;
    background-color: var(--darker);
    transition: 0.3s ease-in-out;
    color: var(--white);
  }

  p {
    margin-top: 10px;
    font-size: 0.8rem;
  }
`;

const DemoFooter = () => {
  return (
    <>
      <DemoFooterStyled>
        <div className="left">
          <a>Company</a>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Privacy</li>
            <li>Partners</li>
          </ul>
          <p>©2020 Demo Point of Sale (dba. FakeWebsite)</p>
        </div>
        <div className="right">
          <a>FAQ</a>
          <a>Resources</a>
          <a>Contact</a>
        </div>
      </DemoFooterStyled>
    </>
  );
};

export default DemoFooter;
