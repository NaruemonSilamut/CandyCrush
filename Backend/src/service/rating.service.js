import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllRatings = async () => {
  return await prisma.Rating.findMany();
};

export const getRatingById = async (id) => {
  return await prisma.Rating.findUnique({
    where: { ratingId: Number(id) },
  });
};

export const createRating = async (data) => {
  return await prisma.Rating.create({
    data,
  });
};

export const updateRating = async (id, data) => {
  return await prisma.Rating.update({
    where: { ratingId: Number(id) },
    data,
  });
};

export const deleteRating = async (id) => {
  return await prisma.Rating.delete({
    where: { ratingId: Number(id) },
  });
};
