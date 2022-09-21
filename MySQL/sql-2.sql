USE tienda;

SELECT * FROM clientes;

CREATE TABLE compra (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   -- para usar nombres con espacios de una comillas invertidas
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,             -- 5,2 5 total de digitos 2 numero decimales 
cantidad_productos INT NOT NULL
);

SELECT * FROM compra;

-- Agregar llave foranea

ALTER TABLE compra                           -- fk. se refiere a forean key
ADD CONSTRAINT fk_clientes_compra                           -- constraint hace referencia a una regla o restriccion a seguir
FOREIGN KEY (cliente_id)                                  -- comando para la llave foranea
REFERENCES clientes (cliente_id);

-- Borrar llave foranea

ALTER TABLE compra
DROP FOREIGN KEY fk_clientes_compra;

-- insertar dato 

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (1, '2022-09-06', 300.50, 2);

SELECT * FROM compra;

DROP TABLE compra;







