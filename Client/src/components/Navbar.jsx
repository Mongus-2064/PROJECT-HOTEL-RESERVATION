import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouseChimney, FaHotel } from "react-icons/fa6";
import { IoIosInformationCircle, IoMdContact } from "react-icons/io";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [selectedtab, setSelectedTab] = useState("");
  const [isopen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-900 px-4 py-2 flex  items-center justify-between border-b border-white">
        {/* LOGO */}

        <div>
          <p className="font-bold text-4xl">
            <span className="text-green-400">Nep</span>
            <span className="text-white">otel</span>
          </p>
        </div>

        {/* HAMBURGER MENU */}
        <button
          onClick={() => setIsOpen(!isopen)}
          className="custom:hidden text-white "
        >
          {isopen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>

        {/* MENU ICONS FOR DESKTOP */}

        <div className="text-white custom:flex gap-5 hidden">
          <Link
            to={""}
            onClick={() => setSelectedTab("home")}
            className={`flex items-center gap-2 border p-2 rounded-md transition-colors duration-150 hover:border-green-400 hover:text-green-400 ${
              selectedtab == "home"
                ? " border border-green-400 text-green-400"
                : "border-transparent border"
            }`}
          >
            <FaHouseChimney width={19} />
            Home
          </Link>
          <Link
            to={"/Hotels"}
            onClick={() => setSelectedTab("hotels")}
            className={`flex items-center gap-2 border p-2 rounded-md transition-colors duration-150 not-last:hover:border-green-400 hover:text-green-400 ${
              selectedtab == "hotels"
                ? " border border-green-400 text-green-400"
                : "border-transparent border"
            }`}
          >
            {" "}
            <FaHotel width={19} />
            Hotels
          </Link>
          <Link
            to={"/About"}
            onClick={() => setSelectedTab("About")}
            className={`flex items-center gap-2 border p-2 rounded-md transition-colors duration-150 hover:border-green-400 hover:text-green-400 ${
              selectedtab == "About"
                ? " border border-green-400 text-green-400"
                : "border-transparent border"
            }`}
          >
            <IoIosInformationCircle width={19} />
            About
          </Link>
          <Link
            to={"/Contact"}
            onClick={() => setSelectedTab("contact")}
            className={`flex items-center gap-2 border p-2 rounded-md transition-colors duration-150 hover:border-green-400 hover:text-green-400 ${
              selectedtab == "contact"
                ? " border border-green-400 text-green-400"
                : "border-transparent border"
            }`}
          >
            <IoMdContact width={19} />
            Contact
          </Link>
        </div>
        <div className="text-white custom:flex gap-3 hidden">
          <Link
            to={"/login"}
            className="flex items-center gap-2 border border-transparent p-2 transition-colors duration-150 rounded-md hover:border-green-400 hover:text-green-400"
          >
            <FaRegUser width={19} />
            Login
          </Link>
          <Link
            to={"/signup"}
            className="flex items-center gap-2 border p-2 rounded-md transition-colors duration-150border-green-400 text-green-400 hover:text-white"
          >
            <FaUserPlus width={19} />
            SignUp
          </Link>
        </div>
      </div>
      {/* MENU ICONS FOR MOBILE */}
      {isopen && (
        <div>
          <div className="text-white bg-gray-900 flex flex-col gap-1 items-center custom:hidden">
            <Link
              to={""}
              onClick={() => setSelectedTab("home")}
              className={`flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400 ${
                selectedtab == "home"
                  ? " border border-green-400 text-green-400"
                  : "border-transparent border"
              }`}
            >
              <FaHouseChimney width={19} />
              Home
            </Link>
            <Link
              to={"/Hotels"}
              onClick={() => setSelectedTab("hotels")}
              className={`flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400 ${
                selectedtab == "hotels"
                  ? " border border-green-400 text-green-400"
                  : "border-transparent border"
              }`}
            >
              {" "}
              <FaHotel width={19} />
              Hotels
            </Link>
            <Link
              to={"/About"}
              onClick={() => setSelectedTab("About")}
              className={`flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400 ${
                selectedtab == "About"
                  ? " border border-green-400 text-green-400"
                  : "border-transparent border"
              }`}
            >
              <IoIosInformationCircle width={19} />
              About
            </Link>
            <Link
              to={"/Contact"}
              onClick={() => setSelectedTab("contact")}
              className={`flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400 ${
                selectedtab == "contact"
                  ? " border border-green-400 text-green-400"
                  : "border-transparent border"
              }`}
            >
              <IoMdContact width={19} />
              Contact
            </Link>
          </div>
          <div className="text-white custom:hidden flex gap-5 py-3 bg-gray-900 flex-col  items-center ">
            <Link
              to={"/login"}
              className="flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400"
            >
              <FaRegUser width={19} />
              Login
            </Link>
            <Link
              to={"/signup"}
              className="flex items-center gap-2 border p-2 rounded-md hover:border-green-400 hover:text-green-400"
            >
              <FaUserPlus width={19} />
              SignUp
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
