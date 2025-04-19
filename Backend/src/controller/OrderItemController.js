import { z } from "zod";
import { createOrderItem, getOrderItems, deleteOrderItem } from "../service/serviceOrderltem.js";

const orderItemSchema = z.object({
  orderId: z.string().min(1, "Order ID is required"),
  iceCreamId: z.string().min(1, "Ice Cream ID is required"),
  toppingId: z.string().optional(),
  itemQuantity: z.number().min(1, "Item quantity must be at least 1"),
  itemPrice: z.number().positive("Item price must be a positive number"),
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

export const deleteOrderItemController = async (req, res) => {
  try {
    const { orderItemId } = req.params;
    const deleted = await deleteOrderItem(orderItemId);

    if (!deleted) {
      return res.status(404).json({ message: "Order item not found or already deleted" });
    }

    res.status(200).json({ message: "Order item deleted", data: deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};