import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import db from "./Database/db.js";
import Authroute from "./Routes/User.js"
import Hotelroute from "./Routes/Hotel.js"
import Bookingroute from "./Routes/bookhotel.js"

dotenv.config(); // configuring dotenv
const server = express(); //Initializing Express

server.use(express.json()); // JSON Middleware
server.use(cors({
  origin: "*",
  credentials: true
}))

//Routes
server.use("/auth",Authroute);
server.use("/hotel",Hotelroute)
server.use("/user",Bookingroute)

const PORT = process.env.PORT;
server.listen(PORT, () => {
  // Listening server on a certain PORT
  console.log(`Server Listening on PORT ${PORT}`);
});

db(); // Calling db function to connect to database!
