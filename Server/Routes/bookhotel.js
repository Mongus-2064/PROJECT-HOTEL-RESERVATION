import express from "express";
import { bookhotels } from "../Controller/bookhotel.js";
const router = express.Router();

router.post("/reservehotel",bookhotels);

export default router