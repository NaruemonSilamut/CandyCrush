import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllPayments = async () => {
  return await prisma.Payment.findMany();
};

export const getPaymentById = async (id) => {
  return await prisma.Payment.findUnique({
    where: { paymentId: Number(id) },
  });
};

export const createPayment = async (data) => {
  return await prisma.Payment.create({
    data,
  });
};

export const updatePayment = async (id, data) => {
  return await prisma.Payment.update({
    where: { paymentId: Number(id) },
    data,
  });
};

export const deletePayment = async (id) => {
  return await prisma.Payment.delete({
    where: { paymentId: Number(id) },
  });
};
