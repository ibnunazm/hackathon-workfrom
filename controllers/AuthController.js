import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordValid = await argon2.verify(user.password, req.body.password);
    if (!passwordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    const phoneNumber = user.phoneNumber;
    res.status(200).json({ uuid, name, email, phoneNumber, role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserLogin = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = await Users.findOne({
    attributes: { exclude: ["id", "password"] },
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Logout successful" });
  });
};
