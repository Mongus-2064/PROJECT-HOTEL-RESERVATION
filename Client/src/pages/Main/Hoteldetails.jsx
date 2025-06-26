import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

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

  if (!hotel) return <div className="text-white text-center mt-10">Loading...</div>;

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
      <div className="max-w-6xl mx-auto mt-10 p-4 grid md:grid-cols-3 gap-10">
        {/* Hotel Info */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Hotel Details
          </h2>
          <p className="text-gray-300">{hotel.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-green-400 font-bold text-xl">
              Rs. {hotel.price} / night
            </span>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Book This Hotel</h3>

          <input
            type="date"
            className="w-full p-2 bg-gray-900 rounded text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="date"
            className="w-full p-2 bg-gray-900 rounded text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-full p-2 bg-gray-900 rounded text-white border border-gray-600 focus:outline-none"
          />
          <button className="w-full py-2 rounded bg-green-600 hover:bg-green-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
