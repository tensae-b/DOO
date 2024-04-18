import { CollectionConfig } from 'payload/types';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { MongoClient } from 'mongodb';

const SesionCollect: CollectionConfig = {
  slug: 'sessioncollect',
  auth: true,
  admin: {
    useAsTitle: 'id',
  },
   // Nested group to represent user data
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'email',
          type: 'text',
        // Make email required for validation
        },
        {
          name: 'exp',
          type: 'date',
        // Make email required for validation
        },
        {
          name: 'token',
          type: 'text',
        // Make email required for validation
        },
        {
          name: 'user_id',
          type: 'text',
        // Make email required for validation
        },
        
      ],
   
 
  access: {
    create: ({ req: { user } }) => !!user,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => user && user.role === 'user',
    // delete: ()=>true,
  },
  
};

export default SesionCollect;
