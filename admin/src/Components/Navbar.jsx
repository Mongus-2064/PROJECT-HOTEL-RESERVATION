import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass ="px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const activeClass = "bg-green-400 text-gray-900";
  const inactiveClass = "text-orange-400 hover:bg-green-400 hover:text-gray-900";

  return (
    <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between shadow-lg">
      <h1 className="text-2xl font-bold text-green-400">Admin Panel</h1>
      <div className="flex space-x-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/add-hotel"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Add Hotel
        </NavLink>
        <NavLink
          to="/admin/hotels"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Hotel List
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
