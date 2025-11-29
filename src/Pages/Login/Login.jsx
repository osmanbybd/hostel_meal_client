import React from "react";
import Container from "../../Shared/Container";
import LoginForm from "./LoginForm";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center bg-image relative">

      {/* Content layer (z-10 so it stays above overlay) */}
      <div className="flex w-full h-[80vh] container relative z-10">
        
       <div className="w-1/2 rounded-l-lg flex justify-center items-center text-white 
bg-white/10 backdrop-blur-md border border-none">
  <h2 className="text-4xl font-bold drop-shadow-lg">Welcome Back!</h2>
</div>

        {/* Right Side */}
        <div className="w-1/2 bg-black bg-opacity-70 rounded-r-lg flex  justify-center items-center">
          <LoginForm />
         
        </div>
      </div>
    </div>
  );
};

export default Login;
