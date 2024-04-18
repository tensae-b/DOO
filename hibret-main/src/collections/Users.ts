import { CollectionConfig } from 'payload/types'
import session from 'express-session';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { MongoClient } from 'mongodb';
import payload from "payload";
// import  verifyToken from '../middleware/verify'

// async function createsession(newSession) {
//   try {
//     // Retrieve user data from Payload CMS database
//     const user = await payload.create({
//         collection: 'users', // Replace with your preferred collection name
//         data: newSession
//       });
   
// }
// }



const Users: CollectionConfig = {
  slug: 'users',
  auth:{
    tokenExpiration:60*60,

  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'email',
      type: 'text',
      required: true,
      saveToJWT:true,

    },
    {
      name: 'role',
      type: 'select',
      options: ['Chief Credit Officer', 'Section Head', 'Department Director', 'Division Manager', 'Admin'],
      required: true,
      saveToJWT:true,

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
          console.log('Received session data:', req.sessionID);

          res.cookie('auth-session', JSON.stringify(newSession), {
            httpOnly: true, // Prevent client-side JavaScript access
            secure: true,   // Only send over HTTPS (if applicable)
          });
          // const { exp, message, token, user: { id, role, email, createdAt, updatedAt, activated, loginAttempts } } = newSession;
          const date = new Date( newSession.exp); 
          await payload.create({
            collection: 'sessioncollect',
           
      data: {
        // Assuming the password field is named "password"
        id: req.sessionID,
        email: newSession.user.email,
        role: newSession.user.role,
        password:newSession.user.id,
        token:newSession.token,
        exp:date,
        user_id:newSession.user.id,

      }
          });
       
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
      path: '/setsession',
      method: 'get',
      handler: async (req, res) => {
        try {
          // Check if session data exists
          // if (!verifyToken(req, res)) {
          //   return; // Stop execution if token verification fails
          // }

          const sess=req.session.user
          const sessionID = req.sessionID;
          const user = await payload.find({ collection: 'sessioncollect', where: { id:{ equals: sessionID } } });
          if (!user) {
            res.status(400).json({ success: false, message: 'Session data not found' });
            return;
          }
    
          // Return session data in the response
          res.json({session: user});
    
        } catch (error) {
          console.error('Error retrieving session:', error);
          res.status(500).json({ success: false, message: 'Failed to retrieve session' });
        }
      }
    },
    {
      path: '/deletesession',
      method: 'post',
      handler: async (req, res) => {
        try {
          const sessionID = req.sessionID;
          const sess=req.session.user
          
          // Delete the document with the matching session ID
          await payload.delete({
            collection: "sessioncollect",
            where: { id:{ equals: sessionID } }
          });
          req.session.destroy((error) => {
            if (error) {
              console.error('Error deleting session:', error);
              res.status(500).json({ success: false, message: 'Failed to delete session' });
            } else {
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
