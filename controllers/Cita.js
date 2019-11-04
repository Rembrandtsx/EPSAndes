const CitaS = require('../db_apis/Cita.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await CitaS.find(context);
 
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

function getCitaFromRec(req) {
  console.log( req.body);  
  const Cita = {
    idAfiliado: req.body.idAfiliado,
    fechaSolicitud: req.body.fechaSolicitud,
    fecha: req.body.fecha,
    id: req.body.id,
    ingreso: req.body.ingreso,
    idMedico: req.body.idMedico,
    idServicio: req.body.idServicio,
    horaIni: req.body.horaIni,
    horaFin: req.body.horaFin,
    idOrganizador: req.body.idOrganizador
  };
 
  return Cita;
}
 
async function post(req, res, next) {
  try {
    let Cita = getCitaFromRec(req);
    
    Cita = await CitaS.create(Cita);
    console.log(Cita);
    
    res.status(201).json(Cita);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;

async function put(req, res, next) {
  try {
    let Cita = getCitaFromRec(req);
 
    Cita.id = parseInt(req.params.id, 10);
 
    Cita = await CitaS.update(Cita);
 
    if (Cita !== null) {
      res.status(200).json(Cita);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.put = put;



module.exports.delete = get;