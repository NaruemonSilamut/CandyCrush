import { createToppings, getToppings, deleteTopping } from "../service/serviceToppings.js";
import { z } from "zod";

const toppingSchema = z.object({
    toppingName: z.string().min(1, { message: "Topping name is required" }),
    toppingPrice: z.number().positive({ message: "Price must be positive" }),
    toppingImage: z.string().url({ message: "Image must be a valid URL" }),
    toppingDescription: z.string().optional(),
});

// ดึง topping ทั้งหมด
export const getToppingsController = async (req, res) => {
    try {
        const data = await getToppings();
        res.status(200).json(data);
    } catch (error) {
        console.error("Failed to fetch toppings:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// สร้าง topping ใหม่
export const createToppingsController = async (req, res) => {
    try {
        console.log("Raw req.body:", req.body);

        const validatedData = toppingSchema.parse(req.body);
        console.log("Validated topping:", validatedData);

        const data = await createToppings(validatedData);
        console.log("Topping created:", data);

        res.status(201).json({ message: "Topping created successfully", data });
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log("Validation errors:", error.errors);
            return res.status(400).json({ errors: error.errors });
        }

        console.error("Internal server error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ลบ topping ตาม ID
export const deleteToppingsController = async (req, res) => {
    try {
        const { toppingId } = req.params;

        if (!toppingId) {
            return res.status(400).json({ message: "Topping ID is required" });
        }

        const deletedTopping = await deleteTopping(toppingId);

        if (!deletedTopping) {
            return res.status(404).json({ message: "Topping not found or already deleted" });
        }

        res.status(200).json({ message: "Topping deleted successfully", deletedTopping });
    } catch (error) {
        console.error("Failed to delete topping:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
