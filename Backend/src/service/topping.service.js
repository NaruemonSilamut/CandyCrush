import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllToppings = async () => {
  return await prisma.Topping.findMany();
};

export const getToppingById = async (id) => {
  return await prisma.Topping.findUnique({
    where: {
      toppingId: id,
    },
  });
};

export const createTopping = async (topping) => {
  return await prisma.Topping.create({
    data: topping,
  });
};

export const updateTopping = async (id, topping) => {
  return await prisma.Topping.update({
    where: {
      toppingId: id,
    },
    data: topping,
  });
};

export const deleteTopping = async (id) => {
  return await prisma.Topping.delete({
    where: {
      toppingId: id,
    },
  });
};
