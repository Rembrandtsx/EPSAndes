const EPSs = require('../db_apis/EPS.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await EPSs.find(context);
 
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

function getEPSFromRec(req) {
  console.log( req.body);  
  const eps = {
    id: req.body.id,
    nombre: req.body.nombre,
    localizacion: req.body.localizacion,
    idGerente: req.body.idGerente
  };
 
  return eps;
}
 
async function post(req, res, next) {
  try {
    let eps = getEPSFromRec(req);
    
    eps = await EPSs.create(eps);
    console.log(eps);
    
    res.status(201).json(eps);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;

async function put(req, res, next) {
  try {
    let eps = getEPSFromRec(req);
 
    eps.id = parseInt(req.params.id, 10);
 
    eps = await EPSs.update(eps);
 
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


async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
 
    const success = await EPSs.delete(id);
 
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.delete = del;