const oracledb = require('oracledb');
const dbConfig = require('../configs/db-info.js');


/*****************
 * 
 * Database Functions
 * 
*******************/
// Función con AutoCommit
async function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
      let conn;
   
      opts.outFormat = oracledb.OBJECT;
      opts.autoCommit = true;
   
      try {
        conn = await oracledb.getConnection(dbConfig.hrPool).catch(console.log);

   
        const result = await conn.execute(statement, binds, opts);
   
        resolve(result);
      } catch (err) {
        console.log(err);
        
        reject(err);
      } finally {
        if (conn) { // conn assignment worked, need to close
          try {
            await conn.close();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }
   
  module.exports.simpleExecute = simpleExecute;

// Funcion sin autocommit
async function execute(statement, binds = [], opts = {}){
  return new Promise(async (resolve, reject) => {
    let conn;
    opts.outFormat = oracledb.OBJECT;
    try {
      conn = await oracledb.getConnection(dbConfig.hrPool).catch(console.log);
      const result = await conn.execute(statement, binds, opts);
      if(result.contains("Error")){
        console.log(result)
        console.log("entre");
        
        throw new Error(result);
      }
      let finish= {
        result: result,
        conn: conn
      }
      resolve(finish);
    } catch (err) {
      console.log(err+"hola");
      reject(err);
    }
  });
}
module.exports.execute= execute;


//Funcion commit
async function commit(connection){
  return new Promise(async (resolve, reject) => {
    let conn = connection; 
    try {
      conn.commit((err)=> new Error('Error:'+err));
    } catch (err) {
      console.log(err);
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}
module.exports.commit= commit;