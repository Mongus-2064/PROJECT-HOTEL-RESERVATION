import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/hotel/gethotel/${id}`);
        setHotel(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!hotel)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {/* Hero Image */}
      <div className="relative">
        <img
          loading="lazy"
          src={`http://localhost:7000/Uploads/${hotel.image}`}
          alt={hotel.name}
          className="w-full h-[400px] object-cover brightness-75"
        />
        <div className="absolute bottom-6 left-6 bg-black/50 p-4 rounded-xl shadow-xl backdrop-blur-md">
          <h1 className="text-4xl font-bold">{hotel.name}</h1>
          <p className="text-sm text-gray-300 mt-1">📍 {hotel.location}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 p-4">
        {/* Description and Why Choose Us side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Description */}
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
              Hotel Details
            </h2>
            <p className="text-gray-300 mt-4">{hotel.description}</p>
          </div>

          {/* Why Choose Us */}
          <div className="md:flex-1 bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Best location in town</li>
              <li>Affordable prices</li>
              <li>24/7 customer support</li>
              <li>Clean and comfortable rooms</li>
              <li>Easy booking process</li>
            </ul>
          </div>
        </div>

        {/* Price and Book Now button below */}
        <div className="flex flex-col items-center mt-10 space-y-4">
          <span className="text-green-400 font-bold text-2xl">
            Rs. {hotel.price} / night
          </span>
          <button
            onClick={() => navigate(`/booking/${hotel._id}`)}
            className="bg-green-500 text-white font-semibold py-3 px-10 rounded w-full hover:scale-105 hover:transition-transform hover:cursor-pointer hover:text-green-400  hover:bg-gray-900 duration-300 "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
