import { join } from "path";
import AutoLoad from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // Enable CORS
  await fastify.register(cors, {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  });

  // Swagger documentation
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: "Moonlight API",
        description: "Moonlight portfolio management API",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:4000",
          description: "Development server",
        },
      ],
    },
  });

  // Auto-load plugins
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // Auto-load routes
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};

export default app;
export { app };
