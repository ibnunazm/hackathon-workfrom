import Time from "../models/TimeModel.js";
import Transactions from "../models/TransactionModel.js";
import Properties from "../models/PropertyModel.js";
import Users from "../models/UserModel.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll({
      attributes: ["id", "duration", "totalPrice", "startDate", "endDate"],
      include: [
        {
          model: Properties,
          attributes: ["name", "price"],
          include: [
            {
              model: Time,
              attributes: ["name"],
            },
          ],
        },
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transactions.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "duration", "totalPrice", "startDate", "endDate"],
      include: [
        {
          model: Properties,
          attributes: ["name", "price"],
          include: [
            {
              model: Time,
              attributes: ["name"],
            },
          ],
        },
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    return res.status(200).json(transaction);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTransaction = async (req, res) => {
  const { propertyId, userId, duration, startDate } = req.body;

  const newStartDate = new Date(startDate);

  const property = await Properties.findByPk(propertyId);
  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }
  const timeId = property.timeId;
  const time = await Time.findByPk(timeId);
  if (!time) {
    return res.status(404).json({ message: "Time not found" });
  }

  const totalPrice = property.price * duration;

  let endDate;
  if (time.name === "Day") {
    endDate = new Date(newStartDate.getTime() + duration * 24 * 60 * 60 * 1000);
  } else if (time.name === "Month") {
    endDate = new Date(
      newStartDate.getTime() + duration * 30 * 24 * 60 * 60 * 1000
    );
  } else if (time.name === "Year") {
    endDate = new Date(
      newStartDate.getTime() + duration * 365 * 24 * 60 * 60 * 1000
    );
  } else {
    return res.status(404).json({ message: "Time not found" });
  }

  var year = endDate.getFullYear();
  var month = (endDate.getMonth() + 1).toString().padStart(2, "0");
  var day = endDate.getDate().toString().padStart(2, "0");

  var endDateString = year + "-" + month + "-" + day;


  try {
    await Transactions.create({
      propertyId,
      userId,
      duration,
      startDate,
      endDate: endDateString,
      totalPrice,
    });
    return res
      .status(201)
      .json({ message: "Transaction created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  const { propertyId, userId, duration, startDate } = req.body;

  const newStartDate = new Date(startDate);

  const property = await Properties.findByPk(propertyId);
  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }
  const timeId = property.timeId;
  const time = await Time.findByPk(timeId);
  if (!time) {
    return res.status(404).json({ message: "Time not found" });
  }

  const totalPrice = property.price * duration;

  let endDate;
  if (time.name === "Day") {
    endDate = new Date(newStartDate.getTime() + duration * 24 * 60 * 60 * 1000);
  } else if (time.name === "Month") {
    endDate = new Date(
      newStartDate.getTime() + duration * 30 * 24 * 60 * 60 * 1000
    );
  } else if (time.name === "Year") {
    endDate = new Date(
      newStartDate.getTime() + duration * 365 * 24 * 60 * 60 * 1000
    );
  } else {
    return res.status(404).json({ message: "Time not found" });
  }

  var year = endDate.getFullYear();
  var month = (endDate.getMonth() + 1).toString().padStart(2, "0");
  var day = endDate.getDate().toString().padStart(2, "0");

  var endDateString = year + "-" + month + "-" + day;

  try {
    const transaction = await Transactions.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    await Transactions.update(
      {
        propertyId,
        userId,
        duration,
        startDate,
        endDate: endDateString,
        totalPrice,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res
      .status(200)
      .json({ message: "Transaction updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    await Transactions.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res
      .status(200)
      .json({ message: "Transaction deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
