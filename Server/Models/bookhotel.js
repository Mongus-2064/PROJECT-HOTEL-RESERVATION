import mongoose from "mongoose";

const bookingschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  people: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
});

const Bookhotel = mongoose.model("Bookhotel",bookingschema);
export default Bookhotel
