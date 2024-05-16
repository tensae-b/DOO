import React from 'react'
import download from '/asset/icons/download.svg'
import pdf from '/asset/icons/pdf.svg'
import visible from '/asset/icons/visible.svg'


const DocumentDetailsCard = () => {
  return (
     
    <div className="flex justify-between"> 
    <div className="flex gap-6 items-center">
    <img  src={pdf}/>
     <h5  className=" text-teal-600">Document Name</h5>
</div>
<div className="flex gap-6 items-center">
    <img src={visible}/>
    <img src={download}/>

</div>

</div>
  )
}

export default DocumentDetailsCard