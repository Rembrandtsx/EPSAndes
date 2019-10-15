const IPSs = require('../db_apis/IPS.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await IPSs.find(context);
 
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

function getipsFromRec(req) {
  console.log( req.body);  
  const ips = {
    id: req.body.id,
    nombre: req.body.nombre,
    localizacion: req.body.localizacion
  };
 
  return ips;
}
 
async function post(req, res, next) {
  try {
    let ips = getipsFromRec(req);
    
    ips = await IPSs.create(ips);
    console.log(ips);
    
    res.status(201).json(ips);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;

async function put(req, res, next) {
  try {
    let ips = getipsFromRec(req);
 
    ips.id = parseInt(req.params.id, 10);
 
    ips = await IPSs.update(ips);
 
    if (ips !== null) {
      res.status(200).json(ips);
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
 
    const success = await IPSs.delete(id);
 
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