import { PrismaClient } from '@prisma/client';
let prisma;

try {
    prisma = new PrismaClient(); 
    console.log('Prisma Client is ready');
} catch (error) {
    console.error('Failed to initialize Prisma Client:', error);
    process.exit(1); // Exit the process with a failure code
}

export default prisma;