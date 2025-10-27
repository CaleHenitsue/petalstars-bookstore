import React, { useState } from "react";

const BookCard = ({ book }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const handleDownload = async () => {
    if (!book.megaLink) {
      setDownloadStatus("Download not available");
      setTimeout(() => setDownloadStatus(""), 3000);
      return;
    }

    setIsDownloading(true);
    setDownloadStatus("Starting download...");

    try {
      const link = document.createElement("a");
      link.href = book.megaLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      const filename = `${book.title
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase()}_ebook.pdf`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Download started! 📥");
      setTimeout(() => {
        setDownloadStatus("");
        setIsDownloading(false);
      }, 3000);
    } catch (error) {
      console.error("Download error:", error);
      setDownloadStatus("Download failed. Please try again.");
      setTimeout(() => {
        setDownloadStatus("");
        setIsDownloading(false);
      }, 3000);
    }
  };

  return (
    <div className="book-card bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-center mb-4">
        <div className="w-32 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mx-auto flex items-center justify-center text-white text-6xl shadow-lg">
          {book.emoji}
        </div>
      </div>

      <h4 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h4>
      <p className="text-gray-600 mb-4 text-sm">{book.description}</p>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">
            {book.price}
          </span>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Add to Cart
          </button>
        </div>

        <div className="border-t pt-3">
          {downloadStatus && (
            <div
              className={`text-sm mb-2 p-2 rounded-lg text-center ${
                downloadStatus.includes("failed")
                  ? "bg-red-100 text-red-700"
                  : downloadStatus.includes("not available")
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {downloadStatus}
            </div>
          )}

          <button
            onClick={() => {
              setShowInstructions(true);
              handleDownload();
            }}
            disabled={isDownloading || !book.megaLink}
            className={`w-full py-2 px-4 rounded-full font-medium transition-all duration-300 ${
              !book.megaLink
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isDownloading
                ? "bg-blue-400 text-white cursor-wait"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105"
            }`}
          >
            {isDownloading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </span>
            ) : !book.megaLink ? (
              "eBook Coming Soon"
            ) : (
              "📥 Download eBook"
            )}
          </button>
        </div>
      </div>

      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="font-bold mb-4">Download Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Click will open MEGA in a new tab</li>
              <li>Click "Download" on the MEGA page</li>
              <li>Your eBook will download automatically</li>
              <li>No MEGA account required!</li>
            </ol>
            <button
              onClick={() => setShowInstructions(false)}
              className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
