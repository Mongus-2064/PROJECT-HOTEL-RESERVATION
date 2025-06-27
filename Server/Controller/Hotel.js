import Hotel from "../Models/Hotel.js";
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

export const adminaddhotel = async (req, res) => {
  try {
    const { name, location, description, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ msg: "Please upload an image" });
    }

    if (!name || !location || !description || !price) {
      return res.status(400).json({ msg: "Please fill out all the information" });
    }

    // Paths for original and compressed images
    const filePath = req.file.path; // example: 'Uploads/1685678901234-image.jpg'
    const compressedFileName = "compressed-" + req.file.filename;
    const compressedFilePath = path.join(path.dirname(filePath), compressedFileName);

    // Resize & compress image using sharp
    await sharp(filePath)
      .resize(800)              // width 800px, height auto
      .jpeg({ quality: 70 })    // compress to 70% quality JPEG
      .toFile(compressedFilePath);

    // Delete original uploaded large image to save space
    await fs.unlink(filePath);

    // Check if hotel already exists
    const hotelExists = await Hotel.findOne({ name, location });
    if (hotelExists) {
      // Delete compressed image if hotel exists to avoid orphan file
      await fs.unlink(compressedFilePath);
      return res.status(400).json({ msg: "Hotel already registered!" });
    }

    // Save hotel with compressed image filename
    await Hotel.create({
      name,
      location,
      description,
      price,
      image: compressedFileName, // save compressed image filename
    });

    return res.status(200).json({ msg: "Hotel registered Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const gethotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json({ hotels });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error", error });
  }
};

export const gethotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(400).json({ error: "Hotel does not exist" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
