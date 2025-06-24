import jwt from "jsonwebtoken";
export const authtoken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({ msg: "Token not Found" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server Error!" });
  }
};
