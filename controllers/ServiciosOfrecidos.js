const ServiciosOfrecidos = require('../db_apis/ServiciosOfrecidos.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await ServiciosOfrecidos.find(context);
 
    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;


function getServicioOfrecidoFromRec(req) {
  console.log( req.body);  
  const servicio = {
    idIPS: req.body.idIPS,
    idServicio: req.body.idServicio,
    horaInicio: req.body.horaInicio,
    horaFin: req.body.horaFin,
    capacidad: req.body.capacidad,
    id: req.body.id
  };
 
  return servicio;
}
 
async function post(req, res, next) {
  try {
    let servicio = getServicioOfrecidoFromRec(req);
    
    servicio = await ServiciosOfrecidos.create(servicio);
    console.log(servicio);
    
    res.status(201).json(servicio);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;
module.exports.put = get;
module.exports.delete = get;

module.exports.getServiciosIPS = get;