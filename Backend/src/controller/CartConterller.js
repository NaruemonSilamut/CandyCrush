import { z } from "zod";
import { createCart, getCart } from "../service/serviceCart.js";

const cartSchema = z.object({
  userId: z.string().min(1, { message: "User ID is required" }),
  items: z.array(
    z.object({
      iceCreamId: z.string(),
      quantity: z.number().min(1),
    })
  ),
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
    res.status(400).json({ errors: error.errors });
  }
};
