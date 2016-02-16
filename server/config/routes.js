var helpers = require('./routeHelpers.js');

module.exports = function (app, express) {
  app.get('/', helpers.serveIndex);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};