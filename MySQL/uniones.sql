USE tienda;

 -- Inner Join
 -- Explícita
 
 SELECT * 
 FROM clientes
 INNER JOIN compra
 ON clientes.cliente_id = compra.cliente_id;
 
 SELECT
 clientes.cliente_id,   -- el orden al llamar las columnas si influye en su impresion
 clientes.nombre,
 compra.fecha_compra
 FROM clientes
 INNER JOIN compra
 ON clientes.cliente_id = compra.cliente_id;
 
 -- Uníon implícita
 
 SELECT *
 FROM clientes,compra
 WHERE clientes.cliente_id = compra.cliente_id;  -- WHERE condiciona a lo que mostrara 
 
 
 -- LEFT JOIN
 
 SELECT *
 FROM clientes
 LEFT JOIN compra
 ON clientes.cliente_id = compra.cliente_id; 
 
 -- RIGHT JOIN
 SELECT *
 FROM clientes
 RIGHT JOIN compra
 ON clientes.cliente_id = compra.cliente_id; 
 
 
 -- Mostrar la base de datos de cada pais
 
 USE Sakila;
 /*
 address city_id / address
 city - city_id  / city / countri_id
 country - country_id / country
 */
 
 SELECT 
 address.address,
 city.city,
 city.country_id
 FROM address
 INNER JOIN city
 ON address.city_id = city.city_id;
 
 
SELECT 
country.country AS Pais,
city.city AS Ciudad,
 address.address AS Direccion
 FROM country
 INNER JOIN city ON city.country_id = country.country_id
 INNER JOIN address ON address.city_id = city.city_id;
 
 
 
 
 
 
 
 
 
 
 
 
 
 