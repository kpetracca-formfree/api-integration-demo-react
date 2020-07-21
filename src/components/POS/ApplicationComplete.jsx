import React, { useState, useEffect } from "react";

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

  let voaLite = "";

  useEffect(() => {
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

    // const getVoaLite = async (orderId) => {
    //   const url = `/accountchekorders/${orderId}/voa/lite`;
    //   const response = await GET(url);
    //   console.log("Retriving VOA lite: ", response);
    //   try {
    //     setOrderVoaLite(response);
    //   } catch {
    //     console.log("No accounts linked.");
    //   }
    // };

    getReportInfo(orderId);
    // getVoaLite(orderId);
  }, [props.match.params]);

  // useEffect(() => {
  //   voaLite = orderVoaLite.map((account) => {
  //     return (
  //       <p>
  //         {account.fiName} - {account.balance} as of {account.balanceDate}
  //       </p>
  //     );
  //   });
  // }, [orderVoaLite]);

  const getReports = () => {
    if (latestReportId) {
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
  };

  return (
    <ApplicationCompleteStyled>
      <h1>Review your VOA report</h1>
      {/* {orderVoaLite.length ? { voaLite } : ""} */}
      {!latestReportId ? (
        ""
      ) : (
        <>
          {latestReportPdf ? (
            ""
          ) : (
            <button onClick={getReports}>Get Report</button>
          )}
          <ReportViewer latestReportPdf={latestReportPdf} />
        </>
      )}
    </ApplicationCompleteStyled>
  );
};

export default ApplicationComplete;
