import { pino } from "pino"

const isLocalEnv = process.env.NODE_ENV !== "production"

export const logger = pino({
  // 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'
  level: isLocalEnv ? "debug" : process.env.LOG_LEVEL || "info",
  transport: isLocalEnv
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "pid,hostname",
        },
      }
    : undefined,
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
})
