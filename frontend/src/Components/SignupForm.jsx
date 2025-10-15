import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ nameRef }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length == 0) {
      toast.error('Enter a valid username');
    }
    else if (email.length == 0 || !email.includes('@')) {
      toast.error('Enter a valid email');
    }
    else if (password.length == 0) {
      toast.error('Password section cannot be empty');
    }
    else if (password.length < 8) {
      toast.error('Password should contain atleast 8 characters')
    }
    else if (confirmPassword.length == 0) {
      toast.error('Please confirm the password to continue');
    }
    else if (password !== confirmPassword) {
      toast.error(`Confirm password doesn't match. Please check`)
    }
    else {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/signup", {
          username,
          email,
          password,
          keepSignedIn
        })
        navigate('/dashboard');
        console.log(response.data.message);
      }
      catch (error) {
        console.log(`Error message:${error.message}`);
      }
    }
  }
  return (
    <form className="flex flex-col gap-4 pt-6 bg-white/50 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-700">Sign Up</h2>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Your Name</p>
        <input
          ref={nameRef}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Create a password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Confirm Password</p>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={keepSignedIn}
          onChange={() => setKeepSignedIn(prev => !prev)}
          className="accent-pink-500" />
        <label className="text-sm text-gray-600">Keep me signed in</label>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-pink-500 text-white font-medium px-5 py-2 rounded-md hover:bg-pink-600 transition duration-200 shadow-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
