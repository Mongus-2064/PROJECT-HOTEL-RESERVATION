import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddHotel from "./Pages/AddHotel";
import Hotellist from "./Pages/Hotellist";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-hotel" element={<AddHotel />} />
        <Route path="/admin/hotels" element={<Hotellist />} />
      </Routes>
    </div>
  );
};

export default App;
