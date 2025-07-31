import { Hono } from 'hono';
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import candidateRoutes from './routes/candidates';
import companyRoutes from './routes/companies';

const app = new Hono();

app.use("*", logger());

app.route('/companies', companyRoutes);
app.route('/candidates', candidateRoutes);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
