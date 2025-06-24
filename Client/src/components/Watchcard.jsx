import React from "react";

const HotelCard = ({ image, name, location, price }) => {
  return (
     <div className="bg-gray-700 rounded-xl shadow-lg overflow-hidden w-[90%] md:w-[300px] hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4 text-gray-800">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <p className="text-sm text-white">{location}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-semibold text-green-500">Rs. {price} / night</span>
          <button className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-500 text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
