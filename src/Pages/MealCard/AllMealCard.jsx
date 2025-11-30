import React, { useState } from "react";
import { useLocation } from "react-router";
import Container from "../../Shared/Container";
import MealCard from "./MealCard";

const AllMealCard = () => {
  const location = useLocation();
  const [selectCategory, setSelectCategory] = useState("All");
  const allMeal = location.state?.allMeal || [];

  const filteredMeals =
    selectCategory === "All"
      ? allMeal
      : allMeal.filter(
          (meal) =>
            meal.category.toLowerCase() ===
            selectCategory.toLowerCase()
        );

  return (
    <Container>
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-bold">
            OUR BEST FOOD
            </h1>
        </div>
    <div>
          <select
          className="my-5 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none "
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
    </div>



        
      </div>

       




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
        {filteredMeals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
    </Container>
  );
};

export default AllMealCard;
