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
        list.style.display = "block"
        if (isMobile) {
            drop.style.marginTop = "255px"
        } else {
            drop.style.marginTop = "566px"
        }
    } else {
        list.style.display = "none"
        if (isMobile) {
            drop.style.marginTop = "255px"
        } else {
            drop.style.marginTop = "370px"
        }
    }
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


// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDlon_qEWHZN-G0S5_fn79bIa0kh6BzYOM",
    authDomain: "gleicianelima-6ec50.firebaseapp.com",
    databaseURL: "https://gleicianelima-6ec50-default-rtdb.firebaseio.com", // URL do Realtime Database
    projectId: "gleicianelima-6ec50",
    storageBucket: "gleicianelima-6ec50.appspot.com",
    messagingSenderId: "719666520846",
    appId: "1:719666520846:web:9d207b947e6d4585a7ad5f",
    measurementId: "G-VQZS6N0Q51"
  };
  
  // Verifica se o Firebase já foi inicializado
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  // Função para adicionar dados ao Realtime Database
  function teste() {
    const ref = firebase.database().ref('sla/'); // Substitua pelo caminho correto
  
    ref.set({
      arquivo1: {
        nome: 'arquivo1.txt',
        conteudo: 'Conteúdo do arquivo 1'
      },
      arquivo2: {
        nome: 'arquivo2.txt',
        conteudo: 'Conteúdo do arquivo 2'
      }
    })
    .then(() => {
      console.log('Dados adicionados com sucesso');
    })
    .catch(error => {
      console.error('Erro ao adicionar dados:', error);
    });
  }
  