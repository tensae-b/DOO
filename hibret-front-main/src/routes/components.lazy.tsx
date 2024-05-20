import { createLazyFileRoute } from '@tanstack/react-router'
import WorkflowInformation from '../components/WorkflowInformation'


export const Route = createLazyFileRoute('/components')({
  component: () => <div>
      <WorkflowInformation/>
  </div>
})