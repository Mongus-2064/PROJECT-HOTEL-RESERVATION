import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
        About Us
      </h1>

      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
        Welcome to <span className="text-green-400 font-semibold">Nepotel</span> — your trusted hotel booking companion across Nepal. Whether you’re traveling for business, adventure, or a peaceful getaway, we’re here to make your stay smooth, secure, and memorable.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Our Mission</h2>
        <p className="text-gray-400 text-md md:text-lg leading-relaxed">
          To simplify travel planning by connecting people to hand-picked stays that suit their budget, location, and comfort — all in just a few clicks.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Our Vision</h2>
        <p className="text-gray-400 text-md md:text-lg leading-relaxed">
          We envision a future where exploring Nepal is easier than ever, with trusted accommodations at your fingertips and every trip filled with peace of mind.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2 text-md md:text-lg">
          <li>Curated hotel listings — from affordable rooms to luxury stays</li>
          <li>Secure bookings & transparent pricing</li>
          <li>Fast and responsive customer support</li>
          <li>Clean UI designed with ease-of-use in mind</li>
        </ul>
      </div>

      <p className="text-gray-500 mt-10">
        Ready to start your journey?{" "}
        <span 
        onClick={()=> navigate("/Hotels")}
        className="text-green-400 underline cursor-pointer">
          Book now.
        </span>
      </p>
    </div>
  );
};

export default About;
