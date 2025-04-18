import { z } from "zod";
import { getOrders, createOrder } from "../service/serviceOrder.js";

const orderSchema = z.object({
  userId: z.string(),
  total: z.number(),
  items: z.array(
    z.object({
      iceCreamId: z.string(),
      quantity: z.number(),
    })
  ),
});

export const getOrdersController = async (req, res) => {
  try {
    const data = await getOrders();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

export const createOrderController = async (req, res) => {
  try {
    const validated = orderSchema.parse(req.body);
    const data = await createOrder(validated);
    res.status(201).json({ message: "Order created", data });
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
};
