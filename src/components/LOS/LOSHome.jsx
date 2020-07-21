import React, { useState } from "react";

import { GET_HTML, POST, PATCH, GET } from "../../utils/apiCalls";

import styled from "styled-components";

const LOSHomeStyled = styled.div`
  height: var(--main-height);
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .widget {
    max-width: 600px;
    width: calc(var(--demo-width) - 25px);
    overflow: visible;
    height: 100%;
  }

  #frameWrap {
    height: 100%;
  }
`;

const LOSHome = () => {
  const [widget, setWidget] = useState("");
  const [reportStatus, setReportStatus] = useState("500");

  const createNewOrder = async () => {
    // build functions for creating new order
    const createOrder = async () => {
      const url = "/accountchekorders";
      const body = {
        email: "test@example.com",
        firstName: "API",
        lastName: "Demo",
        last4SSN: 1234,
        referenceNumber: 123456789,
      };
      const response = await POST(url, body);
      console.log("Create order response: ", response);
      return response.id;
    };

    const createOrderVOA = async (orderId) => {
      // const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
      const url = `/accountchekorders/${orderId}/voa`;
      const body = {
        requestType: "full",
        accountMonitoring: 60,
      };
      const response = await POST(url, body);
      console.log("Create order VOA response: ", response);
    };

    const setVOAOpen = async (orderId) => {
      // const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
      const url = `/accountchekorders/${orderId}`;
      const body = {
        status: "opened",
      };
      const response = await PATCH(url, body);
      console.log("VOA open response: ", response);
    };

    const setWidgetHTML = async (orderId) => {
      // const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
      const url = `/accountchekorders/${orderId}/enrollmentWidget`;
      setWidget(await GET_HTML(url));
    };

    // execution of built functions
    const orderId = await createOrder();
    await createOrderVOA(orderId);
    await setVOAOpen(orderId);
    await setWidgetHTML(orderId);
  };

  // creates innerHTML widget from sent API HTML
  const createWidget = () => {
    return { __html: widget };
  };

  // update report status
  const getReportStatus = async () => {
    const orderId = "8e194f95-6da7-ea11-9b05-000d3a12ecdf";
    const url = `/accountchekorders/${orderId}/voa`;
    const response = await GET(url);
    console.log("Report status: ", response);
    setReportStatus(response.status);
  };

  // temp widget creator for visual testing
  const setWidgetHTMLTemp = async () => {
    const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
    const url = `/accountchekorders/${orderId}/enrollmentWidget`;
    setWidget(await GET_HTML(url));
  };

  return (
    <LOSHomeStyled>
      <h2>LOS Dashboard</h2>
      <button onClick={createNewOrder}>
        Create New Order
        <br /> (static fields)
      </button>
      <span>
        Report status is: {reportStatus}
        <button onClick={getReportStatus}>Update Report Status</button>
      </span>
      <p>Widget will appear below:</p>
      <button onClick={setWidgetHTMLTemp}>Spawn Widget</button>
      <div className="widget" dangerouslySetInnerHTML={createWidget()} />
    </LOSHomeStyled>
  );
};

export default LOSHome;
