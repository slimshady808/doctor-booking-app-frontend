import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {otpVarification} from '../../Services/UserService'
export const OTP = () => {
  const navigate=useNavigate()
  const location =useLocation()
  const queryParams=new URLSearchParams(location.search)
  const email = queryParams.get("email")
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = Array.from({ length: 4 }, (_, index) => index);
  const inputRefs = otpInputs.map(() => useRef());

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < otpInputs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const enteredOtp = otp.join('');

    if (enteredOtp.length === 4) {
      const userData={
        otp : enteredOtp,
        email
      }
      const data= await otpVarification(userData);
      console.log(data)
      if (data===200){

        navigate('/login')
      }
      console.log('Entered OTP:', enteredOtp);
    } else {
      console.log('Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl mt-16">
      <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="font-semibold text-3xl">
            <p>Email Verification{email}</p>
          </div>
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email ba**@dipainhouse.com</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                {otpInputs.map((index) => (
                  <div key={index} className="w-16 h-16">
                    <input
                      ref={inputRefs[index]}
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name={`digit${index}`}
                      id={`digit${index}`}
                      maxLength={1}
                      value={otp[index]}
                      onKeyPress={(e) => {
                        if (isNaN(Number(e.key))) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive the code?</p>
                  <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">
                    Resend!
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
