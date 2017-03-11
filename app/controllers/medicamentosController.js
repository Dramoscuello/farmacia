var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');
  Medicamentos = mongoose.model("medicamentos");

/*var meds  = [
  {medicamento: "Lansoprazol", imagen: "img/lansoprazol.jpg", laboratorio: "MK", precio: "$5000"},
  {medicamento: "Naproxeno", imagen: "img/naproxeno.jpg", laboratorio: "MK", precio: "$5000"},
  {medicamento: "Clindamicina", imagen: "img/clindamicina.jpg", laboratorio: "MK", precio: "$18700"},
  {medicamento: "Pirantel", imagen: "img/pirantel.jpg", laboratorio: "Genfar", precio: "$2000"}
]
*/
module.exports = function (app) {
  app.use('/', router);
};

router.get('/medicamentos', function (req, res, next) {
  /*res.render('medicamentos',{
    titulo: 'Comprar medicamentos',
    medicamentos: meds
  });*/

      Medicamentos.find(function(err, medicamentos){
        if(err) return next(err);
        res.render('medicamentos',{
          titulo: 'Comprar medicamentos',
          medicamentos: medicamentos
        });
      });
});
