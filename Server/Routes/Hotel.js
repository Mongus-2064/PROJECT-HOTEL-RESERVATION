import express from "express";
import { authtoken } from "../Middlewares/token.js";
import {adminaddhotel,gethotels,gethotel} from "../Controller/Hotel.js"
import upload from "../Config/Multerconfig.js";
const router = express.Router();

router.post("/addhotel",upload.single("image"),adminaddhotel);
router.get("/gethotels",authtoken, gethotels);
router.get("/gethotel/:id", authtoken , gethotel);

export default router;
