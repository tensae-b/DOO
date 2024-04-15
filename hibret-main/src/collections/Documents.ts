import { CollectionConfig } from 'payload/types'
import payload from 'payload';
import { checkIfUserCanUpdateWorkflow, updateWorkflowPath } from '../utils';


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
            type: 'textarea',
            required: true,
        },
        {
            name: 'version',
            type: 'number',
            required: true,
            defaultValue: 1,
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
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
        {
            name: 'workflowPath',
            type: 'array',
            fields: [
                {
                    name: 'role',
                    type: 'text',
                },
                {
                    name: 'status',
                    type: 'select',
                    options: [
                        { label: 'Pending', value: 'Pending' },
                        { label: 'Approved', value: 'Approved' },
                        { label: 'Declined', value: 'Declined' },
                    ],
                    defaultValue: 'Pending',
                },
            ],
        },
    ],
    access: {
        create: ({ req: { user } }) => !!user,
        read: ({ req: { user } }) => !!user,
        update: ({ req: { user }, data, id }) => {
            if (user && user.role === 'admin') {
                return true;
            }
            console.log(user, data, id);
            if (user && data.user && user.id === data.user.id && data.status === 'pending') {
                return true;
            }

            const currentWorkflowStep = data.workflowPath?.find(
                (step) => step.status === 'Pending'
            );

            if (currentWorkflowStep && currentWorkflowStep.role === user.role) {
                return true;
            }

            return false;
        },
        delete: ({ req: { user } }) => user && user.role === 'admin',
    },
    hooks: {
        beforeChange: [({ operation, data, req: { user } }) => {
            console.log('operation', operation);
            if (operation === 'create') {
                if (data.type === 'invoice') {
                    data.workflowPath = [
                        { role: 'Chief Credit Officer', status: 'Pending' },
                        { role: 'Section Head', status: 'Pending' },
                    ];
                } else if (data.type === 'contract') {
                    data.workflowPath = [
                        { role: 'Department Director', status: 'Pending' },
                        { role: 'Branch Officer', status: 'Pending' },
                        { role: 'Division Manager', status: 'Pending' },
                    ];
                } else if (data.type === 'report') {
                    data.workflowPath = [
                        { role: 'Branch Officer', status: 'Pending' },
                        { role: 'Division Manager', status: 'Pending' },
                    ];
                }
            }
        },
        ],
    },
    endpoints: [
        {
            path: '/workflow-visible',
            method: 'get',
            handler: async (req, res) => {
                const { user } = req;
                if (!user) return res.status(401).json({ message: 'Unauthorized' });

                const { docs } = await payload.find({
                    collection: 'documents',
                });

                const visibleDocs = docs.filter((doc) => {
                    const currentWorkflowStep = doc.workflowPath?.find(
                        (step) => step.status === 'Pending'
                    );
                    return currentWorkflowStep?.role === user.role;
                });
                res.status(200).json({ docs: visibleDocs });

            }
        },
        {
            path: '/update-workflow/:id',
            method: 'post',
            handler: async (req, res) => {
                const { id } = req.params;
                const { status } = req.body;
                const { user } = req;
                const role = user.role;

                if (!user) return res.status(401).json({ message: "Unauthorized" });

                try {
                    const currentDoc = await payload.findByID({
                        collection: 'documents',
                        id,
                    });


                    const canUpdateWorkflow = checkIfUserCanUpdateWorkflow(user, currentDoc, role);
                    console.log({ canUpdateWorkflow })
                    if (!canUpdateWorkflow) return res.status(403).json({ message: "Forbidden" });

                    const updatedWorkflowPath = updateWorkflowPath(currentDoc.workflowPath, role, status);
                    console.log({ updatedWorkflowPath });

                    await payload.update({
                        collection: 'documents',
                        id,
                        data: { workflowPath: updatedWorkflowPath },
                    });

                    res.status(200).json({ message: "Workflow updated successfully" });
                } catch (error) {
                    console.error('Error updating workflowPath:', error);
                    res.status(500).json({ message: 'Error updating workflowPath' });
                }
            },
        }
    ],
    timestamps: true,
};

export default DocumentCollection;
