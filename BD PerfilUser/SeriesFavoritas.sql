CREATE TABLE SeriesFavoritas (
  id_seriesfavoritas INT PRIMARY KEY,
  nome_serie VARCHAR NOT NULL,
  genero_serie varchar,
  total_temporadas INT Not NULL
  );

ALTER TABLE SeriesFavoritas
ADD CONSTRAINT fk_id_perfiluser FOREIGN KEY (id_seriesfavoritas) REFERENCES perfiluser(id_perfiluser);

insert into SeriesFavoritas
(id_seriesfavoritas, nome_serie, genero_serie, total_temporadas)
VALUES
(1,'The Walking Dead', 'Ação', 11),
(2,'The Crown', 'Drama', 5),
(3,'Stranger Things', 'Aventura', 5),
(4,'Game Of Thrones', 'Drama', 8 ),
(5,'Breaking Bad', 'Ação', 5);

select * from SeriesFavoritas;

select nome_serie, genero_serie from seriesfavoritas inner JOIN perfiluser
on perfiluser.id_perfiluser = seriesfavoritas.id_seriesfavoritas;