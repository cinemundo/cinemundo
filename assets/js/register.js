// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputCorreto.username = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorreto.username = true;
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputCorreto.email = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputCorreto.email = false;
  }
})

// -------------- VALIDAÇÃO SENHA ------------- //

const senhaInput = document.getElementById('senha');
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');

senhaInput.addEventListener('blur', (e) => {
  const value = e.target.value

  if (value.length) {
      estilizarInputCorreto(senhaInput, senhaHelper);
      inputCorreto.senha = true;
  } else {
      estilizarInputIncorreto(senhaInput, senhaHelper);
      senhaHelper.innerText = 'A senha é obrigatória'
      inputCorreto.senha = false;
  }
})

 // -------------- VALIDAÇÃO CONFIRMAÇÃO SENHA ------------- //

 const confirmarSenhaInput = document.getElementById('confirma-senha');
 const confirmarSenhaLabel = document.getElementById('label[for="confirma-senha"]');
 const confirmarSenhaHelper = document.getElementById('confirma-senha-helper');

 confirmarSenhaInput.addEventListener('blur', (e) => {
   const value = e.target.value

   if (value === senhaInput.value) {
       estilizarInputCorreto(confirmarSenhaInput, confirmarSenhaHelper);
       inputCorreto.confirmarSenha = true;
   } else {
       estilizarInputIncorreto(confirmarSenhaInput, confirmarSenhaHelper);
       confirmarSenhaHelper.innerText = 'As senhas devem ser iguais'
       inputCorreto.confirmarSenha = false;
   }
 })

 // -------------- HABILITAR ENVIO DO FORMULÁRIO ------------- //  

 const submitButton = document.getElementById('submit');

 const inputCorreto = {
  username: false,
  email: false,
  senha: false,
  confirmarSenha: false
 }

 submitButton.addEventListener('click', (e) =>{

  e.preventDefault()

  const values = Object.values(inputCorreto)
  const anyFalse = values.filter((value) => value === false)
  
  if(!anyFalse.length) {
    alert('Formulário enviado com sucesso!') 
  } else {
    alert('Preencha todos os campos.')
  }
 })