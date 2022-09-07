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





