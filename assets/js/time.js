const equipe = [
  {
    nome: "Roberto Zanin",
    descricao:
      "Fanático por séries de ficção científica e apaixonado por tecnologia, a telinha da tv me encanta e me faz viajar por onde a imaginação levar.",
    imagem: "time_foto_roberto_zanin.png",
    instagram: "https://www.instagram.com/robertozanin",
    github: "https://github.com/raszanin",
    linkedin: "https://www.linkedin.com/in/raszanin/"
  },
  {
    nome: "Rosângela Melanias",
    descricao:
      "Cinéfila desde os 12 anos e já via filmes em VHS. Adora filmes inteligentes, suspenses e terror. Para maratonar uma série, não dispensa um guaraná e pipoca!",
    imagem: "time_foto_rosangela_melanias.png",
    instagram: "https://www.instagram.com/rosangelazanza",
    github: "https://github.com/RoMelanias",
    linkedin: "https://www.linkedin.com/in/rosangela-melanias/"
  },
  {
    nome: "Thiago Manfredi",
    descricao:
      "Geek que curte ficção científica, animação e fantasia. Também não dispensa eventualmente um bom drama ou romance. Acumulador no 'Minha Lista'.",
    imagem: "time_foto_thiago_manfredi.png",
    instagram: "https://www.instagram.com/thimanf",
    github: "https://github.com/thiagoManfredi",
    linkedin: "https://www.linkedin.com/in/thiago-manfredi-18a88a211/"
  },
  {
    nome: "Vinícius Marques",
    descricao:
      "Gosto de me sentir imerso nos filmes. Prefiro telas grandes e ficção científica, mas às vezes só me resta série teen e o celular, e eu amo!",
    imagem: "time_foto_vinicius_marques.png",
    instagram: "https://www.instagram.com/sumyvinsil",
    github: "https://github.com/ViniciusSumy",
    linkedin: "https://www.linkedin.com/in/vinicius-marquess/"
  },
  {
    nome: "Viviane Favato",
    descricao:
      "Apaixonada por filmes clássicos e comédias, mas chegadinha num drama pra chorar. Adora maratonar séries nos finais de semana.",
    imagem: "time_foto_viviane_favato.png",
    instagram: "https://www.instagram.com/vifavato",
    github: "https://github.com/Vibarbara",
    linkedin: "https://www.linkedin.com/in/viviane-favato/"
  },
];

// ------------ DESCRIÇÃO -------------

let indiceAtual = -1;

const exibirDescricao = (index) => {
  const descricao = document.querySelector("#descricao-pessoa");
  if (index === indiceAtual) {
    indiceAtual = -1;
    descricao.innerHTML = "";
  } else {
    indiceAtual = index;
    descricao.innerHTML = `
      <p class="nome-pessoa">${equipe[index].nome}</p>
      <em>${equipe[index].descricao}</em>
      <div>
      <a href="${equipe[index].instagram}" target="_blank">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="${equipe[index].github}" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      <a href="${equipe[index].linkedin}" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        </div>
    `;
  }
};

const mosaicos = document.querySelectorAll(".mosaico");
mosaicos.forEach((mosaico, index) => {
  mosaico.addEventListener("click", () => {
    exibirDescricao(index);
  });
});

const pessoas = document.querySelectorAll(".pessoa");
pessoas.forEach((pessoa, index) => {
  pessoa.addEventListener("click", () => {
    pessoas.forEach((p) => {
      p.classList.remove("ativo");
    });
    pessoa.classList.add("ativo");
    exibirDescricao(index);
  });
});