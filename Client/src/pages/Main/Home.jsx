import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import FeaturedHotels from "../../API/Hotel.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[calc(100vh-59px)] bg-gray-900 flex md:py-0 py-2  items-center flex-col px-4 overflow-y-scroll ">
        {/* BOLD TEXT */}
        <div className="mt-4 mb-2">
          <p className="text-green-400 text-[3rem] font-bold transition-normal duration-150">
            "Worry less about <span className="text-white">stays</span>, travel
            more with ease."
          </p>
        </div>
        {/* SUB BOLD TEXT */}
        <div className="md:mt-6 mt-2">
          <p className="text-gray-600 font-semibold flex flex-col px:2 md:px-6">
            From budget-friendly rooms to luxury getaways, we help you find the
            right stay in just a few clicks. Focus on exploring new placeswhile
            we handle your comfort and convenienceWhether you're travelingsolo,
            with family, or on a businesstrip, our curated listings ensure you
            get the best options at the best value. Book quickly, stay
            comfortably, and make every journey a smooth experience from start
            to finish.
          </p>
        </div>
        {/* START YOUR JOURNEY TODAY BUTTON */}
        <div className="mt-3 w-full flex justify-center">
          <button 
          onClick={()=> navigate("/login")}
          className="  rounded-sm font-semibold p-2 text-xl bg-green-400 hover:cursor-pointer hover:scale-105 border border-transparent mt-4 w-[90%] md:w-[80%] hover:rounded-md transition-all hover:bg-transparent hover:text-white hover:border-green-400">
            <span className="flex items-center justify-center gap-1">
              Start Your Journey <FaArrowCircleRight />
            </span>
          </button>
        </div>

        {/* FEATURED HOTELS */}

        <div className="md:mt-8 mt-4">
          <p className="md:text-[3rem] text-[2rem] font-semibold text-white">Featured Hotels</p>
        </div>
<FeaturedHotels/>
      </div>
    </div>
  );
};

export default Home;
