import * as cartService from "../service/cart.service.js";

export const getAllCart = async (req, res) => {
  try {
    const carts = await cartService.getAllCarts();
    res.status(200).json(carts);
  } catch (error) {
    console.error("Error fetching carts:", error);
    res.status(500).json({ message: "Error fetching carts" });
  }
};
export const getCartById = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await cartService.getCartById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart" });
  }
};
export const createCart = async (req, res) => {
  try {
    const newCart = req.body;
    const createdCart = await cartService.createCart(newCart);
    res.status(201).json(createdCart);
  } catch (error) {
    res.status(500).json({ message: "Error creating cart" });
  }
};
export const updateCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const updatedCart = req.body;
    const cart = await cartService.updateCart(cartId, updatedCart);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart" });
  }
};
export const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const deletedCart = await cartService.deleteCart(cartId);
    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting cart" });
  }
};
