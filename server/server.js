var express = require('express');
var app = express();

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log('Listening on port 8000');

// export our app for testing and flexibility, required by index.js
module.exports = app;
