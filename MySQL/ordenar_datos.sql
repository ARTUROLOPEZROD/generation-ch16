USE world;

SELECT * FROM country;

SELECT Name, population FROM country ORDER BY population DESC;  -- select especifica lo que queremos visualizar

SELECT Name, population FROM country ORDER BY population ASC;    -- desc y asc para mostrar acendente o decendente

SELECT Name, population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias

SELECT 5 + 5;  -- son como variables en lenguajes de programacion se les puede dar un nombre

SELECT Name AS Nombre_de_pais, population AS 'Población del país' FROM country ORDER BY nombre_de_pais DESC;     -- AS para asignar nombre o alias

SELECT DISTINCT Continent FROM country; --  basicamente DISTINCT filtra los valores repetidos

 -- WHERE cláusula, si no se cumple, no se ejecuta la consulta pedida
-- < >  <=  >= != =

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC ;

SELECT * FROM country WHERE Continent != 'North America';  -- != tomo menos norte america

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;

-- Between  Entre se utiliza junto con WHERE

-- Between
-- Se utilizar junto con WHERE

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000;

-- OR / AND != --- logicos

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';

-- Operador IN

SELECT * FROM country WHERE Continent IN ('Asia', 'NortH America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'NortH America') ORDER BY Continent;

-- LIKE sirve para buscar un patrón en especifico

-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter

SELECT Name FROM country WHERE Name LIKE '%as%';

SELECT * FROM country WHERE Name LIKE '%and%';

SELECT * FROM country WHERE Name LIKE '%e__a';

SELECT * FROM country WHERE continent LIKE 'asia';






