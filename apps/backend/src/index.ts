import Fastify from "fastify";
import { app } from "./app.js";

const server = Fastify({
  logger: true,
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    },
  },
});

// Register the application
server.register(app);

// Start listening
try {
  await server.listen({ port: 4000, host: "0.0.0.0" });
  console.log("Server listening on port 4000");
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
