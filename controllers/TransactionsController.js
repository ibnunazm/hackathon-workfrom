import Transactions from "../models/TransactionModel.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll();
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
  const { propertyId, customerId, ownerId, paymentId, amount } = req.body;
  try {
    await Transactions.create({
      propertyId,
      customerId,
      totalTime,
      startDate,
    });
    return res
      .status(201)
      .json({ message: "Transaction created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  const { propertyId, customerId, ownerId, paymentId, amount } = req.body;
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
        customerId,
        totalTime,
        startDate,
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
