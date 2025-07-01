import { create } from "zustand";

const Bookingdetails = create((set) => ({
  bookingdata: null,
  setBookingData: (data) => set({ bookingdata: data }),
  clearbookingdata: () => set({ bookingdata: null }),
}));

export default Bookingdetails;
