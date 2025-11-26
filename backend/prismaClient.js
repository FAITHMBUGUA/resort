import { PrismaClient } from "@prisma/client";

// Do NOT pass adapter or database here
const prisma = new PrismaClient(); 

export default prisma;

