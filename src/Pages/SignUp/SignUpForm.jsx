import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/useAuth";
import { imageUpload } from "../../utils/ustils";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const { CreateNewUser, updateProfileInfo } = useAuth();
  const { register, handleSubmit } = useForm();
  const [uploadImage, setUpLoadImage] = useState("");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const email = data?.email;
    const password = data?.password;
    const name = data?.name;
    CreateNewUser(email, password).then(async (result) => {
      console.log(result?.user);

      const updateUser = {
        displayName: name,
        photoURL: uploadImage,
      };
      updateProfileInfo(updateUser)
        .then((result) => {
          navigate("/");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleImageUpload = async (e) => {
    const imageData = e.target.files[0];
    console.log(imageData);
    const { data } = await imageUpload(imageData);
    console.log(data?.url);
    setUpLoadImage(data?.url);
  };

  return (
    <div className="hero  w-6/12  ">
      <div className="card w-full shadow-2xl ">
        <div>
          <h1 className="text-white text-2xl font-bold   py-5 mb-5 ">
            {" "}
            Sign Up
          </h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                onChange={handleImageUpload}
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-lime-400 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 rounded-md transition mt-5"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
