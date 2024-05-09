import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLoginMutation } from "../services/queries/userQuery";
import { useSession } from "../hooks/useSession";

export const Route = createLazyFileRoute("/login")({
  component: () => <Login />,
});

const Login = () => {
  const { setSession } = useSession();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {
    mutateAsync: performLogin,
    isError,
    error,
    isSuccess,
  } = useLoginMutation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = formData;
    const res = await performLogin({ email, password });
    setSession(res);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="w-80  h-96 gap-4  flex flex-col">
        {isError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error.message}</span>
          </div>
        )}
        {isSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">Login successful</span>
          </div>
        )}

        <h1 className="w-full h-10 font-ralewa font-bold text-3xl  text-center bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900">
          Login
        </h1>
        <h3 className="w-full   text-center font-urbanist font-normal text-base text-gray-400">
          Sign in to your account.
        </h3>
        <form
          action="#"
          method="POST"
          onSubmit={handleLogin}
          className="gap-4  flex flex-col"
        >
          <input
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="   Enter Your Email"
            className="w-full h-10 rounded-md border p-2  bg-white border-gray-300 placeholder:text-xs"
          />
          <input
            id="password"
            name="password"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Confirm New Password"
            className="w-full h-10 rounded-md border p-4  bg-white border-gray-300 placeholder:text-xs"
          />
          <div className="flex w-full h-4 items-center text-sm px-3 justify-between">
            <div className="flex gap-1 items-center m-2  ">
              <input type="checkbox" className="w-4 h-3 text-blue-800 " />
              <label className="text-sm font-medium text-gray-400">
                Remember me
              </label>
            </div>
            <a href="/forgotpassword" className="text-purple-900">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white h-10   rounded-md"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mt-2">
          Dont have an account?{" "}
          <a href="" className="text-purple-900">
            Register Now{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
