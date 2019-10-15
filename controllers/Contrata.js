const Contrata = require('../db_apis/Contrata.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    
 
    const rows = await Contrata.find(context);
 
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


function getContrataFromRec(req) {
  console.log( req.body);  
  const contrata = {
    idEPS: req.body.idEPS,
    idIPS: req.body.idIPS
  };
 
  return contrata;
}
 
async function post(req, res, next) {
  try {
    let contrata = getContrataFromRec(req);
    
    contrata = await Contrata.create(contrata);
    console.log(contrata);
    
    res.status(201).json(contrata);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;



module.exports.put = get;
module.exports.delete = get;