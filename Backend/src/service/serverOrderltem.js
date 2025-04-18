export const getOrderItems = async () => {
    return await prisma.orderItem.findMany();
  };
  
  export const createOrderItem = async (data) => {
    return await prisma.orderItem.create({
      data,
    });
  };
  