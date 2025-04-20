import { createRating, getRating } from "../service/serviceRating.js";
import { z } from "zod";

const ratingSchema = z.object({
    userId: z.string().min(1, { message: "User ID is required" }),
    iceCreamId: z.string().min(1, { message: "Ice Cream ID is required" }),
    orderId: z.string().min(1, { message: "Order ID is required" }),
    ratingValue: z.number().min(1).max(5, { message: "Rating value must be between 1 and 5" }),
})

export const getRatingController = async (req, res) => {
    try {
        const data = await getRating();
        if (!data) {
            return res.status(404).json({ message: "No rating found" });
        }
        res.status(200).json({message: "Rating fetched successfully", data });
    } catch (error) {
       if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
            console.log(error)
         res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createRatingController = async (req, res) => {
    try {
        const validatedData = ratingSchema.parse(req.body);
        const data = await createRating(validatedData);
        if (!data) {
            return res.status(404).json({ message: "Failed to create rating" });
        }
        res.status(201).json({message: "Rating created successfully", data });
        
    } catch (error) {
       if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
         res.status(500).json({ message: "Internal Server Error" });
    }
}