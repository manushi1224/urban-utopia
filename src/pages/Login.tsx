import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName) return alert("Please enter your name");
    dispatch({ type: "user/login", payload: userName });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)] p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Login
        </h2>
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-900 transition ease-in-out duration-150"
            placeholder="Email address"
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-900 transition ease-in-out duration-150"
            placeholder="Your Name"
          />
          <input
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-900 transition ease-in-out duration-150"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-secondary-900 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-red-400 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
