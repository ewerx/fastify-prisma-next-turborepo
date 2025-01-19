import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") global.prisma = prisma

export * as PrismaZod from "./generated/zod"

export * from "@prisma/client"

// these need to be explicitly exported or there is a "module does not export" error at runtime
// same thing happens if I try to move these exports to a separate ./types.ts file (?)
export {
  Prisma,
} from "@prisma/client"
