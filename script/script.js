//bgl pra animar o botão quando eu clicar
function animacaoDoMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
}
function mostrarRedesSociais() {
    var list = document.getElementById("social");
    var drop = document.getElementById("dropdown");
    var seta = document.getElementById("setaAnimada");
    seta.classList.toggle("active");

    var isMobile = window.matchMedia("(max-width: 720px)").matches; 

    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
        if (isMobile) {
            drop.style.marginTop = "255px";
        } else {
            drop.style.marginTop = "510px";
        }
    } else {
        list.style.display = "none";
        if (isMobile) {
            drop.style.marginTop = "255px";
        } else {
            drop.style.marginTop = "315px";
        }
    }
}


function toggleSocial() {
    var social = document.getElementById("social");
    social.classList.toggle("active");
  }

   
// Seleciona todas as imagens do slider e todos os pontos (dots)
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // índice da primeira imagem
const intervalo = 2500; // duração (velocidade) do slide

function changeSlide(n) {
    // Reinicia todas as imagens e dots
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('active');
    }

    currentImg = n; // atualiza o índice da imagem atual

    imgs[currentImg].style.opacity = 1; // mostra a imagem atual
    dots[currentImg].classList.add('active'); // marca o dot como ativo
}

var timer = setInterval(function() {
    changeSlide(currentImg); // chama a função para mostrar a próxima imagem
    currentImg = (currentImg + 1) % imgs.length; // atualiza o índice da próxima imagem
}, intervalo);

// Se n não for undefined, para o timer, atualiza o índice e reinicia o timer
if (n !== undefined) {
    clearInterval(timer);
    timer = setInterval(function() {
        changeSlide(currentImg); // chama a função para mostrar a próxima imagem
        currentImg = (currentImg + 1) % imgs.length; // atualiza o índice da próxima imagem
    }, intervalo);
    currentImg = n; // atualiza o índice da imagem atual
}



