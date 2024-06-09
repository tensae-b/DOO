import { createLazyFileRoute } from '@tanstack/react-router'
import UserName from '../components/UserName'
import SideBar from '../components/SideBar'
import ReportHead from '../components/ReportHead'
import ReportMiddle from '../components/ReportMiddle'
import ReportEnd from '../components/ReportEnd'

export const Route = createLazyFileRoute('/report')({
  component: () => (<div>
    <div className='flex gap-10'>
      <div className='fixed top-0 left-0'> <SideBar/></div>
      <div className=''><UserName /></div>
     
      <div className='className=" ml-44 mr-2" '>
        
        
        <div className='mt-28'>
        <ReportHead/>
        <ReportMiddle/>
        
        </div>
  
      </div>
      
  
    </div>
  
  
  </div>
  )
})