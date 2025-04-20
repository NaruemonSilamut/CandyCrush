import { PrismaClient } from '@prisma/client';

let prisma;

try {
    prisma = new PrismaClient();
    console.log('Prisma Client is ready');
} catch (error) {
    console.error('Failed to initialize Prisma Client:', error);
    process.exit(1); // ทำให้โปรแกรมหยุดหากเชื่อมต่อไม่ได้
}

export default prisma;
