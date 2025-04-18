import { z } from "zod";
import { createIceCream, getIceCream, deleteIceCream } from "../service/serviceIceCream.js";

const iceCreamSchema = z.object({
  iceCreamName: z.string().min(1, { message: "Ice cream name is required" }),
  iceCreamPrice: z.number().positive({ message: "Price must be positive" }),
  iceCreamImage: z.string().url({ message: "Image must be a valid URL" }),
  iceCreamDescription: z.string().optional(),
});

export const getIceCreamController = async (req, res) => {
  try {
    const data = await getIceCream();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No ice cream found" });
    }
    res.status(200).json({ message: "Ice cream fetched successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createIceCreamController = async (req, res) => {
  try {
    console.log("Raw req.body:", req.body);

    const validated = iceCreamSchema.parse(req.body);
    console.log("Zod validated:", validated); 

    const data = await createIceCream(validated);
    console.log("IceCream created:", data); 

    res.status(201).json({ message: "Ice cream created successfully", data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation errors:", error.errors);
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteIceCreamController = async (req, res) => {
  try {
    const { iceCreamId } = req.params;

    if (!iceCreamId) {
      return res.status(400).json({ message: "Ice cream ID is required" });
    }

    const deleted = await deleteIceCream(iceCreamId);

    if (!deleted) {
      return res.status(404).json({ message: "Ice cream not found or already deleted" });
    }

    res.status(200).json({ message: "Ice cream deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


