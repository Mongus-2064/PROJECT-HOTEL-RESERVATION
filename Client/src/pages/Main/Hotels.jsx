import React, { useEffect, useState } from "react";
import api from "..//..//API/api.js";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await api.get("/hotel/gethotels");
        console.log(res.data);
        setHotels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return <div>
    {Array.isArray(hotels) && hotels?.map((h,i)=>(
      <div>
        <p>{h.Hotles.name}</p>
      </div>
    ))}
  </div>;
};

export default Hotels;
