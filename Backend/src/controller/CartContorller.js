import { z } from "zod";
import { createCart, getCart, deleteCart } from "../service/serviceCart.js";

const cartSchema = z.object({
  userId: z.string(),
  iceCreamId: z.string(),
  toppingId: z.string(),
  itemQuantity: z.number().min(1),
});

export const getCartController = async (req, res) => {
  try {
    const data = await getCart();
    if (!data) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart fetched", data });
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

export const createCartController = async (req, res) => {
  try {
    const validated = cartSchema.parse(req.body);
    const data = await createCart(validated);
    res.status(201).json({ message: "Cart created", data });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid data", errors: error.errors });
    }
    res.status(400).json({ errors: error.errors });
  }
};

export const deleteCartController = async (req, res) => {
  try {
    const { cartId } = req.params;
    const deleted = await deleteCart(cartId);
    if (!deleted) {
      return res.status(404).json({ message: "Cart not found or already deleted" });
    }
    res.status(200).json({ message: "Cart deleted", data: deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};