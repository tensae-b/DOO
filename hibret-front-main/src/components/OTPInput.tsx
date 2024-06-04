import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OTPInput: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [timer, setTimer] = useState<number>(10 * 60); // 10 minutes in seconds
  const [showResendLink, setShowResendLink] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowResendLink(true);
    }
  }, [timer]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = async () => {
    console.log(otp)
    try {
      const response = await axios.post("http://localhost:5000/api/verifyOTP", {
        code: otp,
      });

      if (response.data.msg === "Verify Successfully!") { 
        setMessage(response.data.msg); 
        // Redirect to next page
        history.push("/setnewpassword");
      } else {
        setMessage(response.data.msg); 
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error verifying OTP");
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-80 h-96 gap-4 flex flex-col">
        <h2 className="w-full h-10 font-ralewa font-bold text-3xl text-center bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900">
          Enter OTP
        </h2>
        <h5 className="w-full text-center font-urbanist font-normal text-base text-gray-400">
          Please enter the verification code we sent to the email
          example@gmail.com
        </h5>
        <div className="flex justify-center mb-4 w-80">
          <input
            className="w-48 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="otp"
            maxLength={6}
            value={otp}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white w-full text-sm px-4 py-2 rounded-lg"
        >
          Verify OTP
        </button>
        {message && <p className="text-red-500 mt-2">{message}</p>}
        {timer > 0 ? (
          <p className="text-gray-500 mt-2">Resend OTP in {formatTime(timer)}</p>
        ) : (
          <a className="text-teal-500 mt-2" href="/forgotpassword">
            Resend OTP
          </a>
        )}
      </div>
    </div>
  );
};

export default OTPInput;
