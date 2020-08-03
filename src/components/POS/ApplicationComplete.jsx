import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GET, GET_PDF } from "../../utils/apiCalls";

import ReportViewer from "./ReportViewer";

import styled from "styled-components";

const ApplicationCompleteStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplicationComplete = (props) => {
  const { orderId } = props.match.params;

  const [orderVoaLite, setOrderVoaLite] = useState([]);
  const [latestReportId, setLatestReportId] = useState(null);
  const [latestReportJson, setLatestReportJson] = useState(null);
  const [latestReportPdf, setLatestReportPdf] = useState(null);
  const [showReport, setShowReport] = useState(false);

  const history = useHistory();

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

  const voaLite = orderVoaLite.map((account) => (
    <p>
      {account.fiName} - {account.balance} as of {account.balanceDate}
    </p>
  ));

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

  const closeReport = () => {
    console.log("Closing report...");
    setShowReport(false);
  };

  const editOrder = () => {
    history.replace(`/pos/application/assets/${orderId}`);
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
