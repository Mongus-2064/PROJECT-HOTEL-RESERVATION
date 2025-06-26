import React from "react";
import { useState } from "react";
import { api } from "../API/api.js";
import { toast, ToastContainer } from "react-toastify";

const AddHotel = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!name || !location || !description ||!price || !image) {
      toast.error("Please add all the fields");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);

      await api.post("/hotel/addhotel", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      toast.success("Hotel Added Successfully");

      setName("");
      setLocation("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.log(error);

      toast.error("Error while adding Hotel");
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <ToastContainer />
      <div className="flex items-center md:justify-center p-2  bg-gray-900 h-[calc(100vh-72px)]">
        {/* LEFT CONTAINER */}

        <div className="flex flex-col bg-gray-800 rounded-md shadow-md md:w-[40%] w-full p-4">
          <label className="text-green-400 font-semibold">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Hotel Name"
            type="text"
            className=" text-white p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <label className="text-green-400 font-semibold">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter Hotel Location"
            className=" text-white p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <label className="text-green-400 font-semibold">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter Hotel Description"
            className=" text-white p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
<label className="text-green-400 font-semibold">Location</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter Price per Night"
            className=" text-white p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <label className="text-green-400 font-semibold">
            Add Hotel Pic
          </label>
          <input
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            placeholder="Enter Hotel tax clear document"
            className=" text-white p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="mt-3 border border-green-400 text-green-400 p-2 hover:cursor-pointer hover:scale-101 transition-transform"
          >
            Add Hotel
          </button>
        </div>

        {/* RIGHT CONTAINER */}

        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Admin Guide</h2>
          <ul className="list-disc ml-5 space-y-2 text-sm leading-relaxed">
            <li>Fill in accurate hotel details – name, location, and type.</li>
            <li>Upload high-quality images (Max: 5MB, Format: JPG/PNG).</li>
            <li>Set pricing clearly and mention available room types.</li>
            <li>
              Use "Description" field to mention amenities like WiFi, Parking,
              etc.
            </li>
            <li>
              After submission, data will reflect instantly in the dashboard.
            </li>
          </ul>
          <div className="mt-4 text-xs text-gray-400">
            ⚠️ Please double-check all fields before submitting.
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddHotel;
