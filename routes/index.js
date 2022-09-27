const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('lincy channy');
});

module.exports = routes