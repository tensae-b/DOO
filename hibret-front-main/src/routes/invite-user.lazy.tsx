import { useState , useEffect} from 'react';
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
export const Route = createFileRoute('/invite-user')({
    component: () => <InviteNewUSer/>
})




function InviteNewUSer() {
    const userData : any=[]
    const [user,setUser]= useState([])
function fetchData(){
    useEffect(() => {
  
        try {
          axios.get('http://localhost:3000/invite').then(async(response)=>{
            console.log(response.data)
            const data= response.data
            for (let i = 0; i < data.length; i++) {
                userData.push({
                  id: data[i].id,
                  email: data[i].id,
                  role:data[i].id
                });
                setUser(userData);
              }
            setUser(response.data)
            console.log(user)
          })
          
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
     
  
    
    }, []); 
  
}
     return(
    <div className='mt-32 mx-10 flex flex-col gap-10'>
        {user.map((item, key) => (
            <div className='flex gap-10'>
                  <h1>{item.email}</h1>
                     <p>{item.role}</p>

                     <button className='bg-black text-white p-5'> invite</button>
                     <br/>
                 </div>
                  
                  ))}
    <button className='bg-black text-white p-5' onClick={fetchData()}> fetch</button>
    </div>
     );
}