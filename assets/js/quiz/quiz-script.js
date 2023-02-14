const pergunta = document.getElementById("quiz-pergunta")
const opcaoA =  document.getElementById("quiz-opcao_a")
const opcaoB =  document.getElementById("quiz-opcao_b")
const opcaoC =  document.getElementById("quiz-opcao_c")
const opcaoD =  document.getElementById("quiz-opcao_d")
let pontos =  document.getElementById("quiz-pontos")
const pontosJogador = document.getElementsByClassName("quiz-pontos-jogador")
const cardBG = document.getElementsByClassName("card-background")
const contaTempo = document.getElementById("conta-tempo")
const statusPergunta = document.getElementById("quiz-status_pergunta")
const cardLogo = document.getElementById("card_logo")
const jogo = document.getElementsByClassName("jogo")
let obra = StrangerThings
let sorteadas = []
let embaralhadas = []
let fimQuiz = false
let indiceArrayEmbaralhado = 0
let numeroDaQuestao = 1
let remainingTime = 20
let obra_string = false

startTimer()

function escolheQuiz(escolhido,escolhido_string) {
    cardLogo.classList.add("invisible")
    jogo[0].classList.add("visible")
    document.getElementById("topo").scrollIntoView()
    obra = escolhido
    if (obra_string != false) {
        console.log(obra_string)
        cardBG[0].classList.remove(`card-background-${obra_string}`)
    }
    obra_string = escolhido_string
    numeroDaQuestao = 1
    indiceArrayEmbaralhado = 0
    pontos.innerText = "00"    
    fimQuiz = false
    sortear()
    contaPontos("","")
    console.log(obra_string)
    cardBG[0].classList.add(`card-background-${obra_string}`)
}

function sorteioPorNivel(nivel,nSorteadas) {
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

function sortear() {
    // Sorteia 4 números entre as perguntas de nível fácil:
    sorteioPorNivel("F", 4)
    
    // Sorteia 4 números entre as perguntas de nível médio:
    sorteioPorNivel("M", 4)
    
    // Sorteia 2 números entre as perguntas de nível difícil:
    sorteioPorNivel("D", 2)
    
    // Compôe um array com os 10 número sorteados (elementos embaralhados):
    embaralhar()    
}

function embaralhar() {
    embaralhadas = sorteadas.sort(function() {
        return 0.5 - Math.random();
    })
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

function contaPontos(opcaoEscolhida,indiceArrayOriginal) {
    if (indiceArrayEmbaralhado < 10) {
        statusPergunta.innerHTML = `${numeroDaQuestao++} / 10`
        resetTimer()
    } else if (indiceArrayEmbaralhado = 10) {
        contaTempo.innerHTML = "Fim"
    }
    
    for (i=0; i < obra.length; i++) {
        if (obra[i].numero == embaralhadas[indiceArrayEmbaralhado] && indiceArrayEmbaralhado < 10) {
            pergunta.innerText = obra[i].pergunta
            opcaoA.innerHTML = `<div class="quiz-opcoes" onclick="contaPontos('a',${i})"> a) ${obra[i].a}</div>`
            opcaoB.innerHTML = `<div class="quiz-opcoes" onclick="contaPontos('b',${i})"> b) ${obra[i].b}</div>`
            opcaoC.innerHTML = `<div class="quiz-opcoes" onclick="contaPontos('c',${i})"> c) ${obra[i].c}</div>`
            opcaoD.innerHTML = `<div class="quiz-opcoes" onclick="contaPontos('d',${i})"> d) ${obra[i].d}</div>`
        }
    }
    
    if (obra[indiceArrayOriginal] != undefined && indiceArrayEmbaralhado <= 10) {
        if (opcaoEscolhida == obra[indiceArrayOriginal].respCorreta && fimQuiz == false) {
            pontos.innerHTML = parseInt(pontos.innerHTML) + 10
            pontosJogador[5].innerHTML = parseInt(pontosJogador[5].innerHTML) + 10
        }
        if (indiceArrayEmbaralhado == 10) {
            fimQuiz = true
            clearInterval(intervalId)
        }
    }
    
    indiceArrayEmbaralhado++

    console.log(indiceArrayEmbaralhado)
}

function resetTimer() {
    clearInterval(intervalId);
    remainingTime = 9; // reinicia a contagem
    startTimer();
}

console.log(opcaoA.innerHTML)