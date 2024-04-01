import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useSession } from '../hooks/useSession'
export const Route = createRootRoute({
    component: () => {
        return <App />
    }
    ,
})
function App() {
    const { session, deleteSession } = useSession();
    return (
        <>
            <div className="flex justify-around">
                <div className="p-2 flex gap-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' '}


                </div>

                <div className="p-2">
                    {session ? (
                        <div className='flex gap-4'>
                            <button
                                onClick={() => {
                                    deleteSession();
                                }}
                            >
                                Logout
                            </button>
                            <Link to="/profile" className="[&.active]:font-bold">
                                Profile
                            </Link>

                            <Link to="/documents" className="[&.active]:font-bold">
                                New Document
                            </Link>
                            <Link to="/my-documents" className="[&.active]:font-bold">
                                My Documents
                            </Link>

                            <Link to="/notification" className="[&.active]:font-bold">
                                Notification
                            </Link>
                        </div>
                    ) : (
                        <div className='flex gap-2'>
                            <Link to="/login" className="[&.active]:font-bold">Login</Link>

                            <Link to="/register" className="[&.active]:font-bold">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}