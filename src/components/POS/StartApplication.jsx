import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { orderIdGlobal } from "../../utils/recoilStates";

import { GET_HTML, POST, PATCH, GET } from "../../utils/apiCalls";

import styled from "styled-components";

const ApplicationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    padding: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .orderId {
    text-align: right;
    font-style: italic;
  }
`;

const StartApplication = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [last4SSN, setLast4SSN] = useState();

  const [orderId, setOrderId] = useRecoilState(orderIdGlobal);

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeLast4SSN = (e) => {
    setLast4SSN(parseInt(e.target.value));
  };

  const submitOrder = async () => {
    const createOrder = async () => {
      const referenceNumber = 123456789;

      const url = "/accountchekorders";
      const body = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        last4SSN: last4SSN,
        referenceNumber: referenceNumber,
      };
      const response = await POST(url, body);
      console.log("Submitted: ", body);
      console.log("Create order response: ", response);
      return response.id;
    };

    const createOrderVOA = async (orderId) => {
      const url = `/accountchekorders/${orderId}/voa`;
      const body = {
        requestType: "full",
        accountMonitoring: 60,
      };
      const response = await POST(url, body);
      console.log("Create order VOA response: ", response);
    };

    const setVOAOpen = async (orderId) => {
      const url = `/accountchekorders/${orderId}`;
      const body = {
        status: "opened",
      };
      const response = await PATCH(url, body);
      console.log("VOA open response: ", response);
    };

    const orderId = await createOrder();
    setOrderId(orderId);
    await createOrderVOA(orderId);
    await setVOAOpen(orderId);
  };

  return (
    <ApplicationStyled>
      {orderId ? <p className="orderId">{orderId}</p> : ""}
      <p>To start exploring lending options, enter your details below!</p>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            onChange={(e) => changeFirstName(e)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            onChange={(e) => changeLastName(e)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => changeEmail(e)}
            required
          />
        </label>
        <label>
          Last 4 digits of SSN:
          <input
            type="password"
            name="last4SSN"
            placeholder="SSN"
            maxLength="4"
            onChange={(e) => changeLast4SSN(e)}
            required
          />
        </label>
      </form>
      <button onClick={submitOrder}>Start Order</button>
    </ApplicationStyled>
  );
};

export default StartApplication;
