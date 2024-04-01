import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: () => <div>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1></div>
})