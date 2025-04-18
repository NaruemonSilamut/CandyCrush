export const getOrders = async () => {
    return await prisma.order.findMany({
      include: { items: true },
    });
  };
  
  export const createOrder = async (data) => {
    return await prisma.order.create({
      data: {
        userId: data.userId,
        total: data.total,
        items: {
          create: data.items,
        },
      },
    });
  };
  