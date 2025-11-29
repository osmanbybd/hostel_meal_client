// MealCategory.jsx
import React from "react";
import Container from "../../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MealCard from "./MealCard";

const MealCategory = () => {
  const axiosSecure = useAxiosSecure();

  const { data: hostelMeal = [], isLoading } = useQuery({
    queryKey: ["hostelMeal"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });


//   console.log(hostelMeal);

  if (isLoading) return <p>Loading...</p>;

  return (
<Container>
  <div className="mt-6 my-6">
   <div className="m-12 text-center text-4xl font-semibold">
     <h1>DAILY MEAL</h1>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {hostelMeal.map((meal) => (
        <MealCard key={meal._id} meal={meal} />
      ))}
   </div>
</div>
</Container>
 
  );
};

export default MealCategory;
