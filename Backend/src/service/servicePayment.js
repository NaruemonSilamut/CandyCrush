import prisma from "../prismaclient.js"

export const getPayment = async () => {
    return await prisma.payment.findMany({})
}
export const createPayment = async (payments) => {
    return await prisma.payment.create({
        data: payments
    })
}