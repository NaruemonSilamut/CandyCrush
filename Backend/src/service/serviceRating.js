import prisma from "../prismaclient.js";
export const getRating = async () => { 
    return await prisma.rating.findMany({})
}

export const createRating = async (rating) => {
    return await prisma.rating.create({
        data: rating
    })
}