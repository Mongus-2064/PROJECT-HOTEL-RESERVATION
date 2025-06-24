import Bookhotel from "../Models/bookhotel.js";

export const bookhotels = async (req, res) => {
  try {
    const { name, people, days } = req.body;
    if (!name || !people || !days) {
      return res.status(400).json({ msg: "Fill fill up the information " });
    }
    await Bookhotel.create({
      name,
      people,
      days,
    });
    return res.status(200).json({ msg: "Reservation added successfully!", name,people,days });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};
