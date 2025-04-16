import { z } from "zod";
import { createPayment, getPayment } from "../service/servicePayment.js";

const paymentSchema = z.object({
    orderId: z.string().min(1, { message: "Order ID is required" }),
    paymentMethod: z.string(["credit_card", "paypal", "bank_transfer"], { message: "Invalid payment method" }),
    paymentStatus: z.string(["pending", "completed", "failed"], { message: "Invalid payment status" }),
    paymentAmount: z.number().positive({ message: "Payment amount must be positive" }),
});

export const getPaymentController = async (req, res) => {
    try{
        const data = await getPayment();
        if (!data) {
            return res.status(404).json({ message: "No payment found" });
        }
        res.status(200).json({ message: "Payment fetched successfully", data });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createPaymentController = async (req, res) => {
    try {
        const validatedData = paymentSchema.parse(req.body);
        const data = await createPayment(validatedData);
        if (!data) {
            return res.status(404).json({ message: "Failed to create payment" });
        }
        res.status(201).json({ message: "Payment created successfully", data });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
