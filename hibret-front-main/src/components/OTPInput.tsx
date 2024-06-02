import React, { useState, ChangeEvent, KeyboardEvent } from "react";

const OTPInput: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = () => {
    alert(`Entered OTP is ${otp.join("")}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="w-80 h-96 gap-4 flex flex-col">
    
        <h2 className="w-full h-10 font-ralewa font-bold text-3xl text-center bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900">
          Enter OTP
        </h2>
        <h5 className="w-full text-center font-urbanist font-normal text-base text-gray-400">
        Please enter the verification code we sent to the email example@gmail.com
        </h5>
    

      <div className="flex space-x-2 mb-4 w-80">
        {otp.map((data, index) => (
          <input
            key={index}
            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="otp"
            maxLength={1}
            value={data}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target, index)
            }
            onFocus={(e: ChangeEvent<HTMLInputElement>) => e.target.select()}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-teal-500 text-white w-full text-sm px-4 py-2 rounded-lg"
      >
        Verify OTP
      </button>
      </div>
    </div>
  );
};

export default OTPInput;
