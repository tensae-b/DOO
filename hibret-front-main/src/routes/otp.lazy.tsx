import { createLazyFileRoute } from '@tanstack/react-router'
import OTPInput from '../components/OTPInput'

export const Route = createLazyFileRoute('/otp')({
  component: OTPInput,
})