import jwt from "jsonwebtoken";

export const authtoken = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(400).json({ msg: "Token not found" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(400).json({ msg: "Token not found" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid or expired token!" });
  }
};
