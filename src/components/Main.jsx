import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";

import styled from "styled-components";

const MainStyled = styled.main`
  min-height: calc(100% - var(--nav-height));
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <MainStyled>
      <Router>
        <Route path="/" exact component={Dashboard} />
      </Router>
    </MainStyled>
  );
};

export default Main;
