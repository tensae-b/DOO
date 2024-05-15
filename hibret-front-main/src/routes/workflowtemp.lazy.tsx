import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/workflowtemp')({
  component: () => <div>Hello /workflowtemp!</div>
})