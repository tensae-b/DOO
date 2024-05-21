import { createLazyFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Define the FullDocumentView component first
function FullDocumentView  () {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/asset/icons/trypdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

// Use the FullDocumentView component in the createLazyFileRoute
export const FullDocumentRoute = createLazyFileRoute('/fulldocumentback')({
  component: <FullDocumentView />
});

export default FullDocumentView;
