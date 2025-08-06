import { Hono } from 'hono';
import { prisma } from '../lib/prisma';

const candidateRoutes = new Hono();

candidateRoutes.get('/', async c => {
  try {
    const candidates = await prisma.candidate.findMany();
    return c.json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return c.json({ error: 'Failed to fetch candidates' }, 500);
  }
});

export default candidateRoutes;