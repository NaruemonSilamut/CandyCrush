import prisma from "../prismaclient.js";

export const getOrderItems = async () => {
    return await prisma.orderItem.findMany();
  };
  
  export const createOrderItem = async (orderItem) => {
    return await prisma.orderItem.create({
      data:orderItem
    });
  };
  