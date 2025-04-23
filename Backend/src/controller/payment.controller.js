import * as paymentService from "../service/payment.service.js";

export const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.getPaymentById(id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const getAllPayments = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.updatePayment(id, req.body);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.deletePayment(id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
