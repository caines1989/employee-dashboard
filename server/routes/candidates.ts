import { Hono } from 'hono';

const candidateRoutes = new Hono();

candidateRoutes.get('/', (c) => {
  return c.text('List of candidates');
});

export default candidateRoutes;
