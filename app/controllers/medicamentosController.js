var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/medicamentos', function (req, res, next) {
      res.render('medicamentos');
});
