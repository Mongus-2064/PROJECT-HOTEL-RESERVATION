import React, { createContext, useState, useContext } from "react";

export const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingdetails, setBookingDetails] = useState([]);
  return (
    <BookingContext.Provider value={{ bookingdetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};
