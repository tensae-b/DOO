import React from 'react'

const Comments = () => {
  return (
    <div className=" h-96 w-80 border border-gray-500 border-opacity-10 my-9 flex flex-col p-4 gap-4">
    <h5  className=" text-teal-600" >Comments/Feedback</h5>
    <input className="w-full h-44 border border-gray-500 border-opacity-10 " placeholder="Enter yor comment" type="text"/>

    <h5 className=" text-teal-600">Verdict</h5>
    <div className="flex gap-8">
       <button className="w-44 h-9 border border-teal-500 rounded-md text-teal-500 text-sm ">Approve</button>
       <button className="w-44 h-9 border border-red-500 rounded-md text-red-600 text-sm">Reject</button>

    </div>

    <h5 className=" text-teal-600">Progression</h5>
    <div className="flex gap-8">
       <button className="w-44 h-9 border border-gray-400 rounded-md text-gray-400 text-sm ">Forward</button>
       <button className="w-44 h-9 border border-gray-400 rounded-md text-gray-400 text-sm">Back</button>

    </div>
  </div>
  )
}

export default Comments