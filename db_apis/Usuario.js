const database = require('../services/database.js');
 
const baseQuery = 
 `SELECT *
  FROM Usuario`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.userName) {
    binds.userName = context.userName;
    console.log(binds.userName);
    
    query += `\n WHERE userName = :userName`;
  }
 
  const result = await database.simpleExecute(query, binds);
  console.log( result);
  return result.rows;
}
 
module.exports.find = find;



const createSQL =
 `insert into Usuario (
    userName,
    nombre,
    password,
    tipo
  ) values (
    :userName,
    :nombre,
    :password,
    :tipo
  )`;

async function create(emp) {
  const eps = Object.assign({}, emp);
  
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


