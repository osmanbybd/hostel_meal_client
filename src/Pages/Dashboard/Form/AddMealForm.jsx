import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Context/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../utils/ustils";

const AddMealForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
    const {user} = useAuth()
    console.log(user)
const axiosSecure = useAxiosSecure()
  // mutation add meals in database 
  const mutation = useMutation({
    mutationFn: async (newMeal) =>{
      const {data} = await axiosSecure.post('/meals', newMeal)
      return data
    },
    onSuccess(data){
      console.log('Meal added successfully', data)
    }
  }) 
 
  const onSubmit =  async(data) => {
    const imageFile = data.image[0];
    const imageData =await imageUpload(imageFile);
    const images = imageData?.data.url;
    console.log(images);
    const finalData = {
      ...data,
      ingredients,
      image: images,
      post_time: new Date().toLocaleString(),
      rating: 0,
      likes: 0,
      reviews_count: 0,
    };
    console.log(finalData);
    reset();

    mutation.mutate(finalData)


    setIngredients([]);
  };

  // Ingredient যোগ করা
  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredientInput && !ingredients.includes(ingredientInput)) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput("");
    }
  };

  // Ingredient মুছে ফেলা
  const handleRemoveIngredient = (item) => {
    setIngredients(ingredients.filter((ing) => ing !== item));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🍛 Add New Meal
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Fill out the details below to add a new meal item to the system.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Meal Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Meal Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
          >
            <option value="">Select category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="৳ Price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Meal Image
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Ingredients */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>

          <div className="flex items-center gap-3 mb-3">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              placeholder="Add ingredient"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
            />
            <button
              onClick={handleAddIngredient}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md"
            >
              Add
            </button>
          </div>

          {/* Ingredient list */}
          <div className="flex flex-wrap gap-2">
            {ingredients.map((item, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
              >
                {item}
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </span>
            ))}
            {ingredients.length === 0 && (
              <p className="text-sm text-gray-400 italic">
                No ingredients added yet.
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write short meal description..."
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
          ></textarea>
        </div>

        {/* Distributor Info */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Distributor Name
          </label>
          <input
            {...register("distributor_name")}
            type="text"
            readOnly
            value={user?.displayName}
            className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Distributor Email
          </label>
          <input
            {...register("distributor_email")}
            type="email"
            readOnly
            value={user?.email}
            className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            className="w-full  bg-linear-to-r from-red-500 to-red-600
 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-95 transition-all"
          >
            {"\u2795"} Add Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMealForm;
