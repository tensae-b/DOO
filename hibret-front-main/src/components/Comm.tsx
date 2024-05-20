import React from 'react'
import  Avatar  from '../../public/asset/icons/avatar.svg'

const Comm = () => {
  return (
   
          <div className='flex flex-col  gap-1 border-b border-gray-500 border-opacity-20 py-2'>
            <div className='flex items-center gap-4'>
                <img src={Avatar}/>
                <h3>Someones name</h3>
                <p className='text-xs text-gray-600'> 3:15 pm</p>
        </div>
         <div className='pl-12 text-xs text-gray-500'>Text details here?.....</div>
            
            
              </div>


    
  )
}

export default Comm