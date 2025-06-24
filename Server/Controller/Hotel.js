import Hotel from "../Models/Hotel.js";

export const adminaddhotel = async (req, res) => {
  try {
    const { name, location, description, taxcleardocument } = req.body;
    if (!name || !location || !description || !taxcleardocument) {
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
      taxcleardocument,
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
    return res.status(200).json( {Hotles: hotles} );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error", error });
  }
};
