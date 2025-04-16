import { date } from "zod";
import prisma from "../prismaclient.js";

export const getPayment = async () => {
    return await prisma.payment.findMany({})
}
export const createPayment = async (payment) => {
    return await prisma.payment.create({
        date: payment
    })
}