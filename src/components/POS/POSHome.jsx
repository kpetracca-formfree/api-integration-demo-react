import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const POSHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const POSHome = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/application/start");
  };

  return (
    <POSHomeStyled>
      <h2>POS Dash</h2>
      <p>Start your application to find out how much you can borrow today!</p>
      <button onClick={clickHandler}>Begin Application</button>
    </POSHomeStyled>
  );
};

export default POSHome;
