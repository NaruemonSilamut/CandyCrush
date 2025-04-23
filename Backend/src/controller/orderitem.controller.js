import * as orderItemService from '../service/orderitem.service.js';

export const getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await orderItemService.getAllOrderItems();
        res.status(200).json(orderItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getOrderItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderItem = await orderItemService.getOrderItemById(id);
        if (!orderItem) {
            return res.status(404).json({ message: 'Order item not found' });
        }
        res.status(200).json(orderItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createOrderItem = async (req, res) => {
    try {
        const orderItem = await orderItemService.createOrderItem(req.body);
        res.status(201).json(orderItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateOrderItem = async (req, res) => {
    try {
        const { id } = req.params;
        const orderItem = await orderItemService.updateOrderItem(id, req.body);
        if (!orderItem) {
            return res.status(404).json({ message: 'Order item not found' });
        }
        res.status(200).json(orderItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const deleteOrderItem = async (req, res) => {
    try {
        const { id } = req.params;
        const orderItem = await orderItemService.deleteOrderItem(id);
        if (!orderItem) {
            return res.status(404).json({ message: 'Order item not found' });
        }
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

