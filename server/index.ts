import { z } from 'zod';

import app from './app';

const ServeEnv = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, 'Port must be a numeric string')
    .default('3000')
    .transform(Number),
});
const ProcessEnv = ServeEnv.parse(process.env);

const server = Bun.serve({
  port: ProcessEnv.PORT,
  hostname: '0.0.0.0',
  fetch: app.fetch,
});

console.log('server running on port', server.port);
