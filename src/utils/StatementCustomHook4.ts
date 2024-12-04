// hooks/useDownloadPDF.ts

import { useMutation } from "react-query";

export const useDownloadPDF = () => {
  // Define the mutation to call the API
  return useMutation({
    mutationFn: async (item: { itemID: string; document_ref: string }) => {
      const postBody = [{ id: item.itemID, name: item.document_ref }];

      const response = await fetch("https://example.com/api/get-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }

      const byteArray = await response.arrayBuffer();
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      // Trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      return "success"; // return a success message
    },
  });
};
