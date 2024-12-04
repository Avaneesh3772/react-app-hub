import React, { useState } from "react";

const MyComponent = () => {
  const item = { itemID: "111", document_ref: "www" };

  // State to control the loading state (when PDF is downloading)
  const [isDownloading, setIsDownloading] = useState(false);

  // Method to handle the download of the PDF
  const pdfDownload = async (item: any) => {
    // Define the request body
    const postBody = [{ id: item.itemID, name: item.document_ref }];

    // Set downloading state to true to disable the button
    setIsDownloading(true);

    try {
      // Make the API call to fetch the byte array (assuming the API returns a byte array)
      const response = await fetch("https://example.com/api/get-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Failed to download the PDF");
      }

      // Get the byte array from the response
      const byteArray = await response.arrayBuffer();

      // Create a Blob from the byte array
      const blob = new Blob([byteArray], { type: "application/pdf" });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element and trigger a download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.pdf"); // You can name the PDF file here
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Optionally, revoke the URL after the download
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      // Re-enable the download button after the download is complete
      setIsDownloading(false);
    }
  };

  return (
    <div>
      <button onClick={() => pdfDownload(item)} disabled={isDownloading}>
        {isDownloading ? "Downloading..." : "Download PDF"}
      </button>
    </div>
  );
};

export default MyComponent;
