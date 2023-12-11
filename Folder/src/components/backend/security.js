// backend/security.js
const helmet = require('helmet');

module.exports = (app) => {
  app.use(helmet());
};
