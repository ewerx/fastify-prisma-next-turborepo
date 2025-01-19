import z from "zod"

export const errorSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
})
