import React, { useEffect, useState } from "react";
import api from "..//..//API/api.js";
import { Link } from "react-router-dom";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const photoUrl = "http://localhost:7000/Uploads";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await api.get("/hotel/gethotels");
        console.log(res.data);
        setHotels(res.data.Hotles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 bg-gray-900 p-2 ">
      {Array.isArray(hotels) &&
        hotels?.map((h, i) => (
          <Link to={`/details/${h._id}`}>
           <div
            key={h._id}
            className="bg-gray-700 text-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto hover:shadow-2xl  mb-4 hover:cursor-pointer"
          >
            <img
              src={`${photoUrl}/${h.image}`}
              alt={h.name}
              className="rounded-lg w-full h-48 object-cover mb-4 hover:scale-105 transition-transform"
            />
            <h2 className="text-xl font-bold mb-1">{h.name}</h2>
            <p className="text-sm mb-1 text-white">📍 {h.location}</p>
            <p className="text-white text-sm mb-2 line-clamp-2">
              {h.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-400">
                Rs. {h.price} / night
              </span>
              <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition text-sm">
                Book Now
              </button>
            </div>
          </div>
          </Link>
         
        ))}
    </div>
  );
};

export default Hotels;
