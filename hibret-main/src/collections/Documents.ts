import { CollectionConfig } from 'payload/types'

const DocumentCollection: CollectionConfig = {
    slug: 'documents',
    labels: {
        singular: 'Document',
        plural: 'Documents',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Invoice', value: 'invoice' },
                { label: 'Contract', value: 'contract' },
                { label: 'Report', value: 'report' },
            ],
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'version',
            type: 'number',
            required: true,
            defaultValue: 1,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
                { label: 'Declined', value: 'declined' },
            ],
            defaultValue: 'pending',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
            hooks: {
                beforeChange: [({ req, operation, data }) => {
                    if (operation === 'update' && req.user && req.user.role !== 'admin') {
                        throw new Error('You do not have permission to change the document status.');
                    }
                }],
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
    ],
    access: {
        create: ({ req: { user } }) => !!user,
        read: ({ req: { user } }) => !!user,
        update: ({
            req: { user } }) => user && user.role === 'admin',
        delete: ({ req: { user } }) => user && user.role === 'admin',
    },
    hooks: {
        beforeChange: [({ operation, data, req }) => {

            if (operation === 'create') {
                data.createdAt = new Date();
            }
            if (operation === 'update') {
                data.updatedAt = new Date();
                data.version += 1;
            }
        }],
    },
    timestamps: false,
};

export default DocumentCollection;  