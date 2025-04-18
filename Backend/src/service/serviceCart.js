export const getCart = async () => {
    return await prisma.cart.findMany({
      include: { items: true },
    });
  };
  
  export const createCart = async (data) => {
    return await prisma.cart.create({
      data: {
        userId: data.userId,
        items: {
          create: data.items,
        },
      },
    });
  };
  