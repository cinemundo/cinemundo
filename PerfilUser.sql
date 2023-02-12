CREATE TABLE PerfilUser (
  id_perfiluser INT PRIMARY KEY,
  instagram VARCHAR,
  nome VARCHAR NOT NULL,
  sobrenome varchar NOT NULL,
  membro_desde date NOT NULL,
  pontuação_quiz INT,
  análises_concluídas INT,
  sobre_mim varchar,
  id_filmesfavoritos INT,
  id_seriesfavoritas INT,
  id_notas INT
  );

insert into perfiluser
(id_perfiluser,instagram, nome, sobrenome, membro_desde, pontuação_quiz, análises_concluídas, sobre_mim, 
id_filmesfavoritos,id_seriesfavoritas, id_notas)
VALUES
(1, '@queenelizabeth','Rainha', 'Elizabeth', '19300101', 588, 100, 'Simplesmente Rainha', 1, 3, 5),
(2, '@walterwhite','Walter', 'White', '20080120', 457, 80, 'Professor de Química', 2, 4, 1),
(3,'@wednesdayaddams','Wednesday', 'Addams', '20221014', 605,75, 'Caçula da Família', 3, 5, 2),
(4,'@ragnarlothbrok','Ragnar', 'Lothbrok', '20130707', 44, 60, 'Vikings Master', 4, 1, 3),
(5,'@jonsnow','Jon', 'Snow', '20081121', 32, 55, 'Bastardo', 5, 2, 4);

select * from perfiluser;

ALTER TABLE PerfilUser
ADD CONSTRAINT fk_id_filmesfavoritos FOREIGN KEY (id_perfiluser) REFERENCES filmesfavoritos(id_filmesfavoritos);
ALTER TABLE PerfilUser
ADD CONSTRAINT fk_id_seriesfavoritas FOREIGN KEY (id_perfiluser) REFERENCES SeriesFavoritas(id_seriesfavoritas);
ALTER TABLE PerfilUser
ADD CONSTRAINT fk_id_notas FOREIGN KEY (id_perfiluser) REFERENCES notas(id_notas);


select * from perfiluser left join seriesfavoritas
on perfiluser.id_perfiluser = seriesfavoritas.id_seriesfavoritas;