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
  let valorUsuario = e.target.value

  if(valorUsuario.length < 6){
    // Adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
    usernameHelper.innerText = "Seu username precisa ter 6 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputCorreto.username = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorreto.username = true;
  }
})

// -------------- VALIDAÇÃO SENHA ------------- //

const senhaInput = document.getElementById('senha');
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');

senhaInput.addEventListener('blur', (e) => {
  const valorSenha = e.target.value

  if (valorSenha.length <= 7){
      estilizarInputIncorreto(senhaInput, senhaHelper);
      senhaHelper.innerText = 'A senha é obrigatória e deve ter o mínimo de 8 caracteres';
      inputCorreto.senha = false;
      senhaHelper.classList.add("helper-text");
  } else {
      estilizarInputCorreto(senhaInput, senhaHelper);
      inputCorreto.senha = true;
  }
})

 // -------------- VALIDAÇÃO CONFIRMAÇÃO SENHA ------------- //

 const confirmarSenhaInput = document.getElementById('confirma-senha');
 const confirmarSenhaLabel = document.getElementById('label[for="confirma-senha"]');
 const confirmarSenhaHelper = document.getElementById('confirma-senha-helper');

 confirmarSenhaInput.addEventListener('blur', (e) => {
   const value = e.target.value

   if (value === senhaInput.value && value.length >= 8) {
       estilizarInputCorreto(confirmarSenhaInput, confirmarSenhaHelper);
       inputCorreto.confirmarSenha = true;
   } else if (value.length >= 8) {
       estilizarInputIncorreto(confirmarSenhaInput, confirmarSenhaHelper);
       confirmarSenhaHelper.innerText = 'As senhas devem ser iguais'
       inputCorreto.confirmarSenha = false;
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
    // Adicionar estilos dinâmicos se o valor estiver incorreto
    emailHelper.innerText = "Inserira um e-mail válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputCorreto.email = false;
  }
})

// ---------- VALIDAÇÃO NASCIMENTO  ---------- //
let nascimentoInput = document.getElementById("nascimento");
let nascimentoLabel = document.querySelector('label[for="nascimento"]');
let nascimentoHelper = document.getElementById("nascimento-helper");

togglePopup(nascimentoInput, nascimentoLabel)

// Validar valor do input
nascimentoInput.addEventListener("change", (e)=> {
  let nascimentoValor = e.target.value

  if(nascimentoValor.length == 10){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nascimentoInput, nascimentoHelper);
    inputCorreto.nascimento = true;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    nascimentoHelper.innerText = "Data de nascimento inválida";
    estilizarInputIncorreto(nascimentoInput, nascimentoHelper);
    inputCorreto.nascimento = false;
  }
})

// ---------- VALIDAÇÃO CELULAR ---------- //
let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("celular-helper");

togglePopup(celularInput, celularLabel)

// Validar valor do input
celularInput.addEventListener("change", (e)=> {
  let celularValor = e.target.value

  if(celularValor.length == 15){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(celularInput, celularHelper);
    inputCorreto.celular = true;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    celularHelper.innerText = "Número inválido";
    estilizarInputIncorreto(celularInput, celularHelper);
    inputCorreto.celular = false;
  }
})

//Limitar a digitação à somente números e até 15 caracteres.
celularInput.oninput = function() {
  if (this.value.length > 15) {
    this.value = this.value.slice(0, 15);
  }
  this.value = this.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

 // -------------- HABILITAR ENVIO DO FORMULÁRIO ------------- //  

 const submitButton = document.getElementById('submit');

 const inputCorreto = {
  username: false,
  email: false,
  senha: false,
  confirmarSenha: false,
  nascimento: false,
  celular: false
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

 //---------------  APARECER O FORMULÁRIO DE REGISTRO/LOGIN ----------------

 document.getElementById("check-register").addEventListener("change", function () {
  if (this.checked) {
  document.querySelector(".form-login").style.display = "block";
  document.querySelector(".form").style.display = "none";
  } else {
  document.querySelector(".form-login").style.display = "none";
  document.querySelector(".form").style.display = "block";
  }
 });

 document.getElementById("form-title-3").addEventListener("click", function () {
  document.querySelector(".form-login").style.display = "none";
  document.querySelector(".form").style.display = "block";
  });
  
  document.getElementById("form-title-4").addEventListener("click", function () {
  document.querySelector(".form-login").style.display = "block";
  document.querySelector(".form").style.display = "none";
  });
  
  
 //---------------- FORMULARIO 2 ------------------------

const formLogin = document.querySelector(".form-login");
const usernameLoginInput = formLogin.querySelector("#username2");
const usernameLoginHelper = formLogin.querySelector("#username-helper-login");
const passwordLoginInput = formLogin.querySelector("#senha-login");
const passwordLoginHelper = formLogin.querySelector("#senha-helper-login");
const submitLoginButton = formLogin.querySelector("#submit2");

const inputLoginStatus = {
  username: false,
  password: false,
};

function handleUsernameInput() {
  const username = usernameLoginInput.value;

  if (username.length < 6) {
    usernameLoginHelper.innerText = "Seu nome de usuário precisa ter 6 ou mais caracteres";
    inputLoginStatus.username = false;
    estilizarInputIncorreto(usernameLoginInput, usernameLoginHelper);
    inputCorreto.username = false;
  } else {
    usernameLoginInput.classList.remove("input-error");
    usernameLoginHelper.classList.remove("helper-error");
    estilizarInputCorreto(usernameLoginInput, usernameLoginHelper);
    inputLoginStatus.username = true;

  }
}

function handlePasswordInput() { 
  const password = passwordLoginInput.value;

  if (password.length < 8) {
    passwordLoginHelper.innerText = "A senha é obrigatória e deve ter o mínimo de 8 caracteres";
    estilizarInputIncorreto(passwordLoginInput, passwordLoginHelper);
    passwordLoginHelper.classList.add("helper-text-login");
    inputLoginStatus.password = false;
  } else {
    estilizarInputCorreto(passwordLoginInput, passwordLoginHelper);
    inputLoginStatus.password = true;
  }
}

function handleSubmitLogin(event) {
  event.preventDefault();

  handleUsernameInput();
  handlePasswordInput();

  const hasErrors = Object.values(inputLoginStatus).includes(false);
  if (!hasErrors) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha todos os campos corretamente");
  }
}

usernameLoginInput.addEventListener("input", handleUsernameInput);
passwordLoginInput.addEventListener("input", handlePasswordInput);
submitLoginButton.addEventListener("click", handleSubmitLogin);


// ------------ SUBTITULO -------------

setTimeout(function () {
  document.getElementById("texto-register").style.display = "block";
}, 4000);

setTimeout(function () {
  document.getElementById("texto-register2").style.display = "block";
}, 5500);

// ------------- FUNDO IMAGEM ----------

const bgMain = document.getElementById("background-main");

const imageLinks = [
  "assets/image/strangert_wallpaper_register.png",
  "assets/image/duna_wallpaper_register.png",
  "assets/image/centralbr_wallpaper_register.png"
];

let currentImage = 0;

bgMain.style.backgroundImage = `url(${imageLinks[currentImage]})`;
bgMain.style.backgroundSize = "cover";
bgMain.style.backgroundAttachment = "fixed";
bgMain.style.backgroundRepeat = "no-repeat";
bgMain.style.imageRendering = "optimizeQuality";

setInterval(() => {
  currentImage = (currentImage + 1) % imageLinks.length;

  const nextImage = new Image();
  nextImage.src = imageLinks[currentImage];
  nextImage.onload = function() {
    bgMain.style.backgroundImage = `url(${imageLinks[currentImage]})`;
  };
}, 10000);


