// Classe Menu para animar o menu
class Menu {
    constructor(menuToOpen) {
        this.menuToOpen = menuToOpen;
    }

    openMenu() {
        this.menuToOpen.classList.toggle('active');
    }
}

// Instância e função para animar o menu
var menu = document.getElementById('menu');
function animacaoDoMenu() {
    new Menu(menu).openMenu();
}

function primeiraParte() {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
}

const returnTop = document.getElementById('return');
const header = document.querySelector('header');

function headerStyles() {
    if (window.scrollY > 0) {
        header.style.boxShadow = "0px 6px 8px 0px #00000025"
        header.style.backgroundColor = "#ffffff50"
    } else {
        header.style.boxShadow = ""
        header.style.backgroundColor = "#00000000"
    }
}

function returnButton() {
    if (window.scrollY > 0) {
        returnTop.style.transform = 'translateY(0px)';
    } else {
        returnTop.style.transform = 'translateY(80px)';
    }
}

window.addEventListener('scroll', headerStyles);
window.addEventListener('scroll', returnButton);

// Função para aplicar lazy loading em uma imagem
function applyLazyLoading(img) {
    if (img.tagName === 'IMG') {
        img.setAttribute('loading', 'lazy');
    }
}

function mostrarRedesSociais() {
  var setasAnimadas = document.querySelectorAll('.setaAnimada');
  var social = document.querySelectorAll('.social');

  social.forEach(function(social) {
    social.classList.toggle('active');
  });

  setasAnimadas.forEach(function(setaAnimada) {
    setaAnimada.classList.toggle('active');
  });
}

// Aplica lazy loading em todas as imagens que já estão no DOM
document.querySelectorAll('img').forEach(applyLazyLoading);

// Observa o DOM para detectar novas imagens e aplica lazy loading nelas
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.tagName === 'IMG') {
                applyLazyLoading(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                node.querySelectorAll('img').forEach(applyLazyLoading);
            }
        });
    });
});

// Configura o observer para observar adições de nós ao corpo do documento
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

