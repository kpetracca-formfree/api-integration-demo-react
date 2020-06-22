import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { GET, GET_PDF } from "../../utils/apiCalls";

import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ApplicationCompleteStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ApplicationComplete = (props) => {
  const { orderId } = props.match.params;

  const [latestReportId, setLatestReportId] = useState("");
  const [latestReportJson, setLatestReportJson] = useState("");
  const [latestReportPdf, setLatestReportPdf] = useState("");

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <ApplicationCompleteStyled>
      <p>Completion Dashboard</p>
      <button onClick={getReports}>Get Report</button>
      <Document
        file={latestReportPdf}
        onLoadError={(error) =>
          alert("Error while loading document! " + error.message)
        }
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ cMapUrl: "cmaps/", cMapPacked: true }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages ? (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      ) : (
        ""
      )}
      {pageNumber > 1 ? (
        <button onClick={previousPage}>Previous page</button>
      ) : (
        ""
      )}
      {pageNumber < numPages ? (
        <button onClick={nextPage}>Next page</button>
      ) : (
        ""
      )}
    </ApplicationCompleteStyled>
  );
};

export default ApplicationComplete;
