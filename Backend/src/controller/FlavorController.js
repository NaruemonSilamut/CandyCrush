const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to get flavors associated with each ice cream
const getFlavors = async (req, res) => {
  try {
    const iceCreamId = req.params.iceCreamId; // Get the ice cream id from params
    const flavors = await prisma.flavor.findMany({
      where: {
        iceCreamId: iceCreamId, // Filter by the ice cream ID
      },
    });
    res.json(flavors); // Send flavors in response
  } catch (error) {
    res.status(500).json({ error: "Error fetching flavors." });
  }
};

// Function to create a new flavor
const createFlavor = async (req, res) => {
  try {
    const { flavorName, flavorImage, iceCreamId } = req.body;
    const newFlavor = await prisma.flavor.create({
      data: {
        flavorName,
        flavorImage,
        iceCreamId,
      },
    });
    res.status(201).json(newFlavor); // Return the newly created flavor
  } catch (error) {
    res.status(500).json({ error: "Error creating flavor." });
  }
};

module.exports = { getFlavors, createFlavor };
