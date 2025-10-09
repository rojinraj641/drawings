import SignupForm from "../Components/SignupForm";
import LoginForm from "../Components/LoginForm";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

const Signup = ({nameInputRef}) => {
  const [isSigned, setIsSigned] = useState(false);

  return (
    
      <div className="flex flex-col bg-white/30 rounded-2xl shadow-xl p-6 w-full max-w-lg mx-auto">
        <Toaster position="top-right" reverseOrder={false} />
      <div className="flex w-full justify-center gap-4 mb-6">
        <button
          onClick={() => setIsSigned(false)}
          className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
            !isSigned
              ? "bg-pink-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsSigned(true)}
          className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
            isSigned
              ? "bg-pink-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Login
        </button>
      </div>

      <div className="w-full">
        {!isSigned && <SignupForm nameRef={nameInputRef}/>}
        {isSigned && <LoginForm />}
      </div>
    </div>
  );
};

export default Signup;
