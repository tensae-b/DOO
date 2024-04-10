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
          // await payload.insert({
          //   collection: 'users', // Replace with your preferred collection name
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
    }, 
    {
      path: '/getsession',
      method: 'get',
      handler: async (req, res) => {
        try {
          // Check if session data exists
          if (!req.session || !req.session.user) {
            res.status(400).json({ success: false, message: 'Session data not found' });
            return;
          }
    
          // Return session data in the response
          res.json({session: req.session.user });
    
        } catch (error) {
          console.error('Error retrieving session:', error);
          res.status(500).json({ success: false, message: 'Failed to retrieve session' });
        }
      }
    },
    {
      path: '/deletesession',
      method: 'post', // Change method to 'post' or 'delete' based on your preference
      handler: async (req, res) => {
        try {
          // Destroy the session
          req.session.destroy((error) => {
            if (error) {
              console.error('Error deleting session:', error);
              res.status(500).json({ success: false, message: 'Failed to delete session' });
            } else {
              // Clear the session cookie
              res.clearCookie('auth-session');
              res.json({ success: true, message: 'Session deleted successfully' });
            }
          });
        } catch (error) {
          console.error('Error deleting session:', error);
          res.status(500).json({ success: false, message: 'Failed to delete session' });
        }
      }
    }
    
    
    
  ]
  
}

export default Users
