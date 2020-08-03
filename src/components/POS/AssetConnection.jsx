import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GET } from "../../utils/apiCalls";

import styled from "styled-components";

const AssetConnectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: var(--main-height);

  iframe {
    width: var(--demo-width);
    overflow: visible;
    height: 100%;
    border-style: none;
    overflow: hidden;
  }
`;

const AssetConnection = (props) => {
  const { orderId } = props.match.params;
  const [SSOUrl, setSSOUrl] = useState("");

  const history = useHistory();

  const getSSOUrl = async (orderId) => {
    const url = `/accountchekorders/${orderId}/ssoUrl`;
    const response = await GET(url);
    setSSOUrl(response.url + "&widget=1");
    console.log("Retrieve SSO URL: ", response);
    console.log("Retrieve SSO URL: ", response.url + "&widget=1");
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.data === "closeFrame") {
        console.log("closewidget: ", e.data);
        window.removeEventListener("message", listener);
        history.replace(`/pos/application/complete/${orderId}`);
      }
    };
    window.addEventListener("message", listener);
    getSSOUrl(orderId);
  }, [props.match.params]);

  return (
    <AssetConnectionStyled>
      <iframe title="AccountChek" src={SSOUrl} />
    </AssetConnectionStyled>
  );
};

export default AssetConnection;
