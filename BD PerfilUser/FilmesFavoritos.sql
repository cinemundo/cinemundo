CREATE TABLE FilmesFavoritos (
  id_filmesfavoritos INT PRIMARY KEY,
  nome_filme VARCHAR NOT NULL,
  genero_filme varchar,
  ano_filme date 
);

ALTER TABLE filmesfavoritos
ADD CONSTRAINT fk_id_perfiluser FOREIGN KEY (id_filmesfavoritos) REFERENCES perfiluser(id_perfiluser);

insert into filmesfavoritos
(id_filmesfavoritos, nome_filme, genero_filme, ano_filme)
VALUES
(1,'365 Dias', 'Erótico Romântico', '20200207'),
(2,'Monstros S/A', 'Desenho', '20011102'),
(3,'Enola Holmes', 'Mistério', '20200923'),
(4,'Batman, o Cavaleiro das Trevas', 'Ação', '20080718'),
(5,'O Senhor dos Anéis: As Duas Torres', 'Aventura', '20021227' );


select * from filmesfavoritos;


select * from filmesfavoritos inner JOIN perfiluser
on perfiluser.id_perfiluser = filmesfavoritos.id_filmesfavoritos;

select nome_filme, ano_filme from filmesfavoritos right join perfiluser
on filmesfavoritos.id_filmesfavoritos = perfiluser.id_perfiluser
