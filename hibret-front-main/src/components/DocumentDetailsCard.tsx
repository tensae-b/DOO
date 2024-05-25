import React, { useState } from 'react';
import { Link, } from "@tanstack/react-router";
import download from '/asset/icons/download.svg';
import pdf from '/asset/icons/pdf.svg';
import visible from '/asset/icons/visible.svg';

const DocumentDetailsCard = ({ doc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!doc) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between items-center p-4 border rounded shadow">
      <div className="flex gap-6 items-center">
        <img src={pdf} alt="PDF Icon" className="w-8 h-8" />
        <h5 className="text-teal-600">{doc.name}</h5>
      </div>
      <div className="flex gap-6 items-center">
        {isVisible && (
          <div className="relative" style={{ width: '200px', height: '200px' }}>
            <iframe
              src={doc.filePath[0]}
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            ></iframe>
          </div>
        )}
        <Link to={`/fulldocument/${encodeURIComponent(doc.filePath[0])}`}>
          <img src={visible} style={{ cursor: 'pointer' }} alt="Visibility Icon" onClick={toggleVisibility} />
        </Link>
        <img src={download} alt="Download Icon" />
      </div>
    </div>
  );
};

export default DocumentDetailsCard;
