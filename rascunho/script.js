const pergunta = document.getElementById("quiz-pergunta")
const opcaoA =  document.getElementById("quiz-opcao_a")
const opcaoB =  document.getElementById("quiz-opcao_b")
const opcaoC =  document.getElementById("quiz-opcao_c")
const opcaoD =  document.getElementById("quiz-opcao_d")
let pontos =  document.getElementById("quiz-pontos")
let statusPergunta = document.getElementById("quiz-status_pergunta")

sorteadas = []
obra = Friends

function sorteioPorNivel (nivel,nSorteadas) {
    let nQuestoes = 0

    for (i=0; i < obra.length; i++) {
        if (obra[i].numero.includes(`${nivel}`)) {
            nQuestoes++
        }
    }
    
    soAsXSorteadas = []
    
    while (soAsXSorteadas.length < nSorteadas) {
        numeroSorteado = (Math.random()*nQuestoes).toFixed(0);
    
        if (soAsXSorteadas.includes(numeroSorteado + `${nivel}`) == false && (numeroSorteado != 0)) {
            soAsXSorteadas.push(numeroSorteado + `${nivel}`)
            sorteadas.push(numeroSorteado + `${nivel}`)
        }    
    }
}

// Sortear 4 números entre as perguntas de nível fácil.

sorteioPorNivel("F", 4)


// Sortear 4 números entre as perguntas de nível médio.

sorteioPorNivel("M", 4)


// Sortear 2 números entre as perguntas de nível difícil.

sorteioPorNivel("D", 2)

// Array com os 10 número sorteados (ordenados por nivel de dificuldade).

// console.log(sorteadas)

// Array com os 10 número sorteados (elementos embaralhados).

embaralhadas = sorteadas.sort(function() {
    return 0.5 - Math.random();
})

// Exibindo as questões no navegador.

// pontos.innerHTML = 0
// pontos.innerHTML = parseInt(pontos.innerHTML)

// console.log(typeof(pontos.innerHTML))
// console.log(parseInt(pontos.innerHTML))

for (i=0; i < obra.length; i++) {
    if (obra[i].numero == embaralhadas[0]) {
        pergunta.innerText = obra[i].pergunta
        opcaoA.innerHTML = `<div onclick="contaPontos('a',${i})"> a) ${obra[i].a}</div>`
        opcaoB.innerHTML = `<div onclick="contaPontos('b',${i})"> b) ${obra[i].b}</div>`
        opcaoC.innerHTML = `<div onclick="contaPontos('c',${i})"> c) ${obra[i].c}</div>`
        opcaoD.innerHTML = `<div onclick="contaPontos('d',${i})"> d) ${obra[i].d}</div>`
    }
}

n = 0
s = 2

function contaPontos(opcao,num) {
    
    n = n + 1

    if (n < 10) {
        statusPergunta.innerHTML = `${s++} / 10`
    }

    for (i=0; i < obra.length; i++) {
        if (obra[i].numero == embaralhadas[n]) {
            pergunta.innerText = obra[i].pergunta
            opcaoA.innerHTML = `<div onclick="contaPontos('a',${i})"> a) ${obra[i].a}</div>`
            opcaoB.innerHTML = `<div onclick="contaPontos('b',${i})"> b) ${obra[i].b}</div>`
            opcaoC.innerHTML = `<div onclick="contaPontos('c',${i})"> c) ${obra[i].c}</div>`
            opcaoD.innerHTML = `<div onclick="contaPontos('d',${i})"> d) ${obra[i].d}</div>`
        }
    }
    
    if (opcao == obra[num].respCorreta && n <= 10) {
        pontos.innerHTML = parseInt(pontos.innerHTML) + 10
    }
}

console.log(obra.length)