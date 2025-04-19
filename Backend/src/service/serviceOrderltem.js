import prisma from "../prismaclient.js";

export const getOrderItems = async () => {
    return await prisma.orderItem.findMany();
  };
  
  export const createOrderItem = async (orderItem) => {
    return await prisma.orderItem.create({
      data:orderItem
    });
  };

  export const deleteOrderItem = async (orderItemId) => {
    try {
      return await prisma.orderItem.delete({
        where: { orderItemId }
      });
    } catch (error) {
      return null; // ถ้าลบไม่สำเร็จ เช่น ไม่เจอ ID
    }
  };
  