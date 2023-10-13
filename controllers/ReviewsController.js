import Reviews from "../models/ReviewModel.js";
import Users from "../models/UserModel.js";
import Properties from "../models/PropertyModel.js";

export const getReviews = async (req, res) => {
  try {
    const userId = req.params.userId;
    const reviews = await Reviews.findAll({
      attributes: {
        exclude: ["uuid", "userId", "propertyId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Users,
          attributes: ["id", "name"],
        },
        {
          model: Properties,
          attributes: ["id", "name"],
        },
      ],
    });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const reviews = await Reviews.findOne({
        attributes: {
            exclude: ["uuid", "userId", "propertyId", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: Users,
              attributes: ["id", "name"],
            },
            {
              model: Properties,
              attributes: ["id", "name"],
            },
          ],
      where: {
        id: req.params.id,
      },
    });
    if (!reviews) {
      return res.status(404).json({ message: "Reviews not found" });
    }
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  const { userId, propertyId, rating, comment } = req.body;
  try {
    await Reviews.create({
      userId,
      propertyId,
      rating,
      comment,
    });
    return res.status(201).json({ message: "Reviews created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  const { userId, propertyId, rating, comment } = req.body;
  try {
    const reviews = await Reviews.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!reviews) {
      return res.status(404).json({ message: "Reviews not found" });
    }
    await Reviews.update(
      {
        userId,
        propertyId,
        rating,
        comment,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({ message: "Reviews updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const reviews = await Reviews.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!reviews) {
      return res.status(404).json({ message: "Reviews not found" });
    }
    await Reviews.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ message: "Reviews deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
