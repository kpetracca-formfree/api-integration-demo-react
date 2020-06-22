import React, { useState, useEffect } from "react";

import { GET, GET_PDF } from "../../utils/apiCalls";

const ApplicationComplete = (props) => {
  const { orderId } = props.match.params;

  const [latestReportId, setLatestReportId] = useState("");
  const [latestReportJson, setLatestReportJson] = useState("");
  const [latestReportPdf, setLatestReportPdf] = useState("");

  useEffect(() => {
    const getReportInfo = async (orderId) => {
      const url = `/accountchekorders/${orderId}/voa/reports`;
      const response = await GET(url);
      console.log("Retrieving report info: ", response[0]);
      setLatestReportId(response[0].id);
    };

    getReportInfo(orderId);
  }, [props.match.params]);

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
    const fileURL = URL.createObjectURL(file);
    setLatestReportPdf(fileURL);
  };

  const getReports = () => {
    getReportJson();
    getReportPdf();
  };

  return (
    <div>
      <p>Completion Dashboard</p>
      <button onClick={getReports}>Get Report</button>
      <iframe src={latestReportPdf} type="application/pdf" />
    </div>
  );
};

export default ApplicationComplete;
