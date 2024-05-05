import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/LoanDocument')({
  component: () => <LoanDocument/>
})

function LoanDocument(){
  const steps=[
    {
      id: 1,
      title: "Personal information"},
    {
      id: 2,
      title: "collateral information"}
  ]
return(
  <div className="mx-3 mb-10 ">
  <div className="flex">
    <SideBar />
    <div className="w-full flex flex-col">
      <NavBar />
      <div className='mt-10'>
        <div className='header flex justify-between'> 
          <h2 className='text-[#00B0AD] text-3xl font-bold'>Loan Application Workflow</h2>
          <div className='flex gap-4'>
          <button className={` text-base px-6 py-2  text-[#9EA9C1] border border-[#9EA9C1] border-dotted rounded-lg`}>Save as Draft</button>
          <button className={` text-base px-6 py-2 border border-[#DC251C] border-dotted text-[#DC251C] font-semibold rounded-lg`}>Cancel</button>
          </div>
        </div>
        <div className='steps-bar flex w-full justify-center my-10'>
         {steps.map((item)=>
         <div className='flex flex-col gap-2'>
         <div className='flex gap-0 items-center justify-center'>
             <div className='flex flex-col'>
               <div className='flex border border-[#4A176D] border-double p-5 rounded-full'>
               </div>

             </div>
             {item.id < steps.length && (<img src="/asset/icons/Line.svg" />)}

           </div>
           <p className='max-w-[20px] text-[#6F6F6F] text-xs'>{item.title }</p>
           </div>
          )

         }
        </div>
        <h2 className='text-[#4A176D] text-2xl font-bold'>Personal Information Form</h2>
           <div className='flex mt-10 gap-5'>
        <div className='flex flex-col gap-5 w-[75%]'>
         
         
          <div  className="form flex flex-col gap-4">
          <div className='section1 flex flex-col p-6 border border-[#EFEFF4] gap-4 rounded-lg'>
           <h3 className='text-[#00B0AD] text-xl font-bold'>Loan Information</h3>
           <hr className='bg-[#EFEFF4]'/>
           <div className='flex gap-6 w-full'>
           <div className='flex flex-col gap-6 items-center w-full'>
            <h3 className='text-lg w-full'>Borrower Name</h3>
            <input type="text" placeholder='ex. Loan Application' className='w-full border border-[#EFEFF4] p-3 rounded-lg text-base'/>
           </div>
           <div className='flex flex-col gap-6 items-center w-full' >
            <h3 className='text-lg w-full'>Loan Type</h3>
            <select
                   id="document-type"
                  className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                
                 
                >
                  <option>
                    <img src="/icons/select-icon.svg" />
                    Select Loan Type</option>
                  <option value="loan">Personal</option>
                 
                </select>
           </div>
           </div>
          </div>

          <div className='section2 flex flex-col p-6 border border-[#EFEFF4]  gap-4 rounded-lg'>
           <h3 className='text-[#00B0AD] text-xl font-bold'>Bank Information</h3>
           <hr className='bg-[#EFEFF4]'/>
           <div className='flex flex-col gap-6 w-full'>
           <div className='flex flex-col gap-6 items-center w-full'>
            <h3 className='text-lg w-full'>Bank account number</h3>
            <input type="text" placeholder='bank account' className='w-full border border-[#EFEFF4] p-3 rounded-lg text-base'/>
           </div>
           <div className='flex flex-col gap-6 items-center w-full' >
            <h3 className='text-lg w-full'>Bank account type</h3>
            <select
                   id="bank-account"
                  className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                
                 
                >
                  <option>
                    <img src="/icons/select-icon.svg" />
                    Select bank account type</option>
                  <option value="loan">Saving</option>
                 
                </select>
           </div>

           <div className='flex flex-col gap-6 items-center w-full'>
            <div className='flex gap-3 w-full'>
            <h3 className='text-lg '>Add another account</h3>
            <p className=' text-xs text-[#027A48]'>Optional</p>
            </div>
            
            <input type="text" placeholder='bank account' className='w-full border border-[#EFEFF4] p-3 rounded-lg text-base'/>
           </div>
           <a href="LoanDocument" className={` text-base px-6 py-2 self-end ${ null != null ? "bg-[#00B0AD] text-white":"bg-[#F0F3F6] text-[#9EA9C1]"}`}>Continue</a>
           </div>
          </div>

          </div>
        </div>

        <div className='quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg'>
         <p className='text-sm font-bold p-2'>Quick Access</p>
         <p className='text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]'>Personal Information</p>
         <p className='text-sm  p-2'>Account Details</p>
         <p className='text-sm  p-2'>Employment Details</p>
        
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
);
}