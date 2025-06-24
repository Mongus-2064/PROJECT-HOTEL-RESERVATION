import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userSignup = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;

    if (!email || !password || !confirmpassword) {
      res
        .status(400)
        .json({ msg: "Please fill up all the fields before proceeding!" });
    }
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).json({ msg: "Credentials Already in use" });
    }
    const hashpassword = await bcrypt.hash("password", 10);

    await User.create({
      email,
      password: hashpassword,
      confirmpassword,
    });
    return res.status(200).json({ msg: "User Created Successfully!", email });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error!", error });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please fill out the email and password field" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User doesnot exists" });
    }
    const hashpassword = await bcrypt.hash("password", 10);
    const comparepassword = await bcrypt.compare("password", user.password);
    if (!comparepassword) {
      return res.status(400).json("Invalid password!");
    }
    const token = jwt.sign({ email , userId: user._id }, process.env.SECRET_KEY);

    

    return res
      .status(200)
      .json({ msg: "Logged In successfully!", token, email });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
};
