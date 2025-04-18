import prisma from "../prismaclient.js";

export const getOrder = async () => {
    return await prisma.order.findMany({})
}

export const createOrder = async (order) => {
    return await prisma.order.create({
        data: order
    })
}

export const deleteOrder = async (orderId) => {
    return await prisma.order.delete({
        where: { orderId: orderId }, // ใช้ orderId ตามที่คุณมีใน schema
    });
};