import { Hono } from 'hono';
import { prisma } from '../lib/prisma';

const companyRoutes = new Hono();

companyRoutes.get('/', async c => {
  try {
    const companies = await prisma.company.findMany();
    return c.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return c.json({ error: 'Failed to fetch companies' }, 500);
  }
});

export default companyRoutes;
