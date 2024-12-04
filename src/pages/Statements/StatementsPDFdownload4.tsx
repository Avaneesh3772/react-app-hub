// components/statement.tsx
import React from "react";
import { useDownloadPDF } from "../../utils/StatementCustomHook4";

const Statement: React.FC = () => {
  const item = { itemID: "111", document_ref: "www" };

  // Using the custom hook to manage download
  const {
    mutate: downloadPDF,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useDownloadPDF();

  // Function to trigger the download
  const handleDownload = () => {
    downloadPDF(item);
  };

  return (
    <div>
      <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? "Downloading..." : "Download PDF"}
      </button>

      {/* Display the success, error, and loading state */}
      {isLoading && <p>Downloading the PDF...</p>}
      {isError && (
        <p style={{ color: "red" }}>Error: {(error as Error).message}</p>
      )}
      {isSuccess && (
        <p style={{ color: "green" }}>PDF downloaded successfully!</p>
      )}
    </div>
  );
};

export default Statement;
