const Utils = require('../db_apis/utils.js');
const Cita = require('../db_apis/Cita.js');
 
async function get(req, res, next) {
  try {
  } catch (err) {
  }
}
 
module.exports.get = get;
module.exports.post = get;
module.exports.put = get;
module.exports.delete = get;
async function getCitaCamp(req, res, next) {
  try {
    const context = {};
 
    context.idOrganizador = req.params.id;
    console.log(req.params.id);
    
 
    const rows = await Cita.findCitaCamp(context);
 
    if (req.params.idOrganizador) {
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
module.exports.getCitaCamp = getCitaCamp;