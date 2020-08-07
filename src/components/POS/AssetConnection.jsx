import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GET } from "../../utils/apiCalls";

import styled from "styled-components";

const AssetConnectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: var(--main-height-footer);

  iframe {
    width: 100%;
    overflow: visible;
    height: 100%;
    border-style: none;
    overflow: hidden;
  }
`;

const AssetConnection = (props) => {
  // set orderId from url parameters
  const { orderId } = props.match.params;

  // set initial state using react hooks
  const [SSOUrl, setSSOUrl] = useState("");

  // attach history to component from react-router library
  const history = useHistory();

  // on page load, set ssoUrl for IFrame and create event listener for IFrame postMessage
  useEffect(() => {
    const getSSOUrl = async (orderId) => {
      const url = `/accountchekorders/${orderId}/ssoUrl`;
      const response = await GET(url);
      setSSOUrl(response.url + "&widget=1");
      console.log("Retrieve SSO URL: ", response);
      console.log("Retrieve SSO URL: ", response.url + "&widget=1");
    };

    const listener = (e) => {
      if (e.data === "closeFrame") {
        console.log("closewidget: ", e.data);
        window.removeEventListener("message", listener);
        history.push(`/application/complete/${orderId}`);
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
