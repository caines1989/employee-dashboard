import z from 'zod';

export const companySchema = z.object({
  id: z.string().cuid(),
  companyName: z.string(),
  telephone: z.number(),
  email: z.string().email(),
  website: z.string().url(),
  companyType: z.string(),
  notes: z.string(),
  hot: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const candidateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  telephone: z.number(),
  email: z.string().email(),
  website: z.string().url(),
  companyType: z.string(),
  notes: z.string(),
  hot: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
