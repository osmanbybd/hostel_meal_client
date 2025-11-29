import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MealDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: meal = {}, isLoading } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  const { title, image, price, description, category, ingredients } = meal;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Image Section */}
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Details Card */}
      <div
        className="
        mt-8 p-7 rounded-2xl shadow-xl border 
        bg-gradient-to-br from-[#ffdde1] via-[#ee9ca7] to-[#ff758c]
        text-gray-900 
        "
      >
        {/* Title & Price */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl font-bold drop-shadow-md">{title}</h1>
          <span className="text-2xl font-bold text-[#d40036] drop-shadow">
            ${price}
          </span>
        </div>

        {/* Category */}
        <p className="text-sm mt-2 font-semibold text-[#5a0031]">
          Category: {category}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-800 leading-relaxed">
          {description}
        </p>

        {/* Ingredients */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-[#b8004c]">
            Ingredients
          </h3>

          <div className="flex flex-wrap gap-2">
            {(ingredients || []).map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-white/60 backdrop-blur-md border border-pink-200 rounded-full shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            className="
            px-7 py-2 bg-[#d40036] hover:bg-[#b8002f] 
            text-white font-semibold rounded-lg shadow-lg 
            transition-transform hover:scale-105
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
