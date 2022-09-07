CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companeros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;   -- para llamar visible la tabla aprenderse comando

INSERT INTO cohorte_16 (nombre, apellido, companeros, direccion, proyecto)
VALUES ('Victor', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java'),
('Jonathan', 'Vazquez', 6, 'CDMX', 'JavaScript'),
('Raul', 'Sanchez', 4, 'Guadalajara', 'JavaScript'),
('Maria', 'Vargas', 3, 'Estado de México', 'Java'),
('Magali', 'Quiroz', 7, 'CDMX', 'JavaScript');

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16. -- este comando borra por dato especifico
WHERE alumno_id = 3;

SELECT * FROM cohorte_16;   -- DELETE para datos, DROP para la estructura (BORRAR)

UPDATE cohorte_16   -- para actualizar algun dato de la tabla
SET nombre = 'Marina',
apellido = 'Pardo'
WHERE alumno_id =5; -- WHERE especifica el lugar de la tabla donde se ejecutara el accion 

SELECT nombre, apellido   -- seleccionamos especificamene el valor o columna
FROM cohorte_16;

SELECT nombre FROM cohorte_16 WHERE nombre = 'Victor';    -- SELECT no modifica solo lee

SELECT * FROM cohorte_16;

SELECT nombre, apellido,companeros FROM cohorte_16 ORDER BY companeros DESC;

/* ASC acendente - DECS decendente. en conjunto con el valir de referencia y ORDER BY*/






