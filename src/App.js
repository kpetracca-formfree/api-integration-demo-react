import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// top level routing imports
import DemoNav from "./components/DemoNav";
import DemoFooter from "./components/DemoFooter";
import DemoModal from "./components/DemoModal";
import POSHome from "./components/POS/POSHome";
import StartApplication from "./components/POS/StartApplication";
import AssetConnection from "./components/POS/AssetConnection";
import ApplicationComplete from "./components/POS/ApplicationComplete";

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
          <div className="demoWrapper">
            <DemoNav />
            <Route path="/" exact component={DemoModal} />
            <Route path="/pos" exact component={POSHome} />
            <Route path="/pos/application/start" component={StartApplication} />
            <Route
              path="/pos/application/assets/:orderId"
              component={AssetConnection}
            />
            <Route
              path="/pos/application/complete/:orderId"
              component={ApplicationComplete}
            />
            <DemoFooter />
          </div>
        </Router>
      </AppStyled>
    </RecoilRoot>
  );
};

export default App;
