var express = require('express');
var pushState = require('@jmarthernandez/express-spa');

var app = express();
var static = __dirname;
var port = process.env.PORT || 8080;
app.use(express.static(static));
app.use(pushState('index.html', { root: static }));

app.listen(port, function () {
  console.log('Listening on port', port);
});