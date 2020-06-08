import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import DemoControl from "./components/DemoControl";
import DemoNav from "./components/DemoNav";
import DemoWindow from "./components/DemoWindow";

import "./App.css";
import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  .demoWrapper {
    width: 100%;
  }
`;

const App = () => {
  return (
    <RecoilRoot>
      <AppStyled>
        <DemoControl />
        <div className="demoWrapper">
          <DemoNav />
          <Router>
            <Route path="/" exact component={DemoWindow} />
          </Router>
        </div>
      </AppStyled>
    </RecoilRoot>
  );
};

export default App;
