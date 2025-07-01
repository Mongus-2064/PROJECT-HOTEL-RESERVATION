import { create } from "zustand";

const Bookingdetails = create((set) => ({
  bookingdata: null, // current booking (for success page)
  bookingsList: [], // all bookings stored in this session

  setBookingData: (data) =>
    set((state) => ({
      bookingdata: data,
      bookingsList: [...state.bookingsList, data], // add new booking to list
    })),

  clearbookingdata: () => set({ bookingdata: null }),
}));

export default Bookingdetails;
