const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-autores");
const optionsList = document.querySelectorAll(".option");
const allStars = document.querySelectorAll(".star-resenha");
const newTab = 'resenha-completa.html';


function openNewTab(newTab) {
  const win = window.open(newTab, 'blank');
  win.focus();
}

function Reset() {
    let autores = document.getElementById("autores");
    autores.selectedIndex = 0;
}

var select = document.getElementById('autores');

select.addEventListener('change', () => {
  openNewTab(newTab);
  Reset();
});


//---------------------- TABS -----------------------//

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




