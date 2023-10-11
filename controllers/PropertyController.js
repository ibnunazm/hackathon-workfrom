import Properties from "../models/PropertyModel.js";
import Users from "../models/UserModel.js";
import path from "path";
import fs from "fs";

export const getProperties = async (req, res) => {
  try {
    const response = await Properties.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const response = await Properties.findOne({
      where: {
        uuid: req.params.id,
      },
      include: [
        {
          model: Users,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    if (!response) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProperty = async (req, res) => {
  try {
    const {
      name,
      province,
      city,
      address,
      capacity,
      price,
      description,
      latitude,
      longitude,
      isVerify,
      isReady,
    } = req.body;

    const user = await Users.findOne({
      where: {
        uuid: req.userId,
      },
    });

    const propertyImage = req.files.propertyImage;
    const ownershipCertificate = req.files.ownershipCertificate;

    const allowedTypes = [".png", ".jpg", ".jpeg"];
    const propertyExt = path.extname(propertyImage.name).toLowerCase();
    const ownershipCertificateExt = path
      .extname(ownershipCertificate.name)
      .toLowerCase();

    if (
      !allowedTypes.includes(propertyExt) ||
      !allowedTypes.includes(ownershipCertificateExt)
    ) {
      return res.status(400).json({ msg: "File type not allowed" });
    }

    const maxFileSize = 5000000;
    const propertyImageSize = propertyImage.size;
    const ownershipCertificateSize = ownershipCertificate.size;

    if (
      propertyImageSize > maxFileSize ||
      ownershipCertificateSize > maxFileSize
    ) {
      return res.status(400).json({ msg: "File size must be less than 5MB" });
    }

    const propertyImageFileName = `${propertyImage.md5}${propertyExt}`;
    const ownershipCertificateFileName = `${ownershipCertificate.md5}${ownershipCertificateExt}`;

    const urlPropertyImage = `/images/property/${propertyImage.md5}${propertyExt}`;
    const urlOwnershipCertificate = `/images/ownershipCertificate/${ownershipCertificate.md5}${ownershipCertificateExt}`;

    await propertyImage.mv(`./public/images/property/${propertyImageFileName}`);
    await ownershipCertificate.mv(
      `./public/images/ownershipCertificate/${ownershipCertificateFileName}`
    );

    await Properties.create({
      name,
      province,
      city,
      address,
      capacity,
      price,
      description,
      propertyImage: propertyImageFileName,
      urlImage: urlPropertyImage,
      ownershipCertificate: ownershipCertificateFileName,
      urlCertificate: urlOwnershipCertificate,
      latitude,
      longitude,
      isVerify,
      isReady,
      userId: user.id,
    });

    res.status(201).json({ message: "Property created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProperty = async (req, res) => {};

export const deleteProperty = async (req, res) => {
  try {
    const property = await Properties.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    const propertyImage = property.propertyImage;
    const ownershipCertificate = property.ownershipCertificate;

    fs.unlinkSync(`./public/images/property/${propertyImage}`);
    fs.unlinkSync(
      `./public/images/ownershipCertificate/${ownershipCertificate}`
    );

    await Properties.destroy({
      where: {
        uuid: req.params.id,
      },
    });

    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
