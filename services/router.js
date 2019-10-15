const express = require('express');
const router = new express.Router();


/*
    Objetos
*/
const EPS = require('../controllers/EPS.js');
const IPS = require('../controllers/IPS.js');
const Contrata = require('../controllers/Contrata.js');
const Usuario = require('../controllers/Usuario.js');
const ServicioSalud = require('../controllers/ServicioSalud.js');
const EpsServicios = require('../controllers/EpsServicios.js');
const ServiciosOfrecidos = require('../controllers/ServiciosOfrecidos.js');
const Consulta = require('../controllers/Consulta.js');
const Terapias = require('../controllers/Terapias.js');
const ConsultaUrgencias = require('../controllers/ConsultaUrgencias.js');
const ExamenDiagnostico = require('../controllers/ExamenDiagnostico.js');
const ProcedimientoEspecializado = require('../controllers/ProcedimientoEspecializado.js');
const Hozpitalizado = require('../controllers/Hozpitalizado.js');
const Cita = require('../controllers/Cita.js');
const Control = require('../controllers/Control.js');
const Orden = require('../controllers/Orden.js');
const Recetas = require('../controllers/Recetas.js');
const Medicamento = require('../controllers/Medicamento.js');
const MedicamentoReceta = require('../controllers/MedicamentoReceta.js');
/**
    Objetos de consulta y preparación
 */
const utilities = require('../controllers/utils.js');
/**************
 *  
 **************/

 router.route('/utils')
    .get(utilities.get)
    .post(utilities.post);

//EPS
router.route('/EPS/:id?')
    .get(EPS.get)
    .post(EPS.post)
    .put(EPS.put)
    .delete(EPS.delete);
//IPS
router.route('/IPS/:id?')
    .get(IPS.get)
    .post(IPS.post)
    .put(IPS.put)
    .delete(IPS.delete)
//Contrata
router.route('/Contrata/:id?')
    .get(Contrata.get)
    .post(Contrata.post)
    .put(Contrata.put)
    .delete(Contrata.delete)
//Usuario
router.route('/Usuario/:userName?')
    .get(Usuario.get)
    .post(Usuario.post)
    .put(Usuario.put)
    .delete(Usuario.delete)
//ServicioSalud
router.route('/ServicioSalud/:id?')
    .get(ServicioSalud.get)
    .post(ServicioSalud.post)
    .put(ServicioSalud.put)
    .delete(ServicioSalud.delete)
//EpsServicios
router.route('/EpsServicios/:id?')
    .get(EpsServicios.get)
    .post(EpsServicios.post)
    .put(EpsServicios.put)
    .delete(EpsServicios.delete)
//ServiciosOfrecidos
router.route('/ServiciosOfrecidos/:id?')
    .get(ServiciosOfrecidos.get)
    .post(ServiciosOfrecidos.post)
    .put(ServiciosOfrecidos.put)
    .delete(ServiciosOfrecidos.delete)
//Consulta
router.route('/Consulta/:id?')
    .get(Consulta.get)
    .post(Consulta.post)
    .put(Consulta.put)
    .delete(Consulta.delete)
//Terapias
router.route('/Terapias/:id?')
    .get(Terapias.get)
    .post(Terapias.post)
    .put(Terapias.put)
    .delete(Terapias.delete)
//ConsultaUrgencias
router.route('/ConsultaUrgencias/:id?')
    .get(ConsultaUrgencias.get)
    .post(ConsultaUrgencias.post)
    .put(ConsultaUrgencias.put)
    .delete(ConsultaUrgencias.delete)
//ExamenDiagnostico
router.route('/ExamenDiagnostico/:id?')
    .get(ExamenDiagnostico.get)
    .post(ExamenDiagnostico.post)
    .put(ExamenDiagnostico.put)
    .delete(ExamenDiagnostico.delete)
//ProcedimientoEspecializado
router.route('/ProcedimientoEspecializado/:id?')
    .get(ProcedimientoEspecializado.get)
    .post(ProcedimientoEspecializado.post)
    .put(ProcedimientoEspecializado.put)
    .delete(ProcedimientoEspecializado.delete)
//Hozpitalizado
router.route('/Hozpitalizado/:id?')
    .get(Hozpitalizado.get)
    .post(Hozpitalizado.post)
    .put(Hozpitalizado.put)
    .delete(Hozpitalizado.delete)
//Cita
router.route('/Cita/:id?')
    .get(Cita.get)
    .post(Cita.post)
    .put(Cita.put)
    .delete(Cita.delete)
//Control
router.route('/Control/:id?')
    .get(Control.get)
    .post(Control.post)
    .put(Control.put)
    .delete(Control.delete)
//Orden
router.route('/Orden/:id?')
    .get(Orden.get)
    .post(Orden.post)
    .put(Orden.put)
    .delete(Orden.delete)
//Recetas
router.route('/Recetas/:id?')
    .get(Recetas.get)
    .post(Recetas.post)
    .put(Recetas.put)
    .delete(Recetas.delete)
//Medicamento
router.route('/Medicamento/:id?')
    .get(Medicamento.get)
    .post(Medicamento.post)
    .put(Medicamento.put)
    .delete(Medicamento.delete)
//MedicamentoReceta
router.route('/MedicamentoReceta/:id?')
    .get(MedicamentoReceta.get)
    .post(MedicamentoReceta.post)
    .put(MedicamentoReceta.put)
    .delete(MedicamentoReceta.delete)


module.exports = router;