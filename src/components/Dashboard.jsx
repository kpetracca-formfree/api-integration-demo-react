import React from "react";

import { POST, PATCH } from "../utils/apiCalls";

import styled from "styled-components";

const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard = () => {
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
    console.log(response);
  };

  const createOrderVOA = async () => {
    const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
    const url = `/accountchekorders/${orderId}/voa`;
    const body = {
      requestType: "full",
      accountMonitoring: 30,
    };
    const response = await POST(url, body);
    console.log(response);
  };

  const setVOAOpen = async () => {
    const orderId = "b2f0b7e4-37a4-ea11-9b05-000d3a12ecdf";
    const url = `/accountchekorders/${orderId}`;
    const body = {
      status: "opened",
    };
    const response = await PATCH(url, body);
    console.log(response);
  };

  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
      <button onClick={setVOAOpen}>Create New Order</button>
    </DashboardStyled>
  );
};

export default Dashboard;
