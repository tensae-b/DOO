import { CollectionConfig } from 'payload/types'
import session from 'express-session';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { MongoClient } from 'mongodb';

const SesionCollect: CollectionConfig = {
  slug: 'sessioncollect',
  auth: true,
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    // {
    //   name: 'role',
    //   type: 'select',
    //   options: ['Chief Credit Officer', 'Section Head', 'Department Director', 'Division Manager', 'Admin'],
    //   required: true,

    // },
  ],
  access: {
    create: ({ req: { user } }) => !!user,
    read: ({ req: { user } }) => !!user,
    update: ({
        req: { user } }) => user && user.role === 'user',
    delete: ({ req: { user } }) => user && user.role === 'user',
},
  endpoints: [
      
        
    {
      path: '/setsession',
      method: 'post',
      handler: async (req, res) => {
        try {
          const newSession = req.body || {};
      
          // Validate and sanitize session data (important for security)
      
          // Store session data in a cookie
          req.session.user = newSession;
          console.log('Received session data:', req.body);
          console.log('Received session data:', req.session.user);

          res.cookie('auth-session', JSON.stringify(newSession), {
            httpOnly: true, // Prevent client-side JavaScript access
            secure: true,   // Only send over HTTPS (if applicable)
          });
          // await payload.create({
          //   collection: 'sessioncollect', // Replace with your preferred collection name
          //   data: newSession
          // });
          console.log('Received session data:', req.session.user.id);
      if(req.session.user ){

        res.json({ success: true });

      }else{
        res.json({ success: false });
      }
          
        } catch (error) {
          console.error('Error storing session:', error);
          res.status(500).json({ message: 'Failed to store session' });
        }
      }
    }
  ]
  
}

export default  SesionCollect