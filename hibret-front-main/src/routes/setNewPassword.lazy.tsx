import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/setNewPassword')({

  component: () =>  <div className='flex item-center justify-center  fixed top-0 left-0 right-0 bottom-0 bg-white pt-56 z-50'>
  <div className=' w-[400px] h-[320px] flex items-center justify-center flex-col gap-6 p-0'>
     <h1 className='text-3xl font-raleway  bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900'>Setup New Password</h1>
     <p className='text-gray-600 text-sm'>Enter a new password for your account</p>
     <input type='password' placeholder='Enter a new password' className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border rounded-md h-12 border-gray-600'/>
     <input type='password' placeholder='confirm password' className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border h-12 rounded-md border-gray-600'/>
     <button className='mt-2 bg-teal-500 rounded-md w-full h-12'>Change Password</button>

  </div>

 </div>
})