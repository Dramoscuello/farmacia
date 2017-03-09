var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');
  Medicamentos = mongoose.model("medicamentos");

module.exports = function (app) {
  app.use('/', router);
};

router.get('/medicamentos', function (req, res, next) {
      Medicamentos.find(function(err, medicamentos){
        if(err) return next(err);
        res.render('medicamentos',{
          titulo: 'Comprar medicamentos',
          medicamentos: medicamentos
        });
      });
});
