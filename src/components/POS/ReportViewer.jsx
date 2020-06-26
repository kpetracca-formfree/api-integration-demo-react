import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

import styled from "styled-components";

const PageControlStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 125px;
  }
`;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReportViewer = ({ latestReportPdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
    <>
      <PageControlStyled>
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
      </PageControlStyled>
      {numPages ? (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      ) : (
        ""
      )}
      <Document
        maxWidth="var(--demo-width);"
        file={latestReportPdf}
        onLoadError={(error) =>
          alert("Error while loading document! " + error.message + ".")
        }
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ cMapUrl: "cmaps/", cMapPacked: true }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default ReportViewer;
