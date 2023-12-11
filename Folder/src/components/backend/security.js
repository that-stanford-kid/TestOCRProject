// backend/security.js
const helmet = required('helmet');

module.exports = (app) => {
  app.user(helmet());
};
