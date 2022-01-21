import winston from "winston";

const { format, transports } = winston;

const logFormat = format.printf(
  (info) => `${info.timestamp} ${info.level}: ${info.message}`
);

const prettyJson = format.printf((info) => {
  if (info.message.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 2);
  }
  return `${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    prettyJson,
    format.metadata({ fillExcept: ["message", "level", "timestamp"] })
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), logFormat),
    }),
  ],
  exitOnError: false,
});

export default logger;
