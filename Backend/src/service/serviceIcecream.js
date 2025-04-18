import prisma from "../prismaclient.js";


export const getIceCream = async () => {
  return await prisma.iceCream.findMany({});
};

export const createIceCream = async (iceCream) => {
  return await prisma.iceCream.create({
    data: iceCream,
  });
};

export const deleteIceCream = async (iceCreamId) => {
  try {
    const deleted = await prisma.iceCream.delete({
      where: { iceCreamId }
    });
    return deleted;
  } catch (error) {
    console.error("Prisma delete error:", error);
    return null;
  }
};