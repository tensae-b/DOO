import { CollectionConfig } from 'payload/types'
import session from 'express-session';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { MongoClient } from 'mongodb';

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
  ],
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

export default Users
