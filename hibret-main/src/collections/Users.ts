import { CollectionConfig } from 'payload/types'

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
}

export default Users
