import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/LoanDocument/$workflowId/$stepId')({
  component: () => <div>Hello /LoanDocument/$workflowId/$stepId!</div>
})