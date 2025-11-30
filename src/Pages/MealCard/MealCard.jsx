import React from "react";
import Container from "../../Shared/Container";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
const MealCard = ({ meal }) => {
  const {  image, price, title,description, category, _id , likes ,rating} = meal || {};

  console.log(meal);
  return (
  
     <div className=" bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>{description}</p>
   
    <div className="card-actions justify-between items-center my-5">
      <span className="font-bold text-lg text-green-600">Price: ${price}</span>
  <div className="card-actions justify-end">
      <div className="badge badge-outline">Like : {likes}</div>
      <div className="badge badge-outline">Rating : {rating}</div>
    </div>
    </div>
   
  </div>
<div className="m-5">
   <button className="py-2 px-3 w-full bg-green-200 font-semibold rounded-lg cursor-pointer flex  justify-center items-center gap-2"><Link to={`/meal/${_id}`}>Details </Link> <FaArrowRight /></button>
</div>
</div>
  
  );
};

export default MealCard;
