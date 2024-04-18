import MyForm from '../pages/adminWorkflow'
import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { useSession } from '../hooks/useSession'
import {getUserData} from '../services/api/userApi'

export const Route = createLazyFileRoute('/adminworkflow')({
    component: () => <MyForm />
})
// const  AdminWorkFlow= () =>{
//     return(
//         <>
//         <div className="flex">
//         <SideBar/>
//         <div className="w-full">
//         <NavBar/>
//         </div>
//         </div>
//     </>
//     )








// }