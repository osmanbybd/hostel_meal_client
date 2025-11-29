// Banner.jsx
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FoodTime from "./FoodItemTime/FoodTime";

const Banner = () => {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {/* ---------------- Breakfast Slide ---------------- */}
        <SwiperSlide className="breakfast relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4 z-20">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
              Start Your Day with Fresh Breakfast 🍳
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              From crispy toast to warm pancakes — our hostel breakfast keeps
              you full and focused!
            </p>
            <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
              Explore Breakfast
            </button>
          </div>
        </SwiperSlide>

        {/* ---------------- Lunch Slide ---------------- */}
        <SwiperSlide className="lunch relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4 z-20">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
              Enjoy a Healthy & Tasty Lunch 🍛
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Refill your energy with our nutritious hostel lunch — served fresh
              and full of flavor every day!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
              Explore Lunch
            </button>
          </div>
        </SwiperSlide>

        {/* ---------------- Dinner Slide ---------------- */}
        <SwiperSlide className="dinner relative">
           <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4 z-20">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
              End Your Day with Delicious Dinner 🍲
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              A comforting dinner that feels like home — balanced, flavorful, and
              made with love for our hostel family.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
              Explore Dinner
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

     {/* 🧾 Fixed Table inside Banner */}
<div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 text-center z-30 pointer-events-none">
  <FoodTime />
</div>

    </div>
  );
};

export default Banner;
