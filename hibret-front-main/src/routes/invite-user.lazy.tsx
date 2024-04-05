import { useState , useEffect} from 'react';
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
export const Route = createFileRoute('/invite-user')({
    component: () => <InviteNewUser/>
})

import { getAllUser, verifyUser,  useCreateNewUser  }from '../services/queries/userQuery'


function InviteNewUser() {
    const userData : any=[]
    const [user ,setUser]= useState([])
    const { data, isLoading } = getAllUser();
    const {mutateAsync: verify} :any = verifyUser();
    const { mutateAsync: createUser, isPending, isError, isSuccess } = useCreateNewUser()
function fetchData(){
   
  
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching users</div>
   console.log(data[0])
    
    for (let i = 0; i < data.length; i++) {
      
      userData.push({
        id: data[i].id,
        email: data[i].email,
        role:data[i].role
      });
      setUser(userData);

    }
  }

  async function verifying(email :string, role :string){
  
    const random=  Math.random()*100
    const password= email.substring(0,2)+ Math.floor(random)
      
      const res = await verify({email, password});
     
     console.log(res)
     if(res== "success"){
      console.log({ email, password, role })
      const userData = await createUser({ email, password, role })
      
      console.log({ userData });
     }
}
    return <div>
      <div className='mt-32 mx-10 flex flex-col gap-10'>
        {user.map((item :any) => (
            <div className='flex gap-10'>
                  <h1>{item.email}</h1>
                     <p>{item.role}</p>

                     <button className='bg-black text-white p-5' onClick={() => {verifying(item.email, item.role);}}> invite</button>
                     <br/>
                 </div>
                  
                  ))}
    <button className='bg-black text-white p-5' onClick={fetchData}> fetch</button>
    </div>
</div>
  

}

