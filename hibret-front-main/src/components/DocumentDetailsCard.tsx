import React, { useState } from 'react';
import { Link } from "@tanstack/react-router";
import download from '/asset/icons/download.svg';
import pdf from '/asset/icons/pdf.svg';
import visible from '/asset/icons/visible.svg';

const DocumentDetailsCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded shadow">
      <div className="flex gap-6 items-center">
        <img src={pdf} alt="PDF Icon" className="w-8 h-8" />
        <h5 className="text-teal-600">Document Name</h5>
      </div>
      <div className="flex gap-6 items-center">
        {isVisible && (
          <div className="relative" style={{ width: '200px', height: '200px' }}>
            <iframe
              src="/asset/icons/trypdf.pdf"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            ></iframe>
          </div>
        )}
        <Link to="/fulldocument">
          <img src={visible} style={{ cursor: 'pointer' }} alt="Visibility Icon" />
        </Link>
        <img src={download} alt="Download Icon" />
      </div>
    </div>
  );
};

export default DocumentDetailsCard;
