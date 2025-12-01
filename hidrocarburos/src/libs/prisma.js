import { PrismaClient } from '../generated/prisma';  // <-- ruta correcta

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export { prisma };