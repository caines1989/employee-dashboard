import { Hono } from 'hono';

const companyRoutes = new Hono();

companyRoutes.get('/', (c) => {
  return c.text('List of companies');
});

export default companyRoutes;