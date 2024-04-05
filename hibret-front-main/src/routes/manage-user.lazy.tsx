import { createLazyFileRoute } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/manage-user')({
  component: () => <ManageUser/>
})
import { getUsers, useActivate}from '../services/queries/userQuery'


function ManageUser(){
  const {mutateAsync: activate} :any = useActivate();
  async function deactivate(id :any){
    const res = await activate({id});
     console.log(res)
  }

const { data} = getUsers();

  return<div>
      <div className='mt-32 mx-10 flex flex-col gap-10'>
        {data && data.docs.map((item :any) => (
            <div className='flex gap-10'>
                  <h1>{item.email}</h1>
                     <p>{item.role}</p>

                     <button className='bg-black text-white p-5' onClick={() => {deactivate(item.id)}}> deactivate</button>
                     <br/>
                 </div>
                  
                  ))}
  
    </div>
</div>
  
}

