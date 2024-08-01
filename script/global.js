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

// Classe Social para gerenciar o dropdown das redes sociais
class Social {
    constructor(list, drop, seta) {
        this.list = list;
        this.drop = drop;
        this.seta = seta;
    }

    setSocial() {
        this.seta.classList.toggle("active");

        var isMobile = window.matchMedia("(max-width: 720px)").matches;

        if (this.list.style.display === "none" || this.list.style.display === "") {
            this.list.style.display = "block";
            this.drop.style.marginTop = isMobile ? "230px" : "555px";
        } else {
            this.list.style.display = "none";
            this.drop.style.marginTop = isMobile ? "230px" : "370px";
        }
    }
}

var social = document.getElementById("social");
var dropdown = document.getElementById("dropdown");
var setaAnimada = document.getElementById("setaAnimada");

function mostrarRedesSociais() {
    new Social(social, dropdown, setaAnimada).setSocial();
}

// Função para alternar a classe 'active' no social
function toggleSocial() {
    social.classList.toggle("active");
}

function primeiraParte() {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
    const returnTop = document.getElementById('return');
    if (window.scrollY > 0) {
        returnTop.style.transform = 'translateY(0px)';
    } else {
        returnTop.style.transform = 'translateY(80px)';
    }
}

window.addEventListener('scroll', handleScroll);
