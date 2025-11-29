import React from "react";

const FoodTime = () => {
  return (
    <div className="overflow-x-auto w-full max-w-md mx-auto bg-black/50 backdrop-blur-md rounded-xl p-4 shadow-lg">
      <table className="table-auto w-full text-center text-white">
        <thead>
          <tr className="border-b border-white/40">
            <th className="px-4 py-2 text-lg"></th>
            <th className="px-4 py-2 text-lg">Breakfast</th>
            <th className="px-4 py-2 text-lg">Lunch</th>
            <th className="px-4 py-2 text-lg">Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/30">
            <td className="px-4 py-2 font-semibold">Time</td>
            <td className="px-4 py-2 text-sm md:text-base">08:00AM - 11:00AM</td>
            <td className="px-4 py-2 text-sm md:text-base">01:00PM - 03:00PM</td>
            <td className="px-4 py-2 text-sm md:text-base">08:00PM - 11:30PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FoodTime;
