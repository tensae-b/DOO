import { CollectionConfig } from 'payload/types'
import userData from '../content/userData'


import payload from "payload";


const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      options: ['Chief Credit Officer', 'Section Head', 'Department Director', 'Division Manager', 'Admin'],
      required: true,

    },
    {
      name: 'activated',
      type: 'checkbox',
      required: true,
      defaultValue: true

    },
  ],
  endpoints: [
    {
      path: '/verify',
      method: 'post',
      handler: async (req, res) => {
        
          const email = req.body.email;
         
          const password= req.body.password;
          
          
          payload.sendEmail({
            from: 'sender@example.com',
            to: `${email}`,
            subject: 'Message subject title',
            html: `<P> please use the email: ${email} and <p>
             <p> password: ${password} to login into the system <p>`,
          })
         res.send("success")
      }
    },

    {
      path: '/allusers',
      method: 'get',
      handler: async (req, res) => {
       res.send(userData)
      }
    },
    
    {
      path: '/activate/:id',
      method: 'post',
      handler: async (req, res) => {
        const userId= req.params.id
        console.log(req.body.activate)
        const activate= req.body.activate

        await payload.update({
          collection: 'users',
          id: userId,
          data: {
            activated: !activate
          }
        })

      
      } 
    },
  ]
}

export default Users
