USE sakila;

SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;   -- AS '' para darle añlias al nombre de la fila

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;   --  para consulta de datos dentro de otra base de datos

-- Cantidad de ventas que tuvo el trabajador 2 conn WHERE

SELECT COUNT(*) FROM payment WHERE staff_id = 2;  -- COUNT cuenta todos los elementos de una tabla
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- cantidad de clientes distintos

SELECT COUNT(DISTINCT customer_id) FROM payment;   -- DISTINCT cuenta la cantidad de valores distintos de una tabla

/*
SUM()
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;  -- suma el total del dato de la tabla solo valores numericos

SELECT SUM(payment_date) AS 'Total de rentas' FROM payment;  -- aqui suma las fechas _date en segundos 

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id =2;


-- ¿cual cliente realizo mas rentas?

SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

-- GROUP BY Agrupa solo si se usa con SUM, AVG Y COUNT,  pero omite los valores repetidos
-- ORDER BY. ordena segun la columna o funcion que le indiquemos ASC / DESC  

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cual cliente gastó mas?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total  DESC;

-- AVG() - REGRESA EL PROMEDIO
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿cual cliente gasto mas enn promedio?

SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) ASC;












