import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyHotels = [
  {
    id: 1,
    name: "Annapurna Heights",
    location: "Pokhara",
    price: 4500,
  },
  {
    id: 2,
    name: "Everest View",
    location: "Kathmandu",
    price: 6200,
  },
  {
    id: 3,
    name: "Lumbini Garden Stay",
    location: "Lumbini",
    price: 3000,
  },
];

const Hotellist = () => {
  const handleEdit = (hotel) => {
    alert(`Editing: ${hotel.name}`);
  };

  const handleDelete = (hotel) => {
    if (window.confirm(`Delete ${hotel.name}?`)) {
      alert("Deleted (dummy)");
      // later: remove from state or call API
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Hotel List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-green-500">{hotel.name}</h3>
              <p className="text-gray-700">{hotel.location}</p>
              <p className="font-semibold text-gray-800 mt-2">₹{hotel.price}/night</p>
            </div>

            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => handleEdit(hotel)}
                className="text-orange-500 hover:text-orange-700"
              >
                <FaEdit size={20} />
              </button>
              <button
                onClick={() => handleDelete(hotel)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotellist;
