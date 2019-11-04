const database = require('../services/database.js');
 
const baseQuery = 
 `SELECT *
  FROM Cita`;
 
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

const createSQL =
 `insert into Cita (
    idAfiliado,
    fechaSolicitud,
    fecha,
    id,
    ingreso,
    idMedico,
    idServicio,
    horaIni,
    horaFin,
    idOrganizador
  ) values (
    :idAfiliado,
    :fechaSolicitud,
    :fecha,
    :id,
    :ingreso,
    :idMedico,
    :idServicio,
    :horaIni,
    :horaFin,
    :idOrganizador
  )`;

async function create(emp) {
  const Cita = Object.assign({}, emp);
  if (!Cita.id){
    //si el objeto no tiene ID Asociado saca el siguiente valor de la secuencia de SQL para asignarlo.
    const genIdRes = await database.simpleExecute("SELECT sq_EPSAndes.NEXTVAL FROM dual", {});
    Cita.id = genIdRes.rows[0].NEXTVAL;
  }  
  const result = await database.simpleExecute(createSQL, Cita);
  console.log(result);  
  return Cita;
}
 
module.exports.create = create;


async function createAsync(emp) {
  try{
  const Cita = Object.assign({}, emp);
  if (!Cita.id){
    //si el objeto no tiene ID Asociado saca el siguiente valor de la secuencia de SQL para asignarlo.
    const genIdRes = await database.simpleExecute("SELECT sq_CitaAndes.NEXTVAL FROM dual", {});
    Cita.id = genIdRes.rows[0].NEXTVAL;
  }  
  const resultado = await database.execute(createSQL, Cita);
  database.commit(resultado.conn);  
  return Cita;
  }catch(e){
    console.log(e);
  }
 
}
 
module.exports.createAsync = createAsync;

const updateSql =
 `UPDATE Cita
  SET idAfiliado = :idAfiliado,
  fechaSolicitud = :fechaSolicitud,
  fecha = :fecha,
  id = :id,
  ingreso = :ingreso,
  idMedico = :idMedico,
  idServicio = :idServicio,
  horaIni = :horaIni,
  horaFin = :horaFin,
  idOrganizador = :idOrganizador 
  WHERE id = :id`;
 
async function update(emp) {
  const Cita = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, Cita);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    console.log(result);
    return Cita;
  } else {
    return null;
  }
}
 
module.exports.update = update;




 
module.exports.find = find;


const baseQueryCitaCamp = 
 `SELECT *
  FROM Cita 
  WHERE idOrganizador = :idOrganizador 
  AND horaIni IS NULL 
  AND idAfiliado = :idOrganizador`;
 
async function findCitaCamp(values) {
  let query = baseQueryCitaCamp;
  const binds = {};
  binds.idOrganizador = values.idOrganizador
  console.log(binds);
  
  const result = await database.simpleExecute(query, binds);
  console.log(result.rows);
  
  return result.rows[0];
}
module.exports.findCitaCamp = findCitaCamp;