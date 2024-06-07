import React from 'react'

const Actions = () => {
  return (
    <div className="h-96 w-80 border border-gray-500 border-opacity-10 my-9 flex flex-col p-4 gap-4 items-center">
      <h5 className="text-purple-900 font-bold text-lg">Actions</h5>
      <button
            className="w-44 h-9 border border-teal-500 rounded-md text-teal-500 text-sm px-5"
           
          >Request Edit </button>

<button
            className="w-44 h-9 border border-red-500 rounded-md text-red-500 text-sm px-5 "
            
          > close workflow </button>

     
    </div>
  )
}

export default Actions