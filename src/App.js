import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// top level imports
import DemoControl from "./components/DemoControl";
import DemoNav from "./components/DemoNav";
import DemoWindow from "./components/DemoWindow";
import POSHome from "./components/POS/POSHome";
import LOSHome from "./components/LOS/LOSHome";

// POS routing imports
import StartApplication from "./components/POS/StartApplication";
import AssetConnection from "./components/POS/AssetConnection";
import ApplicationComplete from "./components/POS/ApplicationComplete";

// NOTE: LOS is more like SPA format versus different routing in POS

import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;

  .demoWrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

const App = () => {
  return (
    <RecoilRoot>
      <AppStyled>
        <Router>
          <DemoControl />
          <div className="demoWrapper">
            <DemoNav />
            <Route path="/" exact component={DemoWindow} />
            <Route path="/pos" exact component={POSHome} />
            <Route path="/los" exact component={LOSHome} />
            <Route path="/pos/application/start" component={StartApplication} />
            <Route
              path="/pos/application/assets/:orderId"
              component={AssetConnection}
            />
            <Route
              path="/pos/application/complete/:orderId"
              component={ApplicationComplete}
            />
          </div>
        </Router>
      </AppStyled>
    </RecoilRoot>
  );
};

export default App;
