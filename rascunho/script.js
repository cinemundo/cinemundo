const pergunta = document.getElementById("quiz-pergunta")
const opcaoA =  document.getElementById("quiz-opcao_a")
const opcaoB =  document.getElementById("quiz-opcao_b")
const opcaoC =  document.getElementById("quiz-opcao_c")
const opcaoD =  document.getElementById("quiz-opcao_d")
let pontos =  document.getElementById("quiz-pontos")
let statusPergunta = document.getElementById("quiz-status_pergunta")
const contaTempo = document.getElementById("conta-tempo")

sorteadas = []
obra = GameOfThrones

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

// Exibindo as questões no navegador.

for (i=0; i < obra.length; i++) {
    if (obra[i].numero == embaralhadas[0]) {
        pergunta.innerText = obra[i].pergunta
        opcaoA.innerHTML = `<div onclick="contaPontos('a',${i})"> a) ${obra[i].a}</div>`
        opcaoB.innerHTML = `<div onclick="contaPontos('b',${i})"> b) ${obra[i].b}</div>`
        opcaoC.innerHTML = `<div onclick="contaPontos('c',${i})"> c) ${obra[i].c}</div>`
        opcaoD.innerHTML = `<div onclick="contaPontos('d',${i})"> d) ${obra[i].d}</div>`
    }
}

let remainingTime = 9; // tempo inicial em segundos
let intervalId;

startTimer()

n = 0
s = 2
let fimQuiz = false

contaTempo.innerHTML = "10"

function contaPontos(opcao,num) {

    n = n + 1

    if (n < 10) {
        statusPergunta.innerHTML = `${s++} / 10`
        resetTimer()
    } else if (n = 10) {
        contaTempo.innerHTML = "Fim do quiz"
    }
    
    for (i=0; i < obra.length; i++) {
        if (obra[i].numero == embaralhadas[n] && n < 10) {
            pergunta.innerText = obra[i].pergunta
            opcaoA.innerHTML = `<div onclick="contaPontos('a',${i})"> a) ${obra[i].a}</div>`
            opcaoB.innerHTML = `<div onclick="contaPontos('b',${i})"> b) ${obra[i].b}</div>`
            opcaoC.innerHTML = `<div onclick="contaPontos('c',${i})"> c) ${obra[i].c}</div>`
            opcaoD.innerHTML = `<div onclick="contaPontos('d',${i})"> d) ${obra[i].d}</div>`
        }
    }
    
    
    if (obra[num] != undefined && n <= 10) {
        if (opcao == obra[num].respCorreta && fimQuiz == false) {
            pontos.innerHTML = parseInt(pontos.innerHTML) + 10
        }
        if (n == 10) {
            fimQuiz = true
            clearInterval(intervalId)
        }
    }
    

    // console.log(obra[num])
    console.log(n)
}

function startTimer() {
    contaTempo.innerHTML = "10"
    intervalId = setInterval(function() {
        let seconds = remainingTime % 60;
        let displayTime = (seconds < 10 ? "0" + seconds : seconds);
        contaTempo.innerHTML = displayTime;
        remainingTime--;
        if (remainingTime <= -1) {
            clearInterval(intervalId);
            contaPontos()
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalId);
    remainingTime = 9; // reinicia a contagem
    startTimer();
}