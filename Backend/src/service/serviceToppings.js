import prisma from "../prismaclient.js";

export const getToppings = async () => { 
    return await prisma.topping.findMany();
}

export const createToppings = async (topping) => {
    return await prisma.topping.create({
        data: topping 
    });
};

export const deleteTopping = async (toppingId) => {
    return await prisma.topping.delete({
        where: { toppingId }, 
    });
};
