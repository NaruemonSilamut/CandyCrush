import * as icecreamService from "../service/icecream.service.js";

export const getAllIceCream = async (req, res) => {
  try {
    const icecream = await icecreamService.getAlliceCream();
    res.status(200).json(icecream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getIceCreamById = async (req, res) => {
  try {
    const { id } = req.params;
    const icecream = await icecreamService.getIceCreamById(id);

    if (!icecream) {
      return res.status(404).json({ error: "Ice cream not found" });
    }

    res.status(200).json(icecream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createIceCream = async (req, res) => {
  try {
    const icecream = await icecreamService.createIceCream(req.body);

    res.status(201).json(icecream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateIceCream = async (req, res) => {
  try {
    const { id } = req.params;
    const icecream = await icecreamService.updateIceCream(id, req.body);

    if (!icecream) {
      return res.status(404).json({ error: "Ice cream not found" });
    }

    res.status(200).json(icecream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteIceCream = async (req, res) => {
  try {
    const { id } = req.params;
    const icecream = await icecreamService.deleteIceCream(id);

    if (!icecream) {
      return res.status(404).json({ error: "Ice cream not found" });
    }

    res.status(200).json({ message: "Ice cream deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
