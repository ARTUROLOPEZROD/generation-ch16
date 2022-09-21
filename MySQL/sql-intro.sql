-- SHOW DATABASES;     COMENTARIO DE UNA LINEA
/*
BLOQUE DE COMENTARIOS
*/

CREATE DATABASE tienda;

USE tienda;

DROP DATABASE tienda;

CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);


DROP TABLE clientes;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '5555555555', 'Comala'),
('Raul', 'Sanchez', '5555555555', 'Guadalajara'),
('Victor', 'Fernandez', '5555555555', 'Hidalgo');


SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 4;




