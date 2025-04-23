import * as flavorService from '../service/flavor.service.js';

export const getAllFlavors = async (req, res) => {
  try {
    const flavors = await flavorService.getAllFlavors();
    res.status(200).json(flavors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flavors', error });
  }
}

export const getFlavorById = async (req, res) => {
    try {
        const { id } = req.params;
        const flavor = await flavorService.getFlavorById(id);
        if (!flavor) {
        return res.status(404).json({ message: 'Flavor not found' });
        }
        res.status(200).json(flavor);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching flavor', error });
    }
    }

export const createFlavor = async (req, res) => {
  try {
    const newFlavor = await flavorService.createFlavor(req.body);
    res.status(201).json(newFlavor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating flavor', error });
  }
};

export const updateFlavor = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFlavor = await flavorService.updateFlavor(id, req.body);
    if (!updatedFlavor) {
      return res.status(404).json({ message: 'Flavor not found' });
    }
    res.status(200).json(updatedFlavor);
  } catch (error) {
    res.status(500).json({ message: 'Error updating flavor', error });
  }
};

export const deleteFlavor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFlavor = await flavorService.deleteFlavor(id);
    if (!deletedFlavor) {
      return res.status(404).json({ message: 'Flavor not found' });
    }
    res.status(200).json({ message: 'Flavor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting flavor', error });
  }
};
