const SignupForm = () => {
  return (
    <form className="flex flex-col gap-4 pt-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-700">Sign Up</h2>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Your Name</p>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Enter Email</p>
        <input
          type="email"
          placeholder="Enter email"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Create a password</p>
        <input
          type="password"
          placeholder="Enter password"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1 text-gray-600">Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm password"
          className="bg-gray-100 rounded-md p-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" className="accent-pink-500" />
        <label className="text-sm text-gray-600">Keep me signed in</label>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-pink-500 text-white font-medium px-5 py-2 rounded-md hover:bg-pink-600 transition duration-200 shadow-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
