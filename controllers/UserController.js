import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOwners = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ["password"] },
      where: {
        role: "owner",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ["password"] },
      where: {
        role: "customer",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: { exclude: ["password"] },
      where: {
        uuid: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword, role } =
    req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords dont match" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOwner = async (req, res) => {
    const { name, email, phoneNumber, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords dont match" });
    }
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
        name,
        email,
        phoneNumber,
        password: hashPassword,
        role: "owner"
        });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCustomer = async (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords dont match" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name,
      email,
      phoneNumber,
      password: hashPassword,
      role: "customer",
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { name, email, phoneNumber, password, confirmPassword, role } =
    req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  try {
    await Users.update(
      {
        name,
        email,
        phoneNumber,
        password: hashPassword,
        role,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  try {
    await Users.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
