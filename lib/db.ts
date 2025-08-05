import { PrismaClient } from "@prisma/client";

const globlaForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const db = globlaForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globlaForPrisma.prisma = db;