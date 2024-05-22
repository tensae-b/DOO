import React from 'react';
import download from '/asset/icons/download.svg';
import pdf from '/asset/icons/pdf.svg';
import visible from '/asset/icons/visible.svg';

interface DocumentDetailsCardProps {
  name: string;
}

const DocumentDetailsCard: React.FC<DocumentDetailsCardProps> = (props) => {
  return (
    <div className="flex justify-between border-b pb-4"> 
      <div className="flex gap-5 items-center">
        <img src={pdf} className='h-4' alt="PDF Icon"/>
        <h5 className="text-teal-600 text-sm">{props.name}</h5>
      </div>
      <div className="flex gap-6 items-center">
        <img src={visible} className='h-4 w-4' alt="Visible Icon"/>
        <img src={download} className='h-4 w-4' alt="Download Icon"/>
      </div>
    </div>
  );
};

export default DocumentDetailsCard;
