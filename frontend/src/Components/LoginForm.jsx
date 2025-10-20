import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleLogin = async(e)=>{
    e.preventDefault();
    if(!email){
      toast.error('Please enter your email')
    }
    else if(!email.includes('@')){
      toast.error('Please enter a valid email')
    }
    else if(!password){
      toast.error('Please enter password')
    }
    else if(password.length<8){
      toast.error('Password should contain atleast 8 characters')
    }
    else{
      try{
        const res = await axios.post("http://localhost:3000/api/v1/login",{
          email,
          password,
          keepSignedIn
        })
        navigate('/dashboard');
        toast.success(res.data.message)
      }
      catch(error){
        toast.error(res.data.message);
      }
    }
  }

  return (
    <form className="flex flex-col gap-5 pt-6 bg-white/30 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-700">Login</h2>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Email</p>
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Password</p>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter password"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input 
        type="checkbox" 
        checked={keepSignedIn}
        onChange={()=>setKeepSignedIn(prev !== prev)}
        className="accent-pink-500" />
        <label className="text-sm text-gray-600">Keep me signed in</label>
      </div>

      <div className="flex justify-center">
        <button 
        onClick={handleLogin}
        className="bg-pink-500 text-white font-medium px-5 py-2 rounded-md hover:bg-pink-600 transition duration-200 shadow-md">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
