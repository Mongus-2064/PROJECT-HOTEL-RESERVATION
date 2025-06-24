import React, { useEffect, useState } from "react";
import { api } from "../API/api.js";

const Dashboard = () => {
  const [numberofhotels, setNumberOfHotels] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await api.get("/hotel/gethotels");
        console.log(res.data)
        setNumberOfHotels(res.data.Hotles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

      <div className="max-w-sm bg-green-400 text-gray-900 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Total Hotels</h3>
        <p className="text-5xl font-extrabold">{numberofhotels.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
