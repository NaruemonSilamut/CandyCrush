import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAlliceCream = async() => {
    return await prisma.IceCream.findMany();
}

export const getIceCreamById = async(id) => {
    return await prisma.IceCream.findUnique({
        where: {
            iceCreamId: id
        }
    });
}

export const createIceCream = async(icecream) => {
    return await prisma.IceCream.create({
        data: icecream
    });
} 

export const updateIceCream = async(id, icecream) => {
    return await prisma.IceCream.update({
        where: {
            iceCreamId: id
        },
        data: icecream
    });
}

export const deleteIceCream = async(id) => {
    return await prisma.IceCream.delete({
        where: {
            iceCreamId: id
        }
    });
}