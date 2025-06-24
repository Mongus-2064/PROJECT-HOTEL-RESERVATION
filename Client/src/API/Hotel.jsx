import React from "react";
import Watchcard from "../components/Watchcard";

const Hotels = [
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel Room 1
    name: "Hotel Everest",
    location: "Kathmandu, Nepal",
    price: 3500,
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    name: "Himalayan Retreat",
    location: "Pokhara, Nepal",
    price: 4800,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    name: "Tranquil Resort",
    location: "Nagarkot, Nepal",
    price: 4200,
  },
];

const FeaturedHotels = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 px-4">
      {Hotels.map((hotel, index) => (
        <Watchcard key={index} {...hotel} />
      ))}
    </div>
  );
};

export default FeaturedHotels;
