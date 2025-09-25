import { useRef } from "react";
import axios from "axios";
import Signup from "./Signup";

const Landing = () => {
  const signupRef = useRef(null);
  const nameInputRef = useRef(null);

  const handleClick = async () => {
    console.log("button pressed");

    try {
      const res = await axios.get("/api/v1/signup");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }

    // If desktop (>=1024px) → no scroll, just focus
    if (window.innerWidth >= 1024) {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    } else {
      // Mobile/tablet → scroll into view + focus after scroll
      if (signupRef.current) {
        signupRef.current.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 600);
    }
  };

  return (
    <div className="w-full">
      {/* Desktop: side by side / Mobile: stacked */}
      <section className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-600 to-cyan-500 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        
        {/* Hero Section */}
        <div className="flex flex-col min-h-screen justify-center items-center text-center sm:items-start sm:text-left sm:w-1/2">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            Drawings<span className="text-pink-400">.io</span>
          </h1>

          <div className="mt-6 max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <p className="text-white font-medium text-lg leading-relaxed">
              Tired of messy, hard-to-track drawings? <br />
              <span className="text-pink-300 font-semibold">Drawings.io</span>{" "}
              helps you organize, manage, and streamline every drawing in one
              place.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="mt-10 w-fit bg-pink-500 hover:bg-pink-600 transition duration-300 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-400/50"
          >
            Start Now
          </button>
        </div>

        {/* Signup Section */}
        <div
          ref={signupRef}
          className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center min-h-screen lg:min-h-screen lg:bg-transparent px-6 py-6 rounded-2xl lg:rounded-none"
        >
          <div className="w-full max-w-md">
            <Signup nameInputRef={nameInputRef} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
