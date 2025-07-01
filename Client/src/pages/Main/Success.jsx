import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-green-500 text-4xl font-bold mb-4">
          ✅ Booking Confirmed!
        </h1>
        <p className="text-gray-300 mb-6">
          Thank you for booking with us. We look forward to welcoming you!
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/mybookings"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            View My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
