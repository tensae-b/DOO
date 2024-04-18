import { createLazyFileRoute } from '@tanstack/react-router'
import { useGetDocumentQuery } from '../services/queries/documentQuery'
import { useSession } from '../hooks/useSession'
export const Route = createLazyFileRoute('/my-documents')({
    component: () => <MyDocuments />
})

function MyDocuments() {
    const {  getSession} = useSession();
    const { data, isLoading, isError } = useGetDocumentQuery(getSession()?.user.id!);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching documents</div>
    const doc = data.docs
    return <div>
        {doc && doc?.map((doc) => (
            <Card key={doc.id} doc={doc} />
        ))}
    </div>
}

const Card = ({ doc }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-2">Title:{doc.title}</h2>
            <p className="text-gray-600 mb-4">{doc.content}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{doc.type}</span>
                <span className="text-sm text-gray-500">{doc.status}</span>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Workflow Path</h3>
                <ul>
                    {doc.workflowPath.map((step, index) => (
                        <li key={index} className="text-sm text-gray-600 mb-1">
                            {step.role} - {step.status}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                <p>Created At: {doc.createdAt}</p>
                <p>Updated At: {doc.updatedAt}</p>
            </div>
        </div>
    );
};
