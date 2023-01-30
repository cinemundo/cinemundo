// Dentro dos arrays, na propriedade "numero" a letra no final do código representa o nível de dificuldade da pergunta.
// Ex.: 1F (fácil)



let Friends = [
    {numero: "1F",
     pergunta: "Qual é o nome do personagem principal masculino em Friends?",
     a: "Ross Geller",
     b: "Chandler Bing",
     c: "Joey Tribbiani",
     d: "Phoebe Buffay",
     respCorreta: "a"
    },
    {numero: "2F",
     pergunta: "Qual é o nome do personagem que Ross tem um relacionamento romântico com a maior parte da série?",
     a: "Rachel Green",
     b: "Monica Geller",
     c: "Phoebe Buffay",
     d: "Janice Litman",
     respCorreta: "a"
    },
    {numero: "3F",
     pergunta: "Qual é o nome do personagem que é dono do café Central Perk?",
     a: "Gunther",
     b: "Joey Tribbiani",
     c: "Ross Geller",
     d: "Chandler Bing",
     respCorreta: "a"
    },
    {numero: "4F",
     pergunta: "Qual é o nome do ator que interpreta o personagem Chandler Bing?",
     a: "Matt LeBlanc",
     b: "David Schwimmer",
     c: "Matthew Perry",
     d: "Jennifer Aniston",
     respCorreta: "c"
    },
    {numero: "5F",
     pergunta: "Qual é o nome do ator que interpreta o personagem Ross Geller?",
     a: "Matt LeBlanc",
     b: "David Schwimmer",
     c: "Matthew Perry",
     d: "Jennifer Aniston",
     respCorreta: "b"
    },
    {numero: "6F",
     pergunta: "Qual é o nome da atriz que interpreta o personagem Rachel Green?",
     a: "Courteney Cox",
     b: "Lisa Kudrow",
     c: "Jennifer Aniston",
     d: "Christina Applegate",
     respCorreta: "c"
    },
    {numero: "7F",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Rachel na série?",
     a: "Phoebe Buffay",
     b: "Monica Geller",
     c: "Janice Litman",
     d: "Gunther",
     respCorreta: "b"
    },
    {numero: "8F",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Joey na série?",
     a: "Ross Geller",
     b: "Chandler Bing",
     c: "Phoebe Buffay",
     d: "Janice Litman",
     respCorreta: "b"
    },
    {numero: "9F",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Ross na série?",
     a: "Joey Tribbiani",
     b: "Chandler Bing",
     c: "Phoebe Buffay",
     d: "Janice Litman",
     respCorreta: "a"
    },
    {numero: "10F",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Chandler na série?",
     a: "Joey Tribbiani",
     b: "Ross Geller",
     c: "Phoebe Buffay",
     d: "Janice Litman",
     respCorreta: "a"
    },

    {numero: "1M",
     pergunta: "Qual é o nome do personagem que é o irmão de Ross na série?",
     a: "Jack Geller",
     b: "Ben Geller",
     c: "Richard Burke",
     d: "Robert Geller",
     respCorreta: "a"
    },
    {numero: "2M",
     pergunta: "Qual é a profissão de Rachel no início da série?",
     a: "Atriz",
     b: "Médica",
     c: "Garçonete",
     d: "Advogada",
     respCorreta: "c"
    },
    {numero: "3M",
     pergunta: "Quem é o pai de Ross e Monica?",
     a: "Jack Geller",
     b: "Ben Geller",
     c: "Richard Burke",
     d: "Robert Geller",
     respCorreta: "a"
    },
    {numero: "4M",
     pergunta: "Qual é o nome da mãe de Ross e Monica?",
     a: "Susan Geller",
     b: "Judy Geller",
     c: "Janice Geller",
     d: "Carol Willick",
     respCorreta: "b"
    },
    {numero: "5M",
     pergunta: "Qual é o nome do personagem que é o namorado de Phoebe durante a maior parte da série?",
     a: "Mike Hannigan",
     b: "David",
     c: "Gunther",
     d: "Parker",
     respCorreta: "a"
    },
    {numero: "6M",
     pergunta: "Qual é o nome do personagem que é o noivo de Rachel no final da série?",
     a: "Ross Geller",
     b: "Joey Tribbiani",
     c: "Chandler Bing",
     d: "Mike Hannigan",
     respCorreta: "a"
    },
    {numero: "7M",
     pergunta: "Qual é o nome do personagem que é o noivo de Monica no final da série?",
     a: "Ross Geller",
     b: "Joey Tribbiani",
     c: "Chandler Bing",
     d: "Mike Hannigan",
     respCorreta: "c"
    },
    {numero: "8M",
     pergunta: "Qual é o nome do personagem que é o filho de Ross e Rachel?",
     a: "Emma",
     b: "Ben",
     c: "Jack",
     d: "Michael",
     respCorreta: "a"
    },
    {numero: "9M",
     pergunta: "Qual é o nome do personagem que é o filho de Chandler e Monica?",
     a: "Emma",
     b: "Ben",
     c: "Jack",
     d: "Michael",
     respCorreta: "d"
    },
    {numero: "10M",
     pergunta: "Qual é o nome do personagem que é o marido de Phoebe no final da série?",
     a: "Mike Hannigan",
     b: "David",
     c: "Gunther",
     d: "Parker",
     respCorreta: "a"
    },
    {numero: "1D",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Rachel no trabalho durante a série?",
     a: "Mark",
     b: "Tag",
     c: "Paulo",
     d: "Gavin",
     respCorreta: "b"
    },
    {numero: "2D",
     pergunta: "Em qual episódio Ross diz 'Eu sou um amigo' ?",
     a: "The One With Ross's Denial",
     b: "The One With The Prom Video",
     c: "The One Where Ross And Rachel Take A Break",
     d: "The One With The Embryos",
     respCorreta: "a"
    },
    {numero: "3D",
     pergunta: "Qual é o nome do personagem que interpreta o irmão gêmeo de Phoebe?",
     a: "Ursula",
     b: "Frank Jr.",
     c: "Eric",
     d: "Robert",
     respCorreta: "b"
    },
    {numero: "4D",
     pergunta: "Qual é o nome do personagem que é o pai de Phoebe?",
     a: "Frank Buffay",
     b: "Phoebe Sr.",
     c: "Frank Sr.",
     d: "Phoebe Buffay Sr.",
     respCorreta: "a"
    },
    {numero: "5D",
     pergunta: "Em qual episódio Ross usa uma armadura medieval para se divertir com amigos?",
     a: "The One With Ross's Sandwich",
     b: "The One With Ross's Teeth",
     c: "The One With Ross's Wedding",
     d: "The One With Ross's Grant",
     respCorreta: "a"
    },
    {numero: "6D",
     pergunta: "Qual é o nome do personagem que é o irmão de Joey?",
     a: "Frank Tribbiani",
     b: "Gina Tribbiani",
     c: "Mary-Angela Tribbiani",
     d: "Bobbie Tribbiani",
     respCorreta: "d"
    },
    {numero: "7D",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Rachel e que ela se casa no final da série?",
     a: "Barry Farber",
     b: "Joshua Burgin",
     c: "Tag Jones",
     d: "Gavin Mitchell",
     respCorreta: "b"
    },
    {numero: "8D",
     pergunta: "Qual é o nome do personagem que é o chefe de Rachel no Central Perk?",
     a: "Gunther",
     b: "Paolo",
     c: "Mark",
     d: "Tag",
     respCorreta: "a"
    },
    {numero: "9D",
     pergunta: "Qual é o nome do personagem que é o melhor amigo de Ross e que se casa com Emily?",
     a: "Joey Tribbiani",
     b: "Chandler Bing",
     c: "Phoebe Buffay",
     d: "Janice Litman",
     respCorreta: "b"
    },
    {numero: "10D",
     pergunta: "Qual é o nome do personagem que é o chefe de Ross na série?",
     a: "Dr. Leonard Green",
     b: "Dr. Richard Burke",
     c: "Dr. Benjamin Hobart",
     d: "Dr. Roger",
     respCorreta: "a"
    },
]

let Duna = [
    {numero: "1F",
     pergunta: "Em que ano foi lançado o filme Duna?",
     a: "2018",
     b: "2020",
     c: "2019",
     d: "2021",
     respCorreta: "d"
    },
    {numero: "2F",
     pergunta: "Qual é o nome do protagonista do filme?",
     a: "Baron Harkonnen",
     b: "Frank Herbert",
     c: "Duke Leto",
     d: "Paul Atreides",
     respCorreta: "d"
    },
    {numero: "3F",
     pergunta: "Quem é o diretor do filme Duna?",
     a: "Jodorowsky",
     b: "David Lynch",
     c: "Denis Villeneuve",
     d: "Christopher Nolan",
     respCorreta: "c"
    },
    {numero: "4F",
     pergunta: "Qual é a força mental usada pelas Bene Gesserit?",
     a: "Precognição",
     b: "Presciência",
     c: "Intuição",
     d: "Pressentimento",
     respCorreta: "b"
    },
    {numero: "5F",
     pergunta: "Qual é o nome do pai de Paul Atreides?",
     a: "Thufir Hawat",
     b: "Baron Harkonnen",
     c: "Duke Leto",
     d: "Gurney Halleck",
     respCorreta: "c"
    },
    {numero: "6F",
     pergunta: "Qual é a especiaria mais valiosa encontrada em Duna?",
     a: "Melange",
     b: "Amarragem",
     c: "Spice",
     d: "Dune",
     respCorreta: "a"
    },
    {numero: "7F",
     pergunta: "Qual é o nome do filho de Paul Atreides?",
     a: "Ghanima",
     b: "Leto",
     c: "Alia",
     d: "Paul",
     respCorreta: "b"
    },
    {numero: "8F",
     pergunta: "Qual é o nome dos inimigos de Paul Atreides?",
     a: "Fremen",
     b: "Guild",
     c: "Harkonnen",
     d: "Bene Gesserit",
     respCorreta: "c"
    },
    {numero: "9F",
     pergunta: "Qual é o nome do planeta onde se passa a história?",
     a: "Caladan",
     b: "Arrakis",
     c: "Giedi Prime",
     d: "Pandora",
     respCorreta: "b"
    },
    {numero: "10F",
     pergunta: "Qual é o nome do personagem interpretado por Timothee Chalamet?",
     a: "Paul Atreides",
     b: "Duke Leto",
     c: "Baron Harkonnen",
     d: "Thufir Hawat",
     respCorreta: "a"
    },

    {numero: "1M",
     pergunta: "Qual é o nome do personagem interpretado por Rebecca Ferguson?",
     a: "Lady Jessica",
     b: "Ghanima",
     c: "Alia",
     d: "Chani",
     respCorreta: "a"
    },
    {numero: "2M",
    pergunta: "Qual é o nome do planeta natal de Paul Atreides no filme Duna?",
    a: "Arrakis",
    b: "Caladan",
    c: "Giedi Prime",
    d: "Coruscant",
    respCorreta: "b"
    },
    {numero: "3M",
    pergunta: "Qual é o nome do personagem interpretado por Oscar Isaac?",
    a: "Thufir Hawat",
    b: "Baron Vladimir Harkonnen",
    c: "Gurney Halleck",
    d: "Duke Leto Atreides",
    respCorreta: "d"
    },
    {numero: "4M",
    pergunta: "Qual é o nome do livro de Frank Herbert que inspirou o filme?",
    a: "The Children of Dune",
    b: "Dune",
    c: "God Emperor of Dune",
    d: "Heretics of Dune",
    respCorreta: "b"
    },
    {numero: "5M",
    pergunta: "Qual é a habilidade especial do personagem principal, Paul Atreides?",
    a: "Presciência",
    b: "Força sobre-humana",
    c: "Poderes mentais",
    d: "Invisibilidade",
    respCorreta: "a"
    },
    {numero: "6M",
    pergunta: "Qual é o nome da ordem religiosa presente no enredo?",
    a: "Bene Jesuits",
    b: "Bene Tleilax",
    c: "Bene Gesserit",
    d: "Bene Ecm",
    respCorreta: "c"
    },
    {numero: "7M",
    pergunta: "O que é a 'especiaria' que é um recurso muito valioso no planeta Arrakis?",
    a: "é um mineral raro",
    b: "é uma planta com propriedades medicinais",
    c: "é um combustível",
    d: "é uma droga psicoativa",
    respCorreta: "d"
    },
    {numero: "8M",
    pergunta: "Qual personagem é o líder da ordem Bene Gesserit?",
    a: "Lady Jessica",
    b: "Irulan Corrino",
    c: "Reverend Mother Ramallo",
    d: "Gaius Helen Mohiam",
    respCorreta: "d"
    },
    {numero: "9M",
    pergunta: "Qual é o nome do processo pelo qual o personagem principal é treinado para se tornar um líder?",
    a: "Treinamento de mentat",
    b: "Treinamento de combate",
    c: "Treinamento de comando",
    d: "Treinamento de presciência",
    respCorreta: "a"
    },
    {numero: "10M",
    pergunta: "Quem é o líder do grupo Fremen?",
    a: "Paul Atreides",
    b: "Thufir Hawat",
    c: "Stilgar",
    d: "Gurney Halleck",
    respCorreta: "c"
    },

    {numero: "1D",
    pergunta: "Qual é o nome do personagem interpretado por Javier Bardem?",
    a: "Gurney Halleck",
    b: "Stilgar",
    c: "Thufir Hawat",
    d: "Baron Vladimir Harkonnen",
    respCorreta: "b"
    },
    {numero: "2D",
    pergunta: "Qual é a relação entre os personagens Gurney Halleck e Paul Atreides?",
    a: "Gurney é o mentor de Paul",
    b: "Gurney é o irmão de Paul",
    c: "Gurney é o braço-direito de Paul",
    d: "Gurney é o inimigo de Paul",
    respCorreta: "c"
    },
    {numero: "3D",
    pergunta: "Qual é o nome do personagem interpretado por Zendaya no filme Duna?",
    a: "Irulan",
    b: "Chani",
    c: "Alia",
    d: "Jessica",
    respCorreta: "b"
    },
    {numero: "4D",
    pergunta: "Qual é o objetivo final dos personagens Bene Gesserit no filme Duna?",
    a: "Encontrar o escolhido",
    b: "Controlar o Império",
    c: "Controlar a especiaria",
    d: "Destruir o Império",
    respCorreta: "a"
    },
    {numero: "5D",
    pergunta: "Qual é o objetivo principal do personagem Paul Atreides?",
    a: "Extinguir a resistência local",
    b: "Vingar a morte de seu pai",
    c: "Liderar a rebelião contra o Império",
    d: "Controlar a produção da especiaria Melange",
    respCorreta: "d"
    },
]

let TheWhale = [
    {numero: "1F",
     pergunta: 'Qual é o nome do diretor do filme "The Whale"?',
     a: "James Cameron",
     b: "Darren Aronofsky",
     c: "Charlie Kaufman",
     d: "Charlie Chaplin",
     respCorreta: "b"
    },
    {numero: "2F",
     pergunta: 'Qual é o nome do ator principal do filme "The Whale"?',
     a: "Tom Cruise",
     b: "Johnny Depp",
     c: "Will Smith",
     d: "Brendan Fraser",
     respCorreta: "d"
    },
    {numero: "3F",
     pergunta: 'Qual é o gênero do filme "The Whale"?',
     a: "Comédia",
     b: "Ação",
     c: "Drama",
     d: "Fantasia",
     respCorreta: "c"
    },
    {numero: "4F",
     pergunta: 'Qual é a principal temática abordada no filme "The Whale"?',
     a: "Amor",
     b: "Amizade",
     c: "Família",
     d: "Superação",
     respCorreta: "d"
    },
    {numero: "5F",
     pergunta: 'O filme "The Whale" foi baseado em uma história real?',
     a: "Sim",
     b: "Não",
     c: "É um documentário",
     d: "Apenas o começo",
     respCorreta: "a"
    },
    {numero: "6F",
     pergunta: 'Qual é o ano de lançamento do filme "The Whale"?',
     a: "2018",
     b: "2019",
     c: "2020",
     d: "2021",
     respCorreta: "d"
    },
    {numero: "7F",
     pergunta: 'Qual é a duração aproximada do filme "The Whale"?',
     a: "a. 1 hora",
     b: "b. 1 hora e meia",
     c: "c. 2 horas",
     d: "d. 2 horas e meia",
     respCorreta: "b"
    },
    {numero: "8F",
     pergunta: 'Qual é a nacionalidade do filme "The Whale"?',
     a: "Americana",
     b: "Britânica",
     c: "Australiana",
     d: "Francesa",
     respCorreta: "a"
    },
    {numero: "9F",
     pergunta: ' filme "The Whale" foi lançado em qual formato?',
     a: "Cinema",
     b: "DVD",
     c: "Streaming",
     d: "TV",
     respCorreta: "a"
    },
    {numero: "10F",
     pergunta: 'O filme "The Whale" foi indicado a algum prêmio importante?',
     a: "Sim",
     b: "Não",
     c: "3",
     d: "1",
     respCorreta: "a"
    },

    {numero: "1M",
     pergunta: 'Quem interpreta o personagem principal em "The Whale"?',
     a: "Tom Hanks",
     b: "Morgan Freeman",
     c: "Willem Dafoe",
     d: "Brendan Fraser",
     respCorreta: "d"
    },
    {numero: "2M",
    pergunta: 'O filme "The Whale" se passa em qual país?',
    a: "Estados Unidos",
    b: "Reino Unido",
    c: "Canadá",
    d: "Austrália",
    respCorreta: "a"
    },
    {numero: "3M",
    pergunta: 'Qual é a duração aproximada do filme "The Whale"?',
    a: "90 minutos",
    b: "120 minutos",
    c: "150 minutos",
    d: "180 minutos",
    respCorreta: "a"
    },
    {numero: "4M",
    pergunta: 'Qual é a avaliação geral do filme "The Whale" pelos críticos de cinema?',
    a: "Péssimo",
    b: "Regular",
    c: "Bom",
    d: "Excelente",
    respCorreta: "d"
    },
    {numero: "5M",
    pergunta: 'Qual é o tema musical principal do filme "The Whale"?',
    a: "Clássica",
    b: "Pop",
    c: "Rock",
    d: "Country",
    respCorreta: "a"
    },

    {numero: "1D",
    pergunta: 'Qual é o nome do personagem principal em "The Whale"?',
    a: "Bob",
    b: "Joe",
    c: "John",
    d: "Charlie",
    respCorreta: "d"
    },
    {numero: "2D",
    pergunta: 'Em que estado americano o filme "The Whale" se passa?',
    a: "Washington",
    b: "Oregon",
    c: "California",
    d: "Alasca",
    respCorreta: "a"
    },
    {numero: "3D",
    pergunta: 'Quem interpreta a personagem da ex-esposa de Charlie em "The Whale"?',
    a: "Amy Adams",
    b: "Emma Stone",
    c: "Rachel Weisz",
    d: "Samantha Morton",
    respCorreta: "d"
    },
    {numero: "4D",
    pergunta: 'Qual é a doença que aflige Charlie em "The Whale"?',
    a: "Câncer",
    b: "Transtorno de Compulsão Alimentar",
    c: "Mal de Parkinson",
    d: "Mal de Alzheimer",
    respCorreta: "b"
    },
    {numero: "5D",
    pergunta: 'Qual é o nome da filha de Charlie em "The Whale"?',
    a: "Lucy",
    b: "Ellie",
    c: "Emily",
    d: "Lily",
    respCorreta: "b"
    },
    {numero: "6D",
    pergunta: 'Qual é o tema da carta que Charlie escreve para sua filha em "The Whale"?',
    a: "Perdão",
    b: "Amor",
    c: "Esperança",
    d: "Alegria",
    respCorreta: "b"
    },
    {numero: "7D",
    pergunta: 'Qual é o ofício de Charlie em "The Whale"?',
    a: "Médico",
    b: "Advogado",
    c: "Engenheiro",
    d: "Professor",
    respCorreta: "d"
    },
    {numero: "8D",
    pergunta: 'Em que fase da vida de Charlie o filme "The Whale" se concentra?',
    a: "Juventude",
    b: "Meia-idade",
    c: "Velhice",
    d: "Infância",
    respCorreta: "b"
    },
    {numero: "9D",
    pergunta: 'Qual é o objetivo de Charlie em "The Whale"?',
    a: "Encontrar a felicidade",
    b: "Encontrar a cura para sua doença",
    c: "Reconstruir sua relação com sua filha",
    d: "Encontrar a paz interior",
    respCorreta: "d"
    },
    {numero: "10D",
    pergunta: 'Qual é o tema central da história de "The Whale"?',
    a: "Auto-aceitação",
    b: "Redenção",
    c: "Reconciliação",
    d: "Acceptance",
    respCorreta: "a"
    },
]

let Avatar = [
    {numero: "1F",
     pergunta: "Quem é o diretor de Avatar?",
     a: "Christopher Nolan",
     b: "James Cameron",
     c: "Steven Spielberg",
     d: "Martin Scorsese",
     respCorreta: "b"
    },
    {numero: "2F",
     pergunta: "Em que ano o filme Avatar?",
     a: "2009",
     b: "2010",
     c: "2011",
     d: "2008",
     respCorreta: "a"
    },
    {numero: "3F",
     pergunta: "Onde se passa a história de Avatar?",
     a: "Marte",
     b: "Pandora",
     c: "Terra",
     d: "Vênus",
     respCorreta: "b"
    },
    {numero: "4F",
     pergunta: "Qual é a raça principal dos seres que habitam Pandora?",
     a: "Navi",
     b: "Na'vi",
     c: "Nav",
     d: "Na'v",
     respCorreta: "b"
    },
    {numero: "5F",
     pergunta: "Qual é a cor principal dos seres de Pandora? ",
     a: "Azul",
     b: "Verde",
     c: "Amarelo",
     d: "Vermelho",
     respCorreta: "Qual é o nome da namorada de Eric Forman na série?"
    },
    {numero: "6F",
     pergunta: "Qual é o nome do personagem principal interpretado por Sam Worthington?",
     a: "Jake Sully",
     b: "Neytiri",
     c: "Colonel Quaritch",
     d: "Dr. Grace Augustine",
     respCorreta: "a"
    },
    {numero: "7F",
     pergunta: "Qual é a profissão do personagem interpretado por Sam Worthington em Avatar?",
     a: "Médico",
     b: "Professor",
     c: "Marinheiro",
     d: "Marinha",
     respCorreta: "a"
    },
    {numero: "8F",
     pergunta: "Qual é o objetivo principal da personagem interpretada por Sigourney Weaver em Avatar?",
     a: "Desenvolver cura para a doença do planeta",
     b: "Explorar o planeta",
     c: "Roubar os recursos naturais",
     d: "Destruir o planeta",
     respCorreta: "d"
    },
    {numero: "9F",
     pergunta: "Qual é a principal fonte de energia de Pandora?",
     a: "Petróleo",
     b: "Unobtanium",
     c: "Gás",
     d: "Carvão",
     respCorreta: "b"
    },
    {numero: "10F",
     pergunta: " Qual é o tema principal de Avatar?",
     a: "Amor",
     b: "Guerra",
     c: "Paz",
     d: "Conflito entre a natureza e a tecnologia",
     respCorreta: "d"
    },

    {numero: "1M",
     pergunta: "Qual é o diretor de 'Avatar'?",
     a: "Peter Jackson",
     b: "Steven Spielberg",
     c: "James Cameron",
     d: "Christopher Nolan",
     respCorreta: "c"
    },
    {numero: "2M",
    pergunta: "Qual é o planeta onde se passa a história de 'Avatar'?",
    a: "Pandora",
    b: "Endor",
    c: "Hoth",
    d: "Tatooine",
    respCorreta: "a"
    },
    {numero: "3M",
    pergunta: "Qual é a raça dos seres que vivem na floresta de Pandora em 'Avatar'?",
    a: "Na'vi",
    b: "Wookies",
    c: "Ewoks",
    d: "Jawa",
    respCorreta: "a"
    },
    {numero: "4M",
    pergunta: "Qual é o personagem principal em 'Avatar'?",
    a: "Jake Sully",
    b: "John Anderton",
    c: "Neo",
    d: "Thomas Anderson",
    respCorreta: "a"
    },
    {numero: "5M",
    pergunta: "Qual é o objetivo da personagem Neytiri em 'Avatar'?",
    a: "Proteger sua terra natal",
    b: "Vingar sua família",
    c: "Encontrar o tesouro perdido",
    d: "Conquistar novos mundos ",
    respCorreta: "a"
    },
    {numero: "6M",
    pergunta: "Qual é o nome da tecnologia usada para controlar os avatares em 'Avatar'?",
    a: "Viagem Mental",
    b: "Projeção Astral",
    c: "Mergulho Mental",
    d: "Imersão Total",
    respCorreta: "c"
    },
    {numero: "7M",
    pergunta: "Qual é o nome da personagem que é líder da expedição em 'Avatar'?",
    a: "Parker Selfridge",
    b: "Tom Marcher",
    c: "James Drake",
    d: "Michael Scott",
    respCorreta: "a"
    },
    {numero: "8M",
    pergunta: "Qual é o nome do tipo de animal que Neytiri monta em 'Avatar'?",
    a: "Direhorse",
    b: "Banshee",
    c: "Dragon",
    d: "Pegasus",
    respCorreta: "b"
    },
    {numero: "9M",
    pergunta: "Qual é o tema principal de 'Avatar'?",
    a: "Amizade",
    b: "Amor",
    c: "Natureza",
    d: "Guerra",
    respCorreta: "d"
    },
    {numero: "10M",
    pergunta: "Qual é o efeito visual mais marcante de 'Avatar'?",
    a: "Efeitos de fogo",
    b: "Efeitos de água",
    c: "Efeitos de terra",
    d: "Efeitos de ar",
    respCorreta: "d"
    },

    {numero: "1D",
    pergunta: "Em que ano foi lançado o filme 'Avatar'?",
    a: "2006",
    b: "2008",
    c: "2010",
    d: "2012",
    respCorreta: "C"
    },
    {numero: "2D",
    pergunta: "Quem dirigiu o filme 'Avatar'?",
    a: "James Cameron",
    b: "Steven Spielberg",
    c: "Christopher Nolan",
    d: "Quentin Tarantino",
    respCorreta: "A"
    },
    {numero: "3D",
    pergunta: "Quem interpretou o protagonista no filme 'Avatar'?",
    a: "Sam Worthington",
    b: "Johnny Depp",
    c: "Leonardo DiCaprio",
    d: "Will Smith",
    respCorreta: "A"
    },
    {numero: "4D",
    pergunta: "Que tipo de criaturas são os Navi no filme 'Avatar'?",
    a: "Robôs",
    b: "Elfos",
    c: "Alienígenas",
    d: "Humanos",
    respCorreta: "C"
    },
    {numero: "5D",
    pergunta: "Qual é o nome do planeta onde se passa a história de 'Avatar'?",
    a: "Pandora",
    b: "Andrômeda",
    c: "Vega",
    d: "Sírius    ",
    respCorreta: "A"
    },
    {numero: "6D",
    pergunta: "Qual é o nome da corporação que está tentando extrair o valioso mineral em Pandora no filme 'Avatar'?",
    a: "RDA",
    b: "EON",
    c: "WETA",
    d: "ILM",
    respCorreta: "A"
    },
    {numero: "7D",
    pergunta: "Quem é o líder da tribo Navi no filme 'Avatar'?",
    a: "Jake Sully",
    b: "Neytiri",
    c: "Mo'at",
    d: "Tsu'tey",
    respCorreta: "C"
    },
    {numero: "8D",
    pergunta: "Qual é o nome do Avatar que Jake Sully substitui no filme 'Avatar'?",
    a: "Jake Sully",
    b: "Norma Spellman",
    c: "Trudy Chacon",
    d: "Graça Agostinho",
    respCorreta: "B"
    },
    {numero: "9D",
    pergunta: "Qual é o nome das montanhas flutuantes no filme 'Avatar'?",
    a: "Montanhas Aleluia",
    b: "Ilhas Flutuantes",
    c: "Montanhas do Céu",
    d: "Picos de Ar",
    respCorreta: "A"
    },
    {numero: "10D",
    pergunta: "Qual é o nome da árvore das almas no filme 'Avatar'?",
    a: "Árvore da Vida",
    b: "Árvore do Conhecimento",
    c: "Árvore de Pandora",
    d: "Árvore das Almas",
    respCorreta: "D"
    },
]

let GameOfThrones = [
    {numero: "1F",
     pergunta: "Qual é o nome do reino onde se passa a série Game of Thrones?",
     a: "Westeros",
     b: "Essos",
     c: "Dorne",
     d: "Braavos",
     respCorreta: "a"
    },
    {numero: "2F",
     pergunta: "Quem é o pai de Jon Snow?",
     a: "Tywin Lannister",
     b: "Ned Stark",
     c: "Rhaegar Targaryen",
     d: "Stannis Baratheon",
     respCorreta: "c"
    },
    {numero: "3F",
     pergunta: "Qual é o nome da espada de dragão usada por Daenerys Targaryen?",
     a: "Heartsbane",
     b: "Oathkeeper",
     c: "Longclaw",
     d: "Lightbringer",
     respCorreta: "d"
    },
    {numero: "4F",
     pergunta: "Quem é o Lorde Comandante da Patrulha da Noite?",
     a: "Jeor Mormont",
     b: "Edd Tollett",
     c: "Samwell Tarly",
     d: "Alliser Thorne",
     respCorreta: "a"
    },
    {numero: "5F",
     pergunta: "Qual é o nome da cidade onde se passa a maior parte da série?",
     a: "King's Landing",
     b: "Winterfell",
     c: "The Eyrie",
     d: "Dragonstone",
     respCorreta: "a"
    },
    {numero: "6F",
     pergunta: "Quem é o criador da série Game of Thrones?",
     a: "George R. R. Martin",
     b: "David Benioff",
     c: "D. B. Weiss",
     d: "Alan Taylor",
     respCorreta: "b"
    },
    {numero: "7F",
     pergunta: "Qual é a casa sigilosa associada com a cor verde e o bicho-pau?",
     a: "House Stark",
     b: "House Targaryen",
     c: "House Tyrell",
     d: "House Martell",
     respCorreta: "c"
    },
    {numero: "8F",
     pergunta: "Qual é o nome da famosa cerveja de cevada que é frequentemente consumida na série?",
     a: "Arbor Gold",
     b: "Dragon's Breath",
     c: "Dornish Red",
     d: "Honeydew",
     respCorreta: "a"
    },
    {numero: "9F",
     pergunta: "Qual é a montanha mais alta de Westeros, conhecida como a 'Fortaleza da Invernalia'?",
     a: "The Wall",
     b: "The Eyrie",
     c: " The Citadel",
     d: "The Red Keep",
     respCorreta: "a"
    },
    {numero: "10F",
     pergunta: " Qual é a frase oficial da Casa Stark?",
     a: "A Fé é nossa escudo",
     b: "Sempre fiel",
     c: "Nós não tememos a escuridão",
     d: "Sempre juntos",
     respCorreta: "d"
    },

    {numero: "1M",
     pergunta: "Qual o nome da casa Stark na série 'Game of Thrones'?",
     a: "Lannister",
     b: "Targaryen",
     c: "Greyjoy",
     d: "Stark",
     respCorreta: "d"
    },
    {numero: "2M",
    pergunta: "Quem é o personagem principal da série 'Game of Thrones'?",
    a: "Tywin Lannister",
    b: "Tyrion Lannister",
    c: "Jon Snow",
    d: "Daenerys Targaryen",
    respCorreta: "c"
    },
    {numero: "3M",
    pergunta: "Em que ano a série 'Game of Thrones' estreou na TV?",
    a: "2009",
    b: "2011",
    c: "2013",
    d: "2015",
    respCorreta: "b"
    },
    {numero: "4M",
    pergunta: "Qual é o nome da mãe dos dragões na série 'Game of Thrones'?",
    a: "Cersei Lannister",
    b: "Sansa Stark",
    c: "Daenerys Targaryen",
    d: "Catelyn Stark",
    respCorreta: "c"
    },
    {numero: "5M",
    pergunta: "Qual é o nome da cidade que serve como a capital dos Sete Reinos na série 'Game of Thrones'?",
    a: "Winterfell",
    b: "King's Landing",
    c: "Braavos",
    d: "Dorne",
    respCorreta: "b"
    },
    {numero: "6M",
    pergunta: "Qual é o nome do irmão gêmeo de Cersei Lannister na série 'Game of Thrones'?",
    a: "Jamie Lannister",
    b: "Tyrion Lannister",
    c: "Joffrey Baratheon",
    d: "Renly Baratheon",
    respCorreta: "a"
    },
    {numero: "7M",
    pergunta: "Qual é o nome da espada de aço valiriano que foi usada por Eddard Stark na série 'Game of Thrones'?",
    a: "Needle",
    b: "Ice",
    c: "Widow's Wail",
    d: "Oathkeeper",
    respCorreta: "b"
    },
    {numero: "8M",
    pergunta: "Qual é o nome da estrada que liga Winterfell a King's Landing na série 'Game of Thrones'?",
    a: "The Kingsroad",
    b: "The High Road",
    c: "The Green Way",
    d: "The Roseroad",
    respCorreta: "a"
    },
    {numero: "9M",
    pergunta: "Qual é o nome do grupo de guerreiros que seguem a deusa da lua, Melisandre, na série 'Game of Thrones'?",
    a: "The Unsullied",
    b: "The White Walkers",
    c: "The Children of the Forest",
    d: "The Lord of Light",
    respCorreta: "d"
    },
    {numero: "10M",
    pergunta: "Qual é o nome da guarda pessoal do rei Joffrey Baratheon na série 'Game of Thrones'?",
    a: "The Golden Company",
    b: "The Brave Companions",
    c: "The Kingsguard",
    d: "The Mountain's Men",
    respCorreta: "c"
    },

    {numero: "1D",
    pergunta: "Quem matou Joffrey Baratheon?",
    a: "Tyrion Lannister",
    b: "Sansa Stark",
    c: "Olenna Tyrell",
    d: "Petyr Baelish",
    respCorreta: "c"
    },
    {numero: "2D",
    pergunta: "Quem é o 'Rei da Noite'?",
    a: "Stannis Baratheon",
    b: "Ramsay Bolton",
    c: "Theon Greyjoy",
    d: "Night King",
    respCorreta: "d"
    },
    {numero: "3D",
    pergunta: "Qual é o nome do dragão da Daenerys Targaryen?",
    a: "Balerion",
    b: "Drogon",
    c: "Viserion",
    d: "Rhaegal",
    respCorreta: "b"
    },
    {numero: "4D",
    pergunta: "Quem é o mentor de Bran Stark na jornada para se tornar o Corvo de Três Olhos?",
    a: "Meistre Luwin",
    b: "Meistre Aemon",
    c: "Meistre Brynden",
    d: "Meistre Ebrose",
    respCorreta: "c"
    },
    {numero: "5D",
    pergunta: "Qual é o nome do local onde as crianças dos florestais são treinadas para se tornarem caçadores de sombras?",
    a: "Winterfell",
    b: "The Wall",
    c: "Braavos",
    d: "The Weirwood",
    respCorreta: "d"
    },
    {numero: "6D",
    pergunta: "Quem é o verdadeiro pai de Jon Snow?",
    a: "Ned Stark",
    b: "Robert Baratheon",
    c: "Rhaegar Targaryen",
    d: "Jeor Mormont",
    respCorreta: "c"
    },
    {numero: "7D",
    pergunta: "Qual é a cidade onde é construído o Trono de Ferro?",
    a: "Dorne",
    b: "King's Landing",
    c: "Winterfell",
    d: "Oldtown",
    respCorreta: "b"
    },
    {numero: "8D",
    pergunta: "Quem é a mãe de Gendry Baratheon?",
    a: "Cersei Lannister",
    b: "Lysa Arryn",
    c: "Joanna Lannister",
    d: "Catelyn Stark",
    respCorreta: "c"
    },
    {numero: "9D",
    pergunta: "Qual é a arma favorita de Brienne de Tarth?",
    a: "Espada",
    b: "Adaga",
    c: "Maça",
    d: "Espada de aço valiriano",
    respCorreta: "d"
    },
    {numero: "10D",
    pergunta: " Qual é o nome do personagem interpretado por Peter Dinklage na série Game of Thrones?",
    a: "Tyrion Lannister",
    b: "Jaime Lannister",
    c: "Tywin Lannister",
    d: "Gregor Clegane",
    respCorreta: "a"
    },
]

let That70sShow = [
    {numero: "1F",
     pergunta: "Qual é o nome do personagem principal da série That '70s Show?",
     a: "Eric Forman",
     b: "Michael Kelso",
     c: "Steven Hyde",
     d: "Jackie Burkhart",
     respCorreta: "a"
    },
    {numero: "2F",
     pergunta: "Qual é a mãe de Eric Forman na série?",
     a: "Kitty Forman",
     b: "Red Forman",
     c: "Donna Pinciotti",
     d: "Laurie Forman",
     respCorreta: "a"
    },
    {numero: "3F",
     pergunta: "Qual é o nome do melhor amigo de Eric Forman na série?",
     a: "Hyde",
     b: "Kelso",
     c: "Fez",
     d: "Randy",
     respCorreta: "b"
    },
    {numero: "4F",
     pergunta: "Qual é o apelido do pai de Eric Forman na série?",
     a: "Big Red",
     b: "Old Man",
     c: "The Colonel",
     d: "Mr. Forman",
     respCorreta: "a"
    },
    {numero: "5F",
     pergunta: "Donna Pinciotti",
     a: "Jackie Burkhart",
     b: "Laurie Forman",
     c: "Donna's Mom",
     d: "a",
     respCorreta: "Qual é o apelido do melhor amigo de Eric Forman e namorado de Jackie Burkhart?"
    },
    {numero: "6F",
     pergunta: "Kelso",
     a: "Hyde",
     b: "Fez",
     c: "Randy",
     d: "a",
     respCorreta: "Qual é o nome do colega de turma de Eric Forman e Donna Pinciotti na série?"
    },
    {numero: "7F",
     pergunta: "Steven Hyde",
     a: "Michael Kelso",
     b: "Fez",
     c: "Leo",
     d: "a",
     respCorreta: "Qual é o trabalho do pai de Eric Forman na série?"
    },
    {numero: "8F",
     pergunta: "Médico",
     a: "Advogado",
     b: "Policial",
     c: "Empresário",
     d: "c",
     respCorreta: "Qual é o nome do personagem interpretado por Wilmer Valderrama na série?"
    },
    {numero: "9F",
     pergunta: "Fez",
     a: "Hyde",
     b: "Kelso",
     c: " ",
     d: "Randy",
     respCorreta: "a"
    },
    {numero: "10F",
     pergunta: " Qual é a música tema da série That '70s Show?",
     a: "In the Street",
     b: "Long Time",
     c: "Walking on Sunshine",
     d: "Bad to the Bone",
     respCorreta: "a"
    },

    {numero: "1M",
     pergunta: "Qual é o nome do personagem principal da série That '70s Show?",
     a: "Eric Forman",
     b: "Michael Kelso",
     c: "Steven Hyde",
     d: "Jackie Burkhart",
     respCorreta: "a"
    },
    {numero: "2M",
    pergunta: "Qual é a mãe de Eric Forman na série?",
    a: "Kitty Forman",
    b: "Red Forman",
    c: "Donna Pinciotti",
    d: "Laurie Forman",
    respCorreta: "a"
    },
    {numero: "3M",
    pergunta: "Qual é o nome do melhor amigo de Eric Forman na série?",
    a: "Hyde",
    b: "Kelso",
    c: "Fez",
    d: "Randy",
    respCorreta: "b"
    },
    {numero: "4M",
    pergunta: "Qual é o apelido do pai de Eric Forman na série?",
    a: "Big Red",
    b: "Old Man",
    c: "The Colonel",
    d: "Mr. Forman",
    respCorreta: "a"
    },
    {numero: "5M",
    pergunta: "Qual é o nome da namorada de Eric Forman na série?",
    a: "Donna Pinciotti",
    b: "Jackie Burkhart",
    c: "Laurie Forman",
    d: "Donna's Mom",
    respCorreta: "a"
    },
    {numero: "6M",
    pergunta: "Qual é o apelido do melhor amigo de Eric Forman e namorado de Jackie Burkhart?",
    a: "Kelso",
    b: "Hyde",
    c: "Fez",
    d: "Randy",
    respCorreta: "a"
    },
    {numero: "7M",
    pergunta: "Qual é o nome do colega de turma de Eric Forman e Donna Pinciotti na série?",
    a: "Steven Hyde",
    b: "Michael Kelso",
    c: "Fez",
    d: "Leo",
    respCorreta: "a"
    },
    {numero: "8M",
    pergunta: "Qual é o trabalho do pai de Eric Forman na série?",
    a: "Médico",
    b: "Advogado",
    c: "Policial",
    d: "Empresário",
    respCorreta: "c"
    },
    {numero: "9M",
    pergunta: "Qual é o nome do personagem interpretado por Wilmer Valderrama na série?",
    a: "Fez",
    b: "Hyde",
    c: "Kelso",
    d: "Randy",
    respCorreta: "a"
    },
    {numero: "10M",
    pergunta: " Qual é a música tema da série That '70s Show?",
    a: "In the Street",
    b: "Long Time",
    c: "Walking on Sunshine",
    d: "Bad to the Bone",
    respCorreta: "a"
    },

    {numero: "1D",
    pergunta: "Qual era o apelido de Eric Forman na série 'That 70's Show'?",
    a: "Hyde",
    b: "Kelso",
    c: "Fez",
    d: "Eric",
    respCorreta: "a"
    },
    {numero: "2D",
    pergunta: "Quem interpreta o personagem Jackie Burkhart na série 'That 70's Show'?",
    a: "Mila Kunis",
    b: "Laura Prepon",
    c: "Ashton Kutcher",
    d: "Wilmer Valderrama",
    respCorreta: "a"
    },
    {numero: "3D",
    pergunta: "Qual era a marca de carro preferida dos personagens na série 'That 70's Show'?",
    a: "Chevrolet",
    b: "Pontiac",
    c: "Dodge",
    d: "Ford",
    respCorreta: "b"
    },
    {numero: "4D",
    pergunta: "Qual é o nome da banda favorita dos personagens na série 'That 70's Show'?",
    a: "Led Zeppelin",
    b: "The Who",
    c: "Black Sabbath",
    d: "Pink Floyd",
    respCorreta: "a"
    },
    {numero: "5D",
    pergunta: "Qual era o apelido de Steven Hyde na série 'That 70's Show'?",
    a: "The Duke",
    b: "The Brains",
    c: "The Cool Kid",
    d: "The Bad Boy",
    respCorreta: "d"
    },
    {numero: "6D",
    pergunta: "Qual era o apelido de Michael Kelso na série 'That 70's Show'?",
    a: "The Duke",
    b: "The Brains",
    c: "The Stoner",
    d: "The Jock",
    respCorreta: "c"
    },
    {numero: "7D",
    pergunta: "Qual é o nome da namorada de Eric Forman na série 'That 70's Show'?",
    a: "Donna Pinciotti",
    b: "Jackie Burkhart",
    c: "Fez",
    d: "Hyde",
    respCorreta: "a"
    },
    {numero: "8D",
    pergunta: "Qual era o apelido de Fez na série 'That 70's Show'?",
    a: "The Foreigner",
    b: "The Genius",
    c: "The Player",
    d: "The Joker",
    respCorreta: "a"
    },
    {numero: "9D",
    pergunta: "Qual é o nome da mãe de Eric Forman na série 'That 70's Show'?",
    a: "Kitty Forman",
    b: "Red Forman",
    c: "Bob Pinciotti",
    d: "Midge Pinciotti",
    respCorreta: "a"
    },
    {numero: "10D",
    pergunta: "Qual é o nome do pai de Eric Forman na série 'That 70's Show'?",
    a: "Bob Pinciotti",
    b: "Red Forman",
    c: "Kitty Forman",
    d: "Hyde",
    respCorreta: "b"
    },
]
