import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  req.userId = user.uuid;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.role !== "admin") {
    return res.status(404).json({ message: "Access denied" });
  }
  next();
};
