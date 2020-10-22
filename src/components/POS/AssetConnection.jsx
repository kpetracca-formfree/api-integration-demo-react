import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TOSModalGlobal } from "../../utils/recoilStates";

import { GET } from "../../utils/apiCalls";

import Modal from "../atom/Modal";
import TOS from "../atom/TOS";

import styled from "styled-components";

const AssetConnectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: var(--main-height-footer);

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

  // attach history to component from react-router library
  const history = useHistory();

  // pull in global TOS modal state for component use
  const [TOSModal, setTOSModal] = useRecoilState(TOSModalGlobal);

  // set initial state using react hooks
  const [SSOUrl, setSSOUrl] = useState("");

  // on page load, set ssoUrl for IFrame and create event listener for IFrame postMessage
  useEffect(() => {
    const listener = (e) => {
      if (e.data === "closeFrame") {
        console.log("closewidget: ", e.data);
        window.removeEventListener("message", listener);
        history.push(`/application/complete/${orderId}`);
      }
      if (e.data === "closeFrameTimeout") {
        console.log("closewidget: ", e.data);
        window.removeEventListener("message", listener);
      }
    };

    const getSSOUrl = async (orderId) => {
      const url = `/accountchekorders/${orderId}/ssoUrl`;
      const response = await GET(url);
      setSSOUrl(response.url ? response.url + "&widget=1" : "");
      console.log(response);
      console.log(
        "Retrieve SSO URL: ",
        response.url ? response.url + "&widget=1" : ""
      );
    };

    window.addEventListener("message", listener);
    getSSOUrl(orderId);
  }, [props.match.params]);

  return (
    <AssetConnectionStyled>
      {TOSModal ? (
        <Modal
          allowOutsideClick={false}
          scroll={true}
          setGlobalState={setTOSModal}
          buttonText="I Agree to the Terms of Service"
        >
          <TOS />
        </Modal>
      ) : (
        ""
      )}
      {SSOUrl ? (
        <iframe title="AccountChek" src={SSOUrl} />
      ) : (
        "SSO URL could not be retrieved."
      )}
    </AssetConnectionStyled>
  );
};

export default AssetConnection;
