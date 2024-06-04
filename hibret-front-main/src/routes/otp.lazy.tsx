import { createLazyFileRoute } from '@tanstack/react-router'
import OTPInput from '../components/OTPInput'
import { useEffect } from 'react';
import Logo from '../components/logo';

export const Route = createLazyFileRoute('/otp')({
  component: () => {
    useEffect(() => {
      // Disable the back button to prevent going back to the forgot password page
      window.history.pushState(null, "", window.location.href);
      const handlePopState = (event: PopStateEvent) => {
        window.history.pushState(null, "", window.location.href);
      };
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);

    return <div>
      <Logo/>
      <OTPInput />
    </div> ;
  }
});
