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

console.log(sorteadas)

// Array com os 10 número sorteados (elementos embaralhados).
embaralhadas = sorteadas.sort(function() {
    return 0.5 - Math.random();
})

console.log(embaralhadas)

// Exibindo as questões no navegador.

for (i=0; i < obra.length; i++) {
    if (obra[i].numero == embaralhadas[0]) {
        console.log(obra[i])
        pergunta.innerText = obra[i].pergunta
        opcaoA.innerText = "a) " + obra[i].a
        opcaoB.innerText = "b) " + obra[i].b
        opcaoC.innerText = "c) " + obra[i].c
        opcaoD.innerText = "d) " + obra[i].d
    }
}

n = 0
s = 2

function avancar() {
    // pontos.innerHTML = Number(pontos.innerHTML) + 10
    // console.log(pontos.innerText)

    n = n + 1

    for (i=0; i < obra.length; i++) {
        if (obra[i].numero == embaralhadas[n]) {
            console.log(obra[i])
            pergunta.innerText = obra[i].pergunta
            opcaoA.innerText = "a) " + obra[i].a
            opcaoB.innerText = "b) " + obra[i].b
            opcaoC.innerText = "c) " + obra[i].c
            opcaoD.innerText = "d) " + obra[i].d
        }
    }

    statusPergunta.innerHTML = `${s++} / 10`
}