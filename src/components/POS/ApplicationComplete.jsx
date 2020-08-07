import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GET, GET_PDF } from "../../utils/apiCalls";

import ReportViewer from "./ReportViewer";

import styled from "styled-components";

const ApplicationCompleteStyled = styled.div`
  height: var(--main-height-footer);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplicationComplete = (props) => {
  // set orderId from url parameters
  const { orderId } = props.match.params;

  // set initial states using react hooks
  const [orderVoaLite, setOrderVoaLite] = useState([]);
  const [latestReportId, setLatestReportId] = useState(null);
  const [latestReportJson, setLatestReportJson] = useState(null);
  const [latestReportPdf, setLatestReportPdf] = useState(null);
  const [showReport, setShowReport] = useState(false);

  // attach history to component from react-router library
  const history = useHistory();

  // on page load, pull voa lite data and check if report is available...
  // if report available, set reportId
  useEffect(() => {
    const getVoaLite = async (orderId) => {
      const url = `/accountchekorders/${orderId}/voa/lite`;
      const response = await GET(url);
      console.log("Retriving VOA lite: ", response);
      try {
        setOrderVoaLite(response);
      } catch {
        console.log("No accounts linked.");
      }
    };

    const getReportInfo = async (orderId) => {
      const url = `/accountchekorders/${orderId}/voa/reports`;
      const response = await GET(url);
      console.log("Retrieving report info: ", response);
      try {
        setLatestReportId(response[0].id);
      } catch {
        console.log("No reports found.");
      }
    };

    getVoaLite(orderId);
    getReportInfo(orderId);
  }, [props.match.params]);

  // create list of accounts to display from voa lite data
  const voaLite = orderVoaLite.map((account, index) => {
    const datePulled = new Date(account.balanceDate);
    return (
      <p key={index}>
        <b>Bank Account:</b> {account.fiName} - {account.balance} as of{" "}
        {datePulled.toUTCString()}
      </p>
    );
  });

  // on button click, sets flag to visually show report pdf...
  // if reportId is set and pdf has not been retrieved yet from API, gets report json and pdf
  const getReport = () => {
    if (latestReportId && !latestReportPdf) {
      const getReportJson = async () => {
        const url = `/accountchekorders/${orderId}/voa/reports/${latestReportId}/summary`;
        const response = await GET(url);
        setLatestReportJson(response);
        console.log("Getting report - JSON: ", response);
      };

      const getReportPdf = async () => {
        const url = `/accountchekorders/${orderId}/voa/reports/${latestReportId}/summary`;
        const response = await GET_PDF(url);

        const file = new Blob([response], { type: "application/pdf" });
        console.log("Getting report - PDF: ", file);
        const fileURL = URL.createObjectURL(file);
        setLatestReportPdf(fileURL);
      };

      getReportJson();
      getReportPdf();
    }
    console.log("Opening report...");
    setShowReport(true);
  };

  // on button click, sets flag to hide report pdf
  const closeReport = () => {
    console.log("Closing report...");
    setShowReport(false);
  };

  // take user to edit or add account connections via IFrame
  const editOrder = () => {
    history.push(`/application/assets/${orderId}`);
  };

  return (
    <ApplicationCompleteStyled>
      <h1>Review the accounts you have submitted so far:</h1>
      {orderVoaLite.length ? voaLite : ""}
      {!latestReportId ? (
        ""
      ) : (
        <>
          <p>Your report is available!</p>
          {showReport ? (
            <>
              <button onClick={closeReport}>Close Report</button>
              <ReportViewer latestReportPdf={latestReportPdf} />
            </>
          ) : (
            <button onClick={getReport}>Show Report</button>
          )}
        </>
      )}
      <p>Need to make changes?</p>
      <button onClick={editOrder}>Click to Edit Accounts</button>
    </ApplicationCompleteStyled>
  );
};

export default ApplicationComplete;
