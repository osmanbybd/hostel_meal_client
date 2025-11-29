import React from "react";
import { Link } from "react-router";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {loginUser} = useAuth();


  const {register, handleSubmit} = useForm();



  const onSubmit = (data) =>{
    const email = data?.email;
    const password = data?.password;
    loginUser(email, password)
    .then(result =>{
      console.log(result?.user)
    })
  }





  return (
    <div className="hero  w-6/12  ">
      <div className="card w-full shadow-2xl ">
        <div>
          <h1 className="text-white text-3xl font-bold   py-5 mb-5 ">Log In</h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="email"
                {...register("email" ,{required:true})}
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                {...register ("password" ,{required:true})}
                placeholder="Password"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 rounded-md transition mt-5"
            >
              Login
            </button>
          </form>
        </div>
       <div className="mt-5 px-1">
        <h1 className="text-white">New Account <Link to='/signup' className="text-blue-500 ">Sign Up</Link></h1>
       </div>
      </div>
    </div>
  );
};

export default LoginForm;
