import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "@tanstack/react-router";
import download from '/asset/icons/download.svg';
import pdf from '/asset/icons/pdf.svg';
import visible from '/asset/icons/visible.svg';

const DocumentDetailsCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocumentDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/initiate/reqDoc/workflows/664a5d6c8812be42ee4d727e`);
        setDocument(data);
        
      } catch (error) {
        console.error("Error fetching document details:", error);
      }
      console.log("fetch")
    };

    fetchDocumentDetails();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between items-center p-4 border rounded shadow">
      <div className="flex gap-6 items-center">
        <img src={pdf} alt="PDF Icon" className="w-8 h-8" />
        <h5 className="text-teal-600">document</h5>
      </div>
      <div className="flex gap-6 items-center">
        {isVisible && (
          <div className="relative" style={{ width: '200px', height: '200px' }}>
            <iframe
              src={document.fileUrl}
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            ></iframe>
          </div>
        )}
        <Link to="/fulldocument">
          <img src={visible} style={{ cursor: 'pointer' }} alt="Visibility Icon" onClick={toggleVisibility} />
        </Link>
        <img src={download} alt="Download Icon" />
      </div>
    </div>
  );
};

export default DocumentDetailsCard;
