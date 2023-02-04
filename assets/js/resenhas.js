//-------------------------------- SELEÇÃO POR AUTOR - RESENHAS ---------------------------------//

const newTab = 'resenha-completa.html';

function openNewTab(newTab) {
  const win = window.open(newTab, 'blank');
  win.focus();
}

function Reset() {
    let autores = document.getElementById("autores");
    autores.selectedIndex = 0;
}

const selectAutores = document.getElementById('autores');
if(selectAutores) {
    selectAutores.addEventListener('change', () => {
      openNewTab(newTab);
      Reset();
    });
}


//-------------------------------- TABS (SÉRIES/FILMES) - RESENHAS ---------------------------------//

let tabs = document.querySelectorAll('.tabs-toggle');
    contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');   
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        }); 
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
}); 

//-------------------------------- RATING STARS - RESENHA COMPLETA ---------------------------------//

const allStars = document.querySelectorAll(".star-resenha");

allStars.forEach( (star, i) => {
    star.onclick = function() {
        let current_star_level = i + 1;
        //current_rating.innerText = `${current_star_level} of 5`;

        allStars.forEach( (star, j) => {
            if (current_star_level >= j+1) {
                star.innerHTML = "&#9733";
            } else {
                star.innerHTML = "&#9734";
            }
        });
    }
});

const ResenhaStars = document.querySelectorAll(".star-avalia-resenha");

ResenhaStars.forEach( (star, i) => {
    star.onclick = function() {
        let resenha_star_level = i + 1;
        //current_rating.innerText = `${current_star_level} of 5`;

        ResenhaStars.forEach( (star, j) => {
            if (resenha_star_level >= j+1) {
                star.innerHTML = "&#9733";
            } else {
                star.innerHTML = "&#9734";
            }
        });
    }
});

//-------------------------------- FORMULÁRIO - RESENHA COMPLETA ---------------------------------//

const inputResenha = document.getElementsByClassName("input-form-resenha-completa");
const labelResenha = document.getElementsByClassName("label-form-resenha-completa");
const messageTextarea = document.getElementsByClassName("textarea_form_resenha_completa");

function togglePopup(inputResenha, labelResenha) {
  
    if(inputResenha) {

        inputResenha.addEventListener("focus", () => {
        labelResenha.classList.add("required-popup");
        });
    }
  
    if(inputResenha) {

        inputResenha.addEventListener("blur", () => {
        labelResenha.classList.remove("required-popup");
        });
    }
  }
  
  function estilizarInputCorreto(inputResenha, helper) {
    helper.classList.remove("visible");
    inputResenha.classList.remove("error");
    inputResenha.classList.add("correct");
  }
  
  function estilizarInputIncorreto(inputResenha, helper) {
    helper.classList.add("visible");
    inputResenha.classList.add("error");
    inputResenha.classList.remove("correct");
  }

  function estilizarCorretoTextarea(messageTextarea, helper) {
    helper.classList.remove("visible");
    messageTextarea.classList.remove("error");
    messageTextarea.classList.add("correct");
  }
  
  function estilizarIncorretoTextarea(messageTextarea, helper) {
    helper.classList.add("visible");
    messageTextarea.classList.add("error");
    messageTextarea.classList.remove("correct");
  }
  
  // -------------------- VALIDAÇÃO USERNAME RESENHA COMPLETA-------------------- //

  let usernameInput = document.getElementById("username");
  let usernameLabel = document.querySelector('label[for="username"]');
  let usernameHelper = document.getElementById("username-helper");
  
  togglePopup(usernameInput, usernameLabel);
  
  if(usernameInput) {

      usernameInput.addEventListener("change", (e)=> {
        let valor = e.target.value;
      
        if(valor.length < 6){
         
          usernameHelper.innerText = "Seu usuário precisa ter 6 ou mais caracteres";
          estilizarInputIncorreto(usernameInput, usernameHelper);
          inputsCorretos.username = false;
        } else {
         
          estilizarInputCorreto(usernameInput, usernameHelper);
          inputsCorretos.username = true;
        }
      })
  }
  
 // -------------------- VALIDAÇÃO EMAIL RESENHA COMPLEETA -------------------- //

  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  togglePopup(emailInput, emailLabel);
  
  if(emailInput) {

      emailInput.addEventListener("change", (e)=> {
        let valor = e.target.value;
      
        if(valor.includes("@") && valor.includes(".com")){
        
          estilizarInputCorreto(emailInput, emailHelper);
          inputsCorretos.email = true;
        } else {
         
          emailHelper.innerText = "Precisa inserir um email válido";
          estilizarInputIncorreto(emailInput, emailHelper);
          inputsCorretos.email = false;
        }
      })
  }

  // -------------------- VALIDAÇÃO MENSAGEM RESENHA COMPLETA -------------------- //

  let messageInput = document.getElementById("message");
  let messageLabel = document.querySelector('label[for="message"]');
  let messageHelper = document.getElementById("message-helper");
  
  if(messageInput) {

      messageInput.addEventListener("change", (e)=> {
        let valor = e.target.value;
      
        if(valor.length < 40){
           
            messageHelper.innerText = "A mensagem deve ter 40 ou mais caracteres";
            estilizarInputIncorreto(messageInput, messageHelper);
            inputsCorretos.message = false;
          } else {
            estilizarInputCorreto(messageInput, messageHelper);
            inputsCorretos.message = true;
          }
        })
  }

  // -------------------- VALIDAÇÃO ENVIO RESENHA COMPLETA -------------------- //

const submitButton = document.getElementById('submit');

const inputsCorretos = {
  username: false,
  email: false, 
  message: false
}

if(submitButton) {

    submitButton.addEventListener('click', (e) => {

      const values = Object.values(inputsCorretos);
      const anyFalse = values.filter((value) => value === false);
    
      if(!anyFalse.length) {
        alert('Formulário enviado com sucesso!');
      } else {
        alert('Preencha todos os campos');
      }
    })
}

//-------------------------------- FORMULÁRIO - RESENHA PRINCIPAL ---------------------------------//

const register = 'register.html';

function toRegister(register) {
  const cadastro = window.open(register, 'blank');
  cadastro.focus();
}

// -------------------- VALIDAÇÃO USERNAME RESENHA PRINCIPAL -------------------- //

let usernameResenhaInput = document.getElementById("usernameResenha");
let usernameResenhaLabel = document.querySelector('label[for="usernameResenha"]');

if(usernameResenhaInput) {

    usernameResenhaInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    
    if(valor.length < 6){
        
        alert("Seu usuário precisa ter 6 ou mais caracteres");  
    } 
    })
}

// -------------------- VALIDAÇÃO EMAIL RESENHA PRINCIPAL -------------------- //

let emailResenhaInput = document.getElementById("emailResenha");
let emailResenhaLabel = document.querySelector('label[for="emailResenha"]');

if(emailResenhaInput) {

    emailResenhaInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    
    if(!valor.includes("@") && !valor.includes(".com")){
        
        alert("Precisa inserir um email válido");  
    } 
    })
}

 // -------------------- VALIDAÇÃO ENVIO RESENHA PRINCIPAL -------------------- //

const submitResenha = document.getElementById("submit-resenha");

submitResenha.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("usernameResenha");
  const emailField = document.getElementById("emailResenha");
  let valid = true;

  if (!firstNameField.value || !emailField.value) {
    alert("Preencha todos os campos!")
  } else {
    toRegister(register);
    return valid;
  }
}

