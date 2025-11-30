// MealCategory.jsx
import React from "react";
import Container from "../../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MealCard from "./MealCard";
import { Link, useNavigate } from "react-router";

const MealCategory = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const { data: hostelMeal = [], isLoading } = useQuery({
    queryKey: ["hostelMeal"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });


//   console.log(hostelMeal);

  if (isLoading) return <p>Loading...</p>;

  const limitedMeals = hostelMeal.slice(0, 4);

  const allHostelMeals =() =>{
    navigate('/allMeals',{state:{allMeal :hostelMeal}})

  }

  return (
<Container>
  <div className="mt-6 my-6">
   <div className="mt-12 text-center text-4xl font-semibold">
     <h1>DAILY MEAL</h1>
   </div>
   <div className="flex justify-center items-center mb-12 mt-3">
    <div className="w-24 h-1 bg-red-500"></div>
    <div className="w-24 h-1 bg-green-500"></div>
    <div className="w-24 h-1 bg-blue-500"></div>
    </div>
    <div className="flex justify-between py-7">
      <div>
        <button>category</button>
      </div>
      <div>
        <button onClick={allHostelMeals}  className="btn py-3 px-4 bg-green-300" >All Items</button>
      </div>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {limitedMeals.map((meal) => (
        <MealCard key={meal._id} meal={meal} />
      ))}
   </div>
</div>
</Container>
 
  );
};

export default MealCategory;
