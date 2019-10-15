const Usuario = require('../db_apis/Usuario.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    
    context.userName = req.params.userName;

    const rows = await Usuario.find(context);
 
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
    userName: req.body.userName,
    nombre: req.body.nombre,
    password: req.body.password,
    tipo: req.body.tipo
  };
 
  return eps;
}
 
async function post(req, res, next) {
  try {
    let eps = getEPSFromRec(req);
    
    eps = await Usuario.create(eps);
    console.log(eps);
    
    res.status(201).json(eps);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;


module.exports.put = get;
module.exports.delete = get;