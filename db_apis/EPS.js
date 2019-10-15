const database = require('../services/database.js');
const oracledb = require('oracledb');

const baseQuery = 
 `SELECT *
  FROM EPS`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.id = context.id;
 
    query += `\n WHERE id = :id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;


const createSQL =
 `insert into EPS (
    id,
    nombre,
    localizacion,
    idGerente
  ) values (
    :id,
    :nombre,
    :localizacion,
    :idGerente
  )`;

async function create(emp) {
  const eps = Object.assign({}, emp);
  if (!eps.id){
    //si el objeto no tiene ID Asociado saca el siguiente valor de la secuencia de SQL para asignarlo.
    const genIdRes = await database.simpleExecute("SELECT sq_EpsAndes.NEXTVAL FROM dual", {});
    eps.id = genIdRes.rows[0].NEXTVAL;
  }  
  const result = await database.simpleExecute(createSQL, eps);
  console.log(result);  
  return eps;
}
 
module.exports.create = create;


const updateSql =
 `UPDATE EPS
  SET nombre = :nombre, localizacion = :localizacion WHERE id = :id`;
 
async function update(emp) {
  const eps = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, eps);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    return eps;
  } else {
    return null;
  }
}
 
module.exports.update = update;


const deleteSql =
 `DELETE FROM EPS
    WHERE id = :id
 `
 
async function del(id) {
  const binds = {
    id: id
  }
  const result = await database.simpleExecute(deleteSql, binds);
  console.log(result);
  
  return result;
}
 
module.exports.delete = del;


