import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllOrderItems = async () => {
  return await prisma.OrderItem.findMany();
};

export const getOrderItemById = async (id) => {
  return await prisma.OrderItem.findUnique({
    where: { orderItemId: Number(id) },
  });
};

export const createOrderItem = async (data) => {
  return await prisma.OrderItem.create({
    data,
  });
};

export const updateOrderItem = async (id, data) => {
  return await prisma.OrderItem.update({
    where: { orderItemId: Number(id) },
    data,
  });
};

export const deleteOrderItem = async (id) => {
  return await prisma.OrderItem.delete({
    where: { orderItemId: Number(id) },
  });
};

export const deleteOrderItemsByOrderId = async (id) => {
  return await prisma.OrderItem.deleteMany({
    where: { orderId: Number(id) },
  });
};
