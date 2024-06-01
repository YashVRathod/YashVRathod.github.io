import React from 'react';

const PDFViewer = () => {
  return (
    <div>
      <h2>PDF Viewer</h2>
      <p>The PDF has been generated. You can download it using the button below:</p>
      <a href="/images.pdf" download="images.pdf">Download PDF</a>
    </div>
  );
};

export default PDFViewer;
