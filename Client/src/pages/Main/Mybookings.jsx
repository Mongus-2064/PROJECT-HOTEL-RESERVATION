import React from "react";
import Bookingdetails from "../../Store/Bookingdetalis.js";

const Mybookings = () => {
  const bookingsList = Bookingdetails((state) => state.bookingsList);

  if (bookingsList.length === 0) {
    return <p className="text-center mt-10 text-white">No bookings yet.</p>;
  }

  return (
    <div className="bg-gray-900 h-[calc(100vh-59px)] overflow-y-scroll">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          My Bookings
        </h1>

        <div className="flex flex-col space-y-6">
          {bookingsList.map((booking, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-md text-white flex flex-col md:flex-row md:items-center md:space-x-6"
            >
              <div className="w-full md:w-48 h-32 bg-gray-700 rounded-md mb-4 md:mb-0"></div>

              {/* Booking details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{booking.name}</h2>
                <p>Location: {booking.location}</p>
                <p>
                  Check-in:{" "}
                  <span className="font-medium">{booking.checkIn}</span>
                </p>
                <p>
                  Check-out:{" "}
                  <span className="font-medium">{booking.checkOut}</span>
                </p>
                <p>Guests: {booking.guests}</p>
                <p className="font-semibold text-green-400">
                  Price: Rs. {booking.price}
                </p>
                <p>Status: Confirmed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mybookings;
