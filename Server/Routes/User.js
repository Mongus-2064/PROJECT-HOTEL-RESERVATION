import express from "express";
import { userSignup, userLogin } from "../Controller/User.js";
import { authtoken } from "../Middlewares/token.js";

const router = express.Router();

router.post("/signup", authtoken, userSignup);
router.post("/login", authtoken, userLogin);

export default router;
