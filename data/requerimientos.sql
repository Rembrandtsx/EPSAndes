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