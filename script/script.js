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


