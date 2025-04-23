import * as toppingService from "../service/topping.service.js";

export const getAllToppings = async (req, res) => {
  try {
    const toppings = await toppingService.getAllToppings();
    res.status(200).json(toppings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch toppings" });
  }
};

export const getToppingById = async (req, res) => {
  try {
    const { id } = req.params;
    const topping = await toppingService.getToppingById(id);
    if (!topping) {
       res.status(404).json({ error: "Topping not found" });
    }
    res.status(200).json(topping);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch topping" });
  }
}

export const createTopping = async (req, res) => {
  try {
    const newTopping = await toppingService.createTopping(req.body);
    res.status(201).json(newTopping);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Failed to create topping",error });
  }
}

export const updateTopping = async (req, res) => {
  try {
    const { id } = req.params;
    const topping = req.body;
    const updatedTopping = await toppingService.updateTopping(id, topping);
    if (!updatedTopping) {
       res.status(404).json({ error: "Topping not found" });
    }
    res.status(200).json(updatedTopping);
  } catch (error) {
    res.status(500).json({ error: "Failed to update topping" });
  }
}

export const deleteTopping = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTopping = await toppingService.deleteTopping(id);
    if (!deletedTopping) {
       res.status(404).json({ error: "Topping not found" });
    }
    res.status(200).json({ message: "Topping deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete topping" });
  }
}

