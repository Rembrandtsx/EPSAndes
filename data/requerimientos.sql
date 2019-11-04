/* RFC1
    Dado a que no se manejaron fechas por el momento no se puede completar eñ requerimiento en rangos de tiempo.
*/

SELECT count(*) as Servicios_Prestados, ips.nombre as Nombre_IPS
FROM ServiciosOfrecidos SO, IPS ips
WHERE SO.idIPS = ips.id
GROUP BY ips.id, ips.nombre;

/* RFC2 */

SELECT count(*) as Servicios_Prestados, ips.nombre as Nombre_IPS
FROM ServiciosOfrecidos SO, IPS ips
WHERE SO.idIPS = ips.id AND ROWNUM <= 20
GROUP BY ips.id, ips.nombre
ORDER BY count(*) DESC;

/* RFC 3*/
/* RFC 4*/
/* RFC 5*/
/* RFC 6*/
    /*Fecha Mas a menos Solicitudes*/
SELECT count(*) as Cantidad, cita.fechaSolicitud
FROM CITA cita, ServiciosSalud serv 
WHERE serv.id = '1' AND cita.idServicio = serv.id
Group By cita.fechaSolicitud, cita.fechaSolicitud
Order BY count(cita.fechaSolicitud) DESC;
    /*Fecha Menos a mas Solicitudes*/
SELECT count(*) as Cantidad, cita.fechaSolicitud
FROM CITA cita, ServiciosSalud serv 
WHERE serv.id = '1' AND cita.idServicio = serv.id
Group By cita.fechaSolicitud, cita.fechaSolicitud
Order BY count(cita.fechaSolicitud) DESC;
    /*Fecha Mas a menos actividad*/
SELECT count(*) as Cantidad, cita.fechaSolicitud
FROM CITA cita, ServiciosSalud serv 
WHERE serv.id = '1' AND cita.idServicio = serv.id AND cita.ingreso = 1
Group By cita.fechaSolicitud, cita.fechaSolicitud
Order BY count(cita.fechaSolicitud) DESC;
/* RFC 7*/
SELECT count(*) as CantidadVisitas,cita.idAfiliado as Afiliado
FROM Cita cita, Usuario afiliado, ServiciosSalud serv
WHERE cita.idAfiliado = afiliado.userName AND cita.ingreso = 1
GROUP BY cita.idAfiliado, cita.idServicio
HAVING count(cita.idServicio) > 3 AND count(cita.fecha) >12
ORDER BY count(*) DESC;
/* RFC 8*/
