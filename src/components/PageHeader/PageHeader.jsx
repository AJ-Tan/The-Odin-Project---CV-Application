import React from "react";
import "./pageHeaderStyles.css";

function PageHeader() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="page-header">
      <div className="page-logo">
        <h1>CVGEN</h1>
      </div>
      <button className="btn-download" type="button" onClick={handlePrint}>
        Download
      </button>
    </header>
  );
}

export default PageHeader;
