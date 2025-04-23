import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllFlavors = async () => {
  return await prisma.flavor.findMany();
};

export const getFlavorById = async (id) => {
  return await prisma.flavor.findUnique({
    where: {
      flavorId: id,
    },
  });
};

export const createFlavor = async (flavor) => {
  return await prisma.flavor.create({
    data: flavor,
  });
};

export const updateFlavor = async (id, flavor) => {
  return await prisma.flavor.update({
    where: {
      flavorId: id,
    },
    data: flavor,
  });
};

export const deleteFlavor = async (id) => {
  return await prisma.flavor.delete({
    where: {
      flavorId: id,
    },
  });
};
