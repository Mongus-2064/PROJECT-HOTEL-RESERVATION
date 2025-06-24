import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-screen w-full  flex items-center  md:justify-center flex-col bg-gray-900 ">
        <p className="mb-4 md:mt-0 mt-4 md:px-0 px-1 text-lg text-center font-bold text-green-400">
          
          <span className="text-green-400">"Login</span> and
          start exploring.”
        </p>

        <div className=" md:w-[60%] md:h-[80%] h-[40%] w-[90%]  flex items-center md:justify-around bg-gray-800 rounded-md shadow-lg md:flex-row flex-col ">
          {/* LEFT CONTAINER */}
          <div className="border-r border-gray-400 px-4  ">
            <p className="custom:flex hidden flex-col text-[50px] text-green-400 font-bold ">
              <span>"We</span> <span>Make Travel</span>{" "}
              <span>
                Fun.<span>"</span>
              </span>
            </p>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="flex flex-col p-4 w-full">
            <label className="text-green-400 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter-Email"
              className="mb-2 bg-gray-600 shadow-md p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <label className="text-green-400 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter-Password"
              className="mb-2 bg-gray-600 p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
           
            <button className="bg-green-400 text-black font-semibold mt-2 hover:cursor-pointer rounded-md border border-transparent p-2 hover:border-green-400 hover:bg-transparent hover:text-white">
              Login
            </button>
            <p 
            onClick={()=> navigate("/signup")}
            className="text-green-400 text-center mt-4 font-semibold hover:cursor-pointer hover:scale-105 transition-transform">No Account , Register Here!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
