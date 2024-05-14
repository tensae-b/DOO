import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useSession } from "../hooks/useSession";


import axios from "axios";
import Cookies from 'js-cookie';
import axiosInst from '../services/api/axiosInst';

export const Route = createLazyFileRoute("/login")({
  component: () => <Login />,
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setSession } = useSession();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axiosInst.post("api/login", {
        email,
        password,
      });
  
      // Extract the token from the response headers
      const token =  response.data.data
     
  console.log( response.data.data)
      // Store the token in a cookie
      Cookies.set('token', token, { expires: 7 }); // Set the cookie to expire in 7 days
  
      // Handle other response data as needed
      const { data } = response;
      if (data.error) {
        setError(data.error);
        setSuccess("");
      } else {
        setError(""); 
        setSuccess(data.msg);
        setFormData({ email: "", password: "" });
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while logging in."); 
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-80 h-96 gap-4 flex flex-col">
        <h1 className="w-full h-10 font-ralewa font-bold text-3xl text-center bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900">
          Login
        </h1>
        <h3 className="w-full text-center font-urbanist font-normal text-base text-gray-400">
          Sign in to your account.
        </h3>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
        <form onSubmit={handleLogin} className="gap-4 flex flex-col">
          <input
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email"
            className="w-full h-10 rounded-md border p-2 bg-white border-gray-300 placeholder:text-xs"
          />
          <input
            id="password"
            name="password"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Your Password"
            className="w-full h-10 rounded-md border p-4 bg-white border-gray-300 placeholder:text-xs"
          />
          <button type="submit" className="bg-teal-500 text-white h-10 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};