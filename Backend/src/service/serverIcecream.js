import prisma from "../prisma/client.js";

export const getIceCream = async () => {
  return await prisma.iceCream.findMany();
};

export const createIceCream = async (data) => {
  return await prisma.iceCream.create({
    data,
  });
};