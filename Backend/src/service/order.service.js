import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getOrders = async () => {
  return await prisma.Order.findMany();
};

export const getOrderById = async (id) => {
  return await prisma.Order.findUnique({
    where: { orderId: Number(id) },
  });
};

export const createOrder = async (data) => {
  return await prisma.Order.create({
    data,
  });
};

export const updateOrder = async (id, data) => {
  return await prisma.Order.update({
    where: { orderId: Number(id) },
    data,
  });
};

export const deleteOrder = async (id) => {
  return await prisma.Order.delete({
    where: { orderId: Number(id) },
  });
};
