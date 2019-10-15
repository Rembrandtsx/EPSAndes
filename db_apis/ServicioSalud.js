const database = require('../services/database.js');


const baseQuery = 
 `SELECT *
  FROM ServiciosSalud`;
 
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
 `insert into ServiciosSalud (
    id,
    nombre,
    tipo
  ) values (
    :id,
    :nombre,
    :tipo
  )`;

async function create(emp) {
  const servicioSalud = Object.assign({}, emp);
  if (!servicioSalud.id){
    //si el objeto no tiene ID Asociado saca el siguiente valor de la secuencia de SQL para asignarlo.
    const genIdRes = await database.simpleExecute("SELECT sq_EpsAndes.NEXTVAL FROM dual", {});
    servicioSalud.id = genIdRes.rows[0].NEXTVAL;
  }  
  const result = await database.simpleExecute(createSQL, servicioSalud);
  console.log(result);  
  return servicioSalud;
}
 
module.exports.create = create;