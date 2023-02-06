const arrayEquipe = [
  {
    nome: "Roberto Zanin",
    descricao:
      "Fanático por séries de ficção científica e apaixonado por tecnologia, a telinha da tv me encanta e me faz viajar por onde a imaginação levar.",
    imagem: "time_foto_roberto_zanin.png",
  },
  {
    nome: "Rosângela Melanias",
    descricao:
      "Cinéfila desde os 12 anos e já via filmes em VHS. Adora filmes inteligentes, suspenses e terror. Para maratonar uma série, não dispensa um guaraná e pipoca!",
    imagem: "time_foto_rosangela_melanias.png",
  },
  {
    nome: "Thiago Manfredi",
    descricao:
      "Geek que curte ficção científica, animação e fantasia. Também não dispensa eventualmente um bom drama ou romance. Acumulador no 'Minha Lista'.",
    imagem: "time_foto_thiago_manfredi.png",
  },
  {
    nome: "Vinícius Marques",
    descricao:
      "Gosto de me sentir imerso nos filmes. Prefiro telas grandes e ficção científica, mas às vezes só me resta série teen e o celular, e eu amo!",
    imagem: "time_foto_vinicius_marques.png",
  },
  {
    nome: "Viviane Favato",
    descricao:
      "Apaixonada por filmes clássicos e comédias, mas chegadinha num drama pra chorar. Adora maratonar séries nos finais de semana.",
    imagem: "time_foto_viviane_favato.png",
  },
];

let direction = "left";

arrayEquipe.map((colaborador) => {
  const newColaborator = document.createElement("div");

  if (direction === "left") {
    newColaborator.classList.add("colaboratorleft");

    newColaborator.innerHTML = `
      <img class="photoleft"
        src="./assets/image/time/${colaborador.imagem}"
        alt="foto de ${colaborador.nome}"
      />
      
      <div class="descriptionleft">
        <h1>${colaborador.nome}</h1>
        <p>
          ${colaborador.descricao}
        </p>
      </div>
    `;

    direction = "right";
  } else {
    newColaborator.classList.add("colaboratorright");

    newColaborator.innerHTML = `
      <div class="descriptionright">
        <h1>${colaborador.nome}</h1>
          <p>
            ${colaborador.descricao}
          </p>
        </div>
        <img
          class="photoright"
          src="./assets/image/time/${colaborador.imagem}"
          alt="foto de ${colaborador.nome}"
        />
    `;

    direction = "left";
  }

  const main = document.querySelector("main");

  main.appendChild(newColaborator);
});
