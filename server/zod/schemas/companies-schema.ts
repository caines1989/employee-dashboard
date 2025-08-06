import z from 'zod';

export const companySchema = z.object({
  id: z.string().cuid(),
  companyName: z.string(),
  telephone: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  companyType: z.string(),
  notes: z.string(),
  live: z.boolean().optional(),
  hot: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
