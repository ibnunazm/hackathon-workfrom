import Properties from "../models/PropertyModel.js";
import Users from "../models/UserModel.js";
import Categories from "../models/CategoryModel.js";
import Subcategories from "../models/SubcategoryModel.js";
import Time from "../models/TimeModel.js";
import path from "path";
import fs from "fs";
import Facilities from "../models/FacilitiesModel.js";
import Amenities from "../models/AmenitiesModel.js";

export const getProperties = async (req, res) => {
  try {
    let response;
    if (req.role === "owner") {
      response = await Properties.findAll({
        attributes: {
          exclude: [
            "uuid",
            "userId",
            "categoryId",
            "subcategoryId",
            "timeId",
            "amenityId",
            "facilityId",
            "propertyImage",
            "ownershipCertificate",
            "createdAt",
            "updatedAt",
          ],
        },
        include: [
          {
            model: Users,
            attributes: ["id", "name"],
            where: {
              uuid: req.userId,
            },
          },
          {
            model: Categories,
            attributes: ["id", "name"],
          },
          {
            model: Subcategories,
            attributes: ["id", "name"],
          },
          {
            model: Categories,
            attributes: ["id", "name"],
          },
          {
            model: Time,
            attributes: ["id", "name"],
          },
          {
            model: Amenities,
            attributes: ["id", "optionName"],
          },
          {
            model: Facilities,
            attributes: ["id", "optionName"],
          },
        ],
      });
    } else {
      response = await Properties.findAll({
        attributes: {
          exclude: [
            "uuid",
            "userId",
            "categoryId",
            "subcategoryId",
            "timeId",
            "amenityId",
            "facilityId",
            "propertyImage",
            "ownershipCertificate",
            "createdAt",
            "updatedAt",
          ],
        },
        include: [
          {
            model: Users,
            attributes: ["id", "name"],
          },
          {
            model: Categories,
            attributes: ["id", "name"],
          },
          {
            model: Subcategories,
            attributes: ["id", "name"],
          },
          {
            model: Categories,
            attributes: ["id", "name"],
          },
          {
            model: Time,
            attributes: ["id", "name"],
          },
          {
            model: Amenities,
            attributes: ["id", "optionName"],
          },
          {
            model: Facilities,
            attributes: ["id", "optionName"],
          },
        ],
      });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const response = await Properties.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: [
          "uuid",
          "userId",
          "categoryId",
          "subcategoryId",
          "timeId",
          "amenityId",
          "facilityId",
          "propertyImage",
          "ownershipCertificate",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          model: Users,
          attributes: ["id", "name"],
        },
        {
          model: Categories,
          attributes: ["id", "name"],
        },
        {
          model: Subcategories,
          attributes: ["id", "name"],
        },
        {
          model: Categories,
          attributes: ["id", "name"],
        },
        {
          model: Time,
          attributes: ["id", "name"],
        },
        {
          model: Amenities,
          attributes: ["id", "optionName"],
        },
        {
          model: Facilities,
          attributes: ["id", "optionName"],
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
      district,
      address,
      capacity,
      price,
      roomSize,
      latitude,
      longitude,
      isVerify,
      isReady,
      categoryId,
      subcategoryId,
      timeId,
      amenityId,
      facilityId,
    } = req.body;
  
    const user = await Users.findOne({
      where: {
        uuid: req.userId,
      },
    });
  
    const propertyImage = req.files.filePropertyImage;
    const ownershipCertificate = req.files.fileOwnershipCertificate;
  
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
  
    await Properties.create({
      name,
      province,
      city,
      address,
      district,
      capacity,
      price,
      roomSize,
      propertyImage: propertyImageFileName,
      urlImage: urlPropertyImage,
      ownershipCertificate: ownershipCertificateFileName,
      urlCertificate: urlOwnershipCertificate,
      latitude,
      longitude,
      isVerify,
      isReady,
      userId: user.id,
      categoryId,
      subcategoryId,
      timeId,
      amenityId,
      facilityId,
    });
  
    await propertyImage.mv(`./public/images/property/${propertyImageFileName}`);
    await ownershipCertificate.mv(
      `./public/images/ownershipCertificate/${ownershipCertificateFileName}`
    );  

    res.status(201).json({ message: "Property created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProperty = async (req, res) => {
    
  try {
    const property = await Properties.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Users,
          attributes: ["id", "name"],
        },
        {
          model: Categories,
          attributes: ["id", "name"],
        },
        {
          model: Subcategories,
          attributes: ["id", "name"],
        },
        {
          model: Categories,
          attributes: ["id", "name"],
        },
        {
          model: Time,
          attributes: ["id", "name"],
        },
        {
          model: Amenities,
          attributes: ["id", "optionName"],
        },
        {
          model: Facilities,
          attributes: ["id", "optionName"],
        },
      ],
    });
  
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
  
    const {
      name,
      province,
      city,
      district,
      address,
      capacity,
      price,
      roomSize,
      latitude,
      longitude,
      isVerify,
      isReady,
      categoryId,
      subcategoryId,
      timeId,
      amenityId,
      facilityId,
    } = req.body;
  
    const user = await Users.findOne({
      where: {
        uuid: req.userId,
      },
    });
  
    const propertyImage = req.files.filePropertyImage;
    const ownershipCertificate = req.files.fileOwnershipCertificate;
  
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
  
    fs.unlinkSync(`./public/images/property/${property.propertyImage}`);
    fs.unlinkSync(
      `./public/images/ownershipCertificate/${property.ownershipCertificate}`
    );
  
    await Properties.update(
      {
        name,
        province,
        city,
        address,
        district,
        capacity,
        price,
        roomSize,
        propertyImage: propertyImageFileName,
        urlImage: urlPropertyImage,
        ownershipCertificate: ownershipCertificateFileName,
        urlCertificate: urlOwnershipCertificate,
        latitude,
        longitude,
        isVerify,
        isReady,
        userId: user.id,
        categoryId,
        subcategoryId,
        timeId,
        amenityId,
        facilityId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    await propertyImage.mv(`./public/images/property/${propertyImageFileName}`);
    await ownershipCertificate.mv(
      `./public/images/ownershipCertificate/${ownershipCertificateFileName}`
    );
      
    res.status(201).json({ message: "Property updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const property = await Properties.findOne({
      where: {
        id: req.params.id,
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
        id: req.params.id,
      },
    });

    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
