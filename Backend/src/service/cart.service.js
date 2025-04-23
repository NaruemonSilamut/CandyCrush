import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllCarts = async () => {
  return await prisma.cart.findMany();
};

export const getCartById = async (id) => {
  return await prisma.cart.findUnique({
    where: { id: parseInt(id) },
  });
};

export const createCart = async (data) => {
  return await prisma.cart.create({ data });
};

export const updateCart = async (id, data) => {
  return await prisma.cart.update({
    where: { id: parseInt(id) },
    data,
  });
};

export const deleteCart = async (id) => {
  return await prisma.cart.delete({
    where: { id: parseInt(id) },
  });
};
