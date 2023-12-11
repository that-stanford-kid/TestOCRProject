// backend/logger.js
const { createLogger, transports, format } = require('winston');// example winston

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined_log' }),
  ],
});

if (process.env.NODE_ENV !== 'production) {
    logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
