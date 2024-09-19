



const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        // Mudar para tema escuro
        body.classList.replace("light-theme", "dark-theme");
        themeIcon.src = "moon.png";
        themeIcon.alt = "Tema Escuro";
    } else {
        // Mudar para tema claro
        body.classList.replace("dark-theme", "light-theme");
        themeIcon.src = "sun.png";
        themeIcon.alt = "Tema Claro";
    }
});

var btn = document.getElementById('btn-div');
var container = document.querySelector('.historia');
btn.addEventListener('click', function() {
    
if(container.style.display === 'block') {
    container.style.display = 'none';
} else {
    container.style.display = 'block';
}
});

var btn2 = document.getElementById('btn-div2');
var container2 = document.querySelector('.historia2');
btn2.addEventListener('click', function() {
    
if(container2.style.display === 'block') {
    container2.style.display = 'none';
} else {
    container2.style.display = 'block';
}
});

var btn3 = document.getElementById('btn-div3');
var container3 = document.querySelector('.historia3');
btn3.addEventListener('click', function() {
    
if(container3.style.display === 'block') {
    container3.style.display = 'none';
} else {
    container3.style.display = 'block';
}
});

var btn4 = document.getElementById('btn-div4');
var container4 = document.querySelector('.historia4');
btn4.addEventListener('click', function() {
    
if(container4.style.display === 'block') {
    container4.style.display = 'none';
} else {
    container4.style.display = 'block';
}
});

var btn5 = document.getElementById('btn-div5');
var container5 = document.querySelector('.historia5');
btn5.addEventListener('click', function() {
    
if(container5.style.display === 'block') {
    container5.style.display = 'none';
} else {
    container5.style.display = 'block';
}
});