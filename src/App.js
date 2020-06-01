import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Main from "./components/Main";

import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <AppStyled>
      <Nav />
      <Main />
    </AppStyled>
  );
};

export default App;
