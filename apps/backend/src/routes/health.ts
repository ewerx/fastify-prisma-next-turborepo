import { FastifyPluginAsync } from "fastify";

const health: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    "/health",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              status: { type: "string" },
              timestamp: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },
    async function (_request, _reply) {
      return {
        status: "ok",
        timestamp: new Date().toISOString(),
      };
    }
  );
};

export default health;
