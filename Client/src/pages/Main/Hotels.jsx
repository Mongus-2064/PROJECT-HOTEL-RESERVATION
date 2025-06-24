import React from "react";

const Hotels = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to bg-green-800 min-h-screen overflow-y-scroll p-2 grid grid-cols-4 ">
      <div className="flex flex-col p-2 bg-gradient-to-r from-blue-400 to-gray-500 shadow-2xl rounded-md w-50 h-72">
        <img
          src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotelimage"
          className="w-50 rounded-md mb-2"
        />
        <div className="flex justify-center gap-4 flex-col ">
          <p>Himalaya hotel</p>
          <p>Kathmandu </p>
          <div className="flex gap-3">
            <strong>4800 / Night</strong>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 bg-gradient-to-r from-blue-400 to-gray-500 shadow-2xl rounded-md w-50 h-72">
        <img
          src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotelimage"
          className="w-50 rounded-md mb-2"
        />
        <div className="flex justify-center gap-4 flex-col ">
          <p>Himalaya hotel</p>
          <p>Kathmandu </p>
          <div className="flex gap-3">
            <strong>4800 / Night</strong>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
