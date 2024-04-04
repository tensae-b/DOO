import { useState , useEffect, Key} from 'react';
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
export const Route = createFileRoute('/invite-user')({
    component: () => <InviteNewUser/>
})

import { getAllUser, verifyUser }from '../services/queries/userQuery'


function InviteNewUser() {
    const userData : any=[]
    const [user ,setUser]= useState([])
    const { data, isLoading, isError } = getAllUser();
    const {mutateAsync: verify} :any = verifyUser();
function fetchData(){
   
  
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching documents</div>
    console.log(data.docs)
    const doc :any = data.docs
    for (let i = 0; i < doc.length; i++) {
      
      userData.push({
        id: doc[i].id,
        email: doc[i].email,
        role:doc[i].role
      });
      setUser(userData);

    }
  }

  async function verifying(email :any){
  

      
      const res = await verify({email});
     
     console.log(res)
}
    return <div>
      <div className='mt-32 mx-10 flex flex-col gap-10'>
        {user.map((item :any) => (
            <div className='flex gap-10'>
                  <h1>{item.email}</h1>
                     <p>{item.role}</p>

                     <button className='bg-black text-white p-5' onClick={() => {verifying(item.email);}}> invite</button>
                     <br/>
                 </div>
                  
                  ))}
    <button className='bg-black text-white p-5' onClick={fetchData}> fetch</button>
    </div>
</div>
  

}

