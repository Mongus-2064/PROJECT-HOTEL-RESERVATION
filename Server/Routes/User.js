import express from "express";
import { userSignup, userLogin } from "../Controller/User.js";
import { authtoken } from "../Middlewares/token.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

export default router;
