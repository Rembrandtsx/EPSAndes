const ServicioSalud = require('../db_apis/ServicioSalud.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await ServicioSalud.find(context);
 
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

function getServicioSaludFromRec(req) {
  console.log( req.body);  
  const servicio = {
    id: req.body.id,
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    estado: req.body.estado,
    horaIni: req.body.horaIni,
    horaFin: req.body.horaFin
  };
 
  return servicio;
}
 
async function post(req, res, next) {
  try {
    let servicio = getServicioSaludFromRec(req);
    
    servicio = await ServicioSalud.create(servicio);
    console.log(servicio);
    
    res.status(201).json(servicio);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;

async function put(req, res, next) {
  try {
    let eps = getServicioSaludFromRec(req);
 
    eps.id = parseInt(req.params.id, 10);
 
    eps = await ServicioSalud.update(eps);
 
    if (eps !== null) {
      res.status(200).json(eps);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.put = put;

module.exports.delete = get;