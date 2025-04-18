import { z } from "zod";
import { createOrderItem, getOrderItems } from "../service/serviceOrderItem.js";

const orderItemSchema = z.object({
  orderId: z.string(),
  iceCreamId: z.string(),
  quantity: z.number().min(1),
});

export const getOrderItemsController = async (req, res) => {
  try {
    const data = await getOrderItems();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching order items" });
  }
};

export const createOrderItemController = async (req, res) => {
  try {
    const validated = orderItemSchema.parse(req.body);
    const data = await createOrderItem(validated);
    res.status(201).json({ message: "Order item created", data });
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
};
