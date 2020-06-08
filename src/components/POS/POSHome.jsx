import React from "react";

import styled from "styled-components";

const POSHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const POSHome = () => {
  return (
    <POSHomeStyled>
      <h2>POS Dash</h2>
    </POSHomeStyled>
  );
};

export default POSHome;
