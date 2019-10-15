const database = require('../services/database.js');
 
const baseQuery = 
 `SELECT *
  FROM ServiciosOfrecidos`;
 
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
 `insert into ServiciosOfrecidos (
    idIPS,
    idServicio,
    horaInicio,
    horaFin,
    capacidad,
    id
  ) values (
    :idIPS,
    :idServicio,
    :horaInicio,
    :horaFin,
    :capacidad,
    :id
  )`;

async function create(emp) {
  const servicioSalud = Object.assign({}, emp);
  if (!servicioSalud.id){
    //si el objeto no tiene ID Asociado saca el siguiente valor de la secuencia de SQL para asignarlo.
    const genIdRes = await database.simpleExecute("SELECT sq_EpsAndes.NEXTVAL FROM dual", {});
    servicioSalud.id = genIdRes.rows[0].NEXTVAL;
  }  
  console.log(servicioSalud);
  
  const result = await database.simpleExecute(createSQL, servicioSalud);
  console.log(result);  
  return servicioSalud;
}
 
module.exports.create = create;