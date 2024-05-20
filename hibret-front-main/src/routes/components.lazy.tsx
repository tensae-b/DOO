import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar2 from '../components/NavBar2'


export const Route = createLazyFileRoute('/components')({
  component: () => <div>
     <Navbar2/>
  </div>
})