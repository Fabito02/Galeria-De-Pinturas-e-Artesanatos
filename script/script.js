//bgl pra animar o botão quando eu clicar

class Menu {
    constructor(menuToOpen) {
      this.menuToOpen = menuToOpen
    }
  
    openMenu() {
      this.menuToOpen.classList.toggle('active')
    }
  }
  
  var menu = document.getElementById('menu')
  function animacaoDoMenu() {
    new Menu(menu).openMenu()
  }

  
class Social {
    constructor(list, drop, seta) {
        this.list = list
        this.drop = drop
        this.seta = seta
    }

    setSocial() {
    this.seta.classList.toggle("active");

    var isMobile = window.matchMedia("(max-width: 720px)").matches; 

    if (this.list.style.display === "none" || this.list.style.display === "") {
        this.list.style.display = "block"
        if (isMobile) {
            this.drop.style.marginTop = "230px"
        } else {
            this.drop.style.marginTop = "555px"
        }
    } else {
        this.list.style.display = "none"
        if (isMobile) {
            this.drop.style.marginTop = "230px"
        } else {
            this.drop.style.marginTop = "370px"
        }
    }
        
    }
}

    var social = document.getElementById("social");
    var dropdown = document.getElementById("dropdown");
    var setaAnimada = document.getElementById("setaAnimada");

function mostrarRedesSociais() {
    new Social(social, dropdown, setaAnimada).setSocial()
}


function toggleSocial() {
    var social = document.getElementById("social");
    social.classList.toggle("active");
  }


  //Slider
   
// Seleciona todas as imagens do slider e todos os pontos (dots)
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // índice da primeira imagem
const intervalo = 4000; // duração (velocidade) do slide

function changeSlide(n) {
    // Reinicia todas as imagens e dots
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        imgs[i].style.transition = 'opacity 0.5s';
        dots[i].classList.remove('active');
        dots[i].style.transition = 'all 1s';
    }

    currentImg = n; // atualiza o índice da imagem atual

    imgs[currentImg].style.opacity = 1; // mostra a imagem atual
    dots[currentImg].classList.add('active'); // marca o dot como ativo
    dots[currentImg].style.transition = 'all 1s';
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
