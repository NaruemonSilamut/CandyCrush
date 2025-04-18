import { z } from "zod";
import { createIceCream, getIceCream } from "../service/serviceIceCream.js";

const iceCreamSchema = z.object({
  name: z.string().min(1, { message: "Ice cream name is required" }),
  price: z.number().positive({ message: "Price must be positive" }),
  image: z.string().url({ message: "Image must be a valid URL" })
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
//เพิ่มเส้นที่ใข้  list ice cream แค่ 1 ตัว โดยเอารายละเอียดทั้งหมดมา โดยอิงจาก ID ของ ice cream นั้นๆ

export const createIceCreamController = async (req, res) => {
  try {
    const validated = iceCreamSchema.parse(req.body);
    const data = await createIceCream(validated);
    if (!data) {
      return res.status(400).json({ message: "Failed to create ice cream" });
    }
    res.status(201).json({ message: "Ice cream created successfully", data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
