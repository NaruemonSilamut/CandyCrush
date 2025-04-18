import prisma from "../prismaclient.js";

export const getCart = async () => {
  return await prisma.cart.findMany();
}

export const createCart = async (cart) => {
  return await prisma.cart.create({
    data: cart
  });
};