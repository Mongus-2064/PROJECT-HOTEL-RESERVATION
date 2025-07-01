import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../API/api";
import Bookingdetails from "../../Store/Bookingdetalis.js";

const BookingForm = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const setBookingData = Bookingdetails((state) => state.setBookingData);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/hotel/gethotel/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!hotel) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (!agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const bookingData = {
      hotelId: hotel._id,
      name: hotel.name,
      location: hotel.location,
      price: hotel.price,
      guests: guests,
      checkIn,
      checkOut,
      paymentMethod: "Cash on Hotel",
      bookedAt: new Date().toISOString(),
    };
    setBookingData(bookingData);
    navigate("/success");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-gray-900 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Book Your Stay</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hotel Name */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Hotel Name
            </label>
            <input
              type="text"
              value={hotel.name}
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Location
            </label>
            <input
              type="text"
              value={hotel.location}
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Price (Per Night)
            </label>
            <input
              type="text"
              value={`Rs. ${hotel.price}`}
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Check-In */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Check-Out */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-2 text-gray-400 font-medium">
              Payment Method
            </label>
            <input
              type="text"
              value="Cash on Hotel"
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Agree Terms */}
          <div className="flex items-center space-x-2">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="h-5 w-5 rounded border-gray-600 bg-gray-800 text-green-500 focus:ring-green-500"
              required
            />
            <label
              htmlFor="agree"
              className="text-gray-400 text-sm select-none"
            >
              I agree to the{" "}
              <a href="/terms" className="underline text-green-400">
                terms and conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
