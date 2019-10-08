CREATE TABLE EPS
(
    id int NOT NULL PRIMARY KEY,
    nombre varchar(255) NOT NULL,
    localizacion varchar(255) NOT NULL
);

CREATE TABLE IPS
(
  id integer NOT NULL PRIMARY KEY,
  nombre varchar(255) NOT NULL,
  localizacion varchar(255) NOT NULL
);

CREATE TABLE Contrata
(
  idEPS int NOT NULL,
  idIPS int NOT NULL,
  PRIMARY KEY(idEPS, idIPS),
  CONSTRAINT IPS_CONTRATA_FK  FOREIGN KEY (idEPS) REFERENCES EPS(id),
  CONSTRAINT EPS_CONTRATA_FK  FOREIGN KEY (idIPS) REFERENCES IPS(id)
);

CREATE TABLE Usuario
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  nombre varchar(255) NOT NULL,
  password varchar(255) NOT NULL
);

CREATE TABLE Gerente
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  CONSTRAINT Usuario_FK FOREIGN KEY (userName) REFERENCES Usuario(userName),
  idTrabajo int NOT NULL,
  idEPS int NOT NULL,
  CONSTRAINT Usuario_GERENTE_FK FOREIGN KEY (idEPS) REFERENCES EPS(id),
);

CREATE TABLE Administrador
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  idEPS int NOT NULL ,
  CONSTRAINT Usuario_GERENTE_FK FOREIGN KEY (userName) REFERENCES Usuario(userName),
  CONSTRAINT IPS_GERENTE_FK FOREIGN KEY (idEPS) REFERENCES EPS(id)

);

CREATE TABLE Recepcionista
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  idTrabajo int NOT NULL,
  idEPS int NOT NULL,
  CONSTRAINT Usuario_RECEPCIONISTA_FK FOREIGN KEY (userName) REFERENCES Usuario(userName),
  CONSTRAINT IPS_RECEPCIONISTA_FK FOREIGN KEY (idEPS) REFERENCES EPS(id)

);

CREATE TABLE Afiliado
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  idAfiliado int NOT NULL,
  idEPS int NOT NULL,
  CONSTRAINT Usuario_AFILIADO_FK FOREIGN KEY (userName) REFERENCES Usuario(userName),
  CONSTRAINT EPS_AFILIADO_FK FOREIGN KEY (idEPS) REFERENCES EPS(id)

);

CREATE TABLE Medico
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  idAfiliado int NOT NULL,
  idEPS int NOT NULL,
  CONSTRAINT Usuario_MEDICO_FK FOREIGN KEY (userName) REFERENCES Usuario(userName),
  CONSTRAINT EPS_MEDICO_FK FOREIGN KEY (idEPS) REFERENCES EPS(id)
);

CREATE TABLE ServiciosSalud
(
  nombre varchar(255) NOT NULL ,
  tipo varchar(255) NOT NULL ,
  id int NOT NULL PRIMARY KEY

);

CREATE TABLE  EpsServicios
(
  idEPS int NOT NULL,
  idServicio  int NOT NULL,
  PRIMARY KEY(idEPS, idServicio),
  CONSTRAINT ServiciosSalud_EPSSERVCIOS_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id),
  CONSTRAINT EPS_EPSSERVICIOS_FK FOREIGN KEY (idEPS) REFERENCES EPS(id)

);

CREATE TABLE ServiciosOfrecidos
(
  idIPS int,
  idServicio int PRIMARY KEY ,
  horaInicio varchar(255) NOT NULL,
  horaFin varchar(255) NOT NULL,
  Capacidad int NOT NULL,
  CONSTRAINT Usuario_SERVICIOSOFRECIDOS_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id),
  CONSTRAINT IPS_SERVICIOSOFRECIDOS_FK FOREIGN KEY (idIPS) REFERENCES IPS(id)

);

CREATE TABLE Consulta
(
  idServicio int PRIMARY KEY,
  tipo varchar(255) NOT NULL,
  fecha varchar(255) NOT NULL,
  descubrimiento varchar(255) NOT NULL,
  CONSTRAINT ServiciosSalud_CONSULTA_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Terapias
(
  idServicio int PRIMARY KEY,
  tipo varchar(255) NOT NULL,
  numeroSesiones int NOT NULL,
  CONSTRAINT ServiciosSalud_TERAPIAS_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE ConsultaUrgencias
(
  idServicio int PRIMARY KEY,
  triage int NOT NULL,
  fecha varchar(255) NOT NULL,
  estado varchar(255) NOT NULL,
  CONSTRAINT ServiciosSalud_URGENCIAS_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE ExamenDiagnostico
(
  idServicio int PRIMARY KEY,
  fecha varchar(255) NOT NULL,
  diagnostico varchar(255) NOT NULL,
  CONSTRAINT ServiciosSalud_EXAMENDIAG_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE ProcedimientoEspecializado
(
  idServicio int PRIMARY KEY,
  fecha varchar(255) NOT NULL,
  descripcion varchar(255) NOT NULL,
  duracionHoras int NOT NULL,
  CONSTRAINT ServiciosSalud_PE_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Hozpitalizado
(
  idServicio int PRIMARY KEY,
  tipo varchar(255) NOT NULL,
  fecha varchar(255) NOT NULL,
  CONSTRAINT ServiciosSalud_H_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Cita
(
  userNameAfiliado varchar(255) NOT NULL,
  userNameMedico varchar(255) NOT NULL,
  ServicioAsociado int,
  id int PRIMARY KEY,
  CONSTRAINT Afiliado_CITA_FK FOREIGN KEY (userNameAfiliado) REFERENCES Afiliado(userName),
  CONSTRAINT Medico_CITA_FK FOREIGN KEY (userNameMedico) REFERENCES Medico(userName)

);

CREATE TABLE Control
(
  idServicio int PRIMARY KEY,
  fecha varchar(255) NOT NULL,
  frecuencia int NOT NULL,
  observaciones varchar(255) NOT NULL,
  CONSTRAINT ServiciosSalud_CONTROL_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Orden
(
  idServicioCreador int,
  tipo varchar(255) NOT NULL,
  descubrimiento varchar(255) NOT NULL,
  idServicioSolicitado int PRIMARY KEY,
  CONSTRAINT ServiciosSalud_ORDENC_FK FOREIGN KEY (idServicioCreador) REFERENCES ServiciosSalud(id),
  CONSTRAINT ServiciosSalud_ORDENS_FK FOREIGN KEY (idServicioSolicitado) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Recetas
(
  idServicioCreador int,
  userNameAfiliado varchar(255) NOT NULL,
  fechaCreada varchar(255) NOT NULL,
  id int PRIMARY KEY,
  CONSTRAINT ServiciosSalud_RECETAS_FK FOREIGN KEY (idServicioCreador) REFERENCES ServiciosSalud(id)

);

CREATE TABLE Medicamento
(
  nombre varchar(255) NOT NULL,
  descripcion varchar(255) NOT NULL,
  idMedicamento int PRIMARY KEY
);

CREATE TABLE MedicamentoReceta
(
  idMedicamento int,
  idReceta int,
  frecuenciaHora int NOT NULL,
  fechaInicio varchar(255) NOT NULL,
  fechaFin varchar(255) NOT NULL,
  cantidad int NOT NULL,
  PRIMARY KEY(idMedicamento, idReceta),
  CONSTRAINT Medicamento_MR_FK FOREIGN KEY (idMedicamento) REFERENCES Medicamento(idMedicamento),
  CONSTRAINT Reseta_MR_FK FOREIGN KEY (idReceta) REFERENCES Recetas(id)
);