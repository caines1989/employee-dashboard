import z from 'zod';

export const candidateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  telephone: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  companyType: z.string(),
  notes: z.string(),
  hot: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
