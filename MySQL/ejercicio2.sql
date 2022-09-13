
SELECT * FROM film_actor;

-- el titulo de las peliculas con el idioma que tienen
SELECT title, name FROM film, language;

-- cuantas peliculas estan hechas en un mismo idioma?
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;

-- monto por dia en especifico
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

-- Las direcciones de cada país:
SELECT address, district FROM address ORDER BY district ASC;









