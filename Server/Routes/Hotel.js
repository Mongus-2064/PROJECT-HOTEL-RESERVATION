import express from "express";
import { authtoken } from "../Middlewares/token.js";
import {adminaddhotel,gethotels} from "../Controller/Hotel.js"
const router = express.Router();

router.post("/addhotel", adminaddhotel);
router.get("/gethotels", gethotels);

export default router;
