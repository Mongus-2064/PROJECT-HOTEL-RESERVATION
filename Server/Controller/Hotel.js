import Hotel from "../Models/Hotel.js";

export const adminaddhotel = async (req, res) => {
  try {
    const { name, location, description, price } = req.body;
    const image = req.file.filename;
    if (!name || !location || !description || !image || !price) {
      return res
        .status(400)
        .json({ msg: "Please fill out all the information" });
    }

    const hotel = await Hotel.findOne({ name, location });
    if (hotel) {
      return res.status(400).json({ msg: "Hotel already registered!" });
    }

    await Hotel.create({
      name,
      location,
      description,
      price,
      image,
    });
    return res.status(200).json({ msg: "Hotel registered Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const gethotels = async (req, res) => {
  try {
    const hotles = await Hotel.find();
    return res.status(200).json({ Hotles: hotles });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error", error });
  }
};

export const gethotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(400).json({ error: "Hotel doesnot exists" });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
