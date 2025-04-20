import { createOrder, getOrder, deleteOrder } from "../service/serviceOrder.js";
import { z } from "zod";

const orderSchema = z.object({
    userId: z.string().min(1, { message: "User ID is required" }),
    iceCreamId: z.string().min(1, { message: "Ice Cream ID is required" }),
    toppingId: z.string().optional(),
    orderTotal: z.number().min(1, { message: "Order total is required" }),
})

export const getOrderController = async (req, res) => {
    try {
        const data = await getOrder();
        if (!data) {
            return res.status(404).json({ message: "No order found" });
        }
        res.status(200).json({ message: "Order fetched successfully", data });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createOrderController = async (req, res) => {
    try {
        const validatedData = orderSchema.parse(req.body);
        const data = await createOrder(validatedData);
        if (!data) {
            return res.status(404).json({ message: "Failed to create order" });
        }
        res.status(201).json({ message: "Order created successfully", data });

    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const deleteOrderController = async (req, res) => {
    try {
        const { orderId } = req.params;

        if (!orderId) {
            return res.status(400).json({ message: "Order ID is required" });
        }

        const deletedOrder = await deleteOrder(orderId);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found or already deleted" });
        }

        res.status(200).json({ message: "Order deleted successfully", deletedOrder });
    } catch (error) {
        console.error("Failed to delete order:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};