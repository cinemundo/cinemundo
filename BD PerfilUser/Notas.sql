CREATE TABLE Notas (
  id_notas INT PRIMARY KEY,
  nome_filmeserie VARCHAR NOT NULL,
  nota INT not null
  );

ALTER TABLE Notas
ADD CONSTRAINT fk_id_perfiluser FOREIGN KEY (id_notas) REFERENCES perfiluser(id_perfiluser);

insert into notas
(id_notas,nome_filmeserie, nota)
VALUES
(1,'O Poderoso Chefão - Parte II', 2),
(2,'E.T.: O Extra-terrestre', 4),
(3,'Corra', 5),
(4,'O Excorcismo de Emily Rose', 3 ),
(5,'Star Wars', 1);

select * from notas
