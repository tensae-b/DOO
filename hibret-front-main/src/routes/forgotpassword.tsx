import { createFileRoute } from '@tanstack/react-router'
import lock from "../../public/asset/icons/lock.svg"



export const Route = createFileRoute('/forgotpassword')({
  component: () => 
    <div className='flex item-center justify-center   pt-56 '>
  <div className=' w-[400px] h-[320px] flex items-center justify-center flex-col  p-0'>
    <img src={lock}/>
     
     <h1 className='text-3xl font-raleway pb-2 pt-8  '>Forgot Password</h1>
     <p className='text-gray-400 text-sm w-56 text-center '>No worries, we’ll send you reset
password instructions.</p>
   <form className='flex flex-col gap-6 w-full pt-8'>
     <input type='password' placeholder='Enter Your email' className='w-full  placeholder:text-xs py-2 px-3 placeholder:text-gray-400 text-sm border h-10 rounded-md border-gray-600'/>
     <button className='  bg-slate-100 text-gray-400 text-xs rounded-md w-full h-10'>Reset Password</button>
     </form>
    <a className='text-gray-400 text-xs pt-3'>  Back  to Login </a>
  </div>

 </div>
})