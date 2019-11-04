CREATE SEQUENCE EPSANDES_SEQUENCE;



CREATE TABLE IPS
(
  id integer NOT NULL PRIMARY KEY,
  nombre varchar(255) NOT NULL,
  localizacion varchar(255) NOT NULL
);



CREATE TABLE Usuario
(
  userName varchar(255) NOT NULL PRIMARY KEY,
  nombre varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  tipo varchar(255) NOT NULL
  
);
ALTER TABLE Usuario
ADD CONSTRAINT check_user_type CHECK (tipo IN ('medico', 'recepcionista', 'afiliado', 'administrador','gerente', 'organizadorcampaña'))


CREATE TABLE EPS
(
    id int NOT NULL PRIMARY KEY,
    nombre varchar(255) NOT NULL,
    localizacion varchar(255) NOT NULL,
    idGerente varchar(255) NOT NULL,
    CONSTRAINT EPS_Gerente FOREIGN KEY (idGerente) REFERENCES Usuario(userName)
);
CREATE TABLE Contrata
(
  idEPS int NOT NULL,
  idIPS int NOT NULL,
  PRIMARY KEY(idEPS, idIPS),
  CONSTRAINT IPS_CONTRATA_FK  FOREIGN KEY (idEPS) REFERENCES EPS(id),
  CONSTRAINT EPS_CONTRATA_FK  FOREIGN KEY (idIPS) REFERENCES IPS(id)
);


CREATE TABLE ServiciosSalud
(
  nombre varchar(255) NOT NULL ,
  tipo varchar(255) NOT NULL ,
  horaIni number(5) NOT NULL,
  horaFin number(5) NOT NULL,
  id int NOT NULL PRIMARY KEY,
  estado varchar(255) NOT NULL
);
alter table ServiciosSalud 
add constraint CK_mantenimiento CHECK(estado in('mantenimiento', 'disponible'));

CREATE TABLE Cita
(
  idAfiliado varchar(255) NOT NULL,
  fechaSolicitud varchar(255) ,
  fecha varchar(255) NOT NULL,
  id int PRIMARY KEY,
  ingreso NUMBER(1) DEFAULT 0,
  idMedico varchar(255) NOT NULL,
  idServicio int NOT NULL,
  horaIni number(5),
  horaFin number(5),
  idOrganizador varchar(255),
  CONSTRAINT Medico_CITA_FK FOREIGN KEY (idMedico) REFERENCES Usuario(userName),
  CONSTRAINT Organizador_Cita_FK FOREIGN KEY (idOrganizador) REFERENCES Usuario(userName),
  CONSTRAINT Servicio_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id),
  CONSTRAINT Afiliado_CITA_FK FOREIGN KEY (idAfiliado) REFERENCES Usuario(userName)
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
  idServicio int,
  capacidad int NOT NULL,
  id int PRIMARY KEY,
  CONSTRAINT Usuario_SERVICIOSOFRECIDOS_FK FOREIGN KEY (idServicio) REFERENCES ServiciosSalud(id),
  CONSTRAINT IPS_SERVICIOSOFRECIDOS_FK FOREIGN KEY (idIPS) REFERENCES IPS(id),
  constraint CK_libros_precio_positivo check (capacidad>=0 )

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
DROP TABLE EPS CASCADE CONSTRAINTS;
DROP TABLE IPS CASCADE CONSTRAINTS;
DROP TABLE Contrata CASCADE CONSTRAINTS;
DROP TABLE Usuario CASCADE CONSTRAINTS;
DROP TABLE ServiciosSalud CASCADE CONSTRAINTS;
DROP TABLE Cita CASCADE CONSTRAINTS;
DROP TABLE EpsServicios CASCADE CONSTRAINTS;
DROP TABLE ServiciosOfrecidos CASCADE CONSTRAINTS;
DROP TABLE Consulta CASCADE CONSTRAINTS;
DROP TABLE Terapias CASCADE CONSTRAINTS;
DROP TABLE ConsultaUrgencias CASCADE CONSTRAINTS;
DROP TABLE ExamenDiagnostico CASCADE CONSTRAINTS;
DROP TABLE ProcedimientoEspecializado CASCADE CONSTRAINTS;
DROP TABLE Hozpitalizado CASCADE CONSTRAINTS;
DROP TABLE Control CASCADE CONSTRAINTS;
DROP TABLE Orden CASCADE CONSTRAINTS;
DROP TABLE Recetas CASCADE CONSTRAINTS;
DROP TABLE Medicamento CASCADE CONSTRAINTS;
DROP TABLE MedicamentoReceta CASCADE CONSTRAINTS;


