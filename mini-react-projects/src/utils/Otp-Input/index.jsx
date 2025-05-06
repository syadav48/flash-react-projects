import React, { useRef, useState } from "react";

function OtpInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    setOtp(newOtp);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      inputRefs.current[index - 1].focus();
      setOtp(newOtp);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">OTP Verification</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the 6-digit OTP you have received
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              className="w-12 h-12 border-2 border-gray-300 rounded-md text-center text-xl focus:border-blue-500 focus:outline-none text-black"
              type="text"
              maxLength={1}
              value={digit}
              ref={(ref) => (inputRefs.current[index] = ref)}
              onChange={(e) => handleChange(index, e.target.value)}
              autoFocus={index === 0}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OtpInput;