import prisma from "../prismaclient.js";

export const registerService = async (data) => {
  return await prisma.user.create({
    data,
  });
};
