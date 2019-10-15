const database = require('../services/database.js');
 
const baseQuery = 
 `SELECT *
  FROM Contrata`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;

const createSQL =
 `insert into Contrata(
    idEPS,
    idIPS
  ) values (
    :idEPS,
    :idIPS
  )`;

async function create(emp) {
  const eps = Object.assign({}, emp);
 
  const result = await database.simpleExecute(createSQL, eps);
  console.log(result);  
  return eps;
}
 
module.exports.create = create;