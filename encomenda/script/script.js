//bgl pra animar o botão quando eu clicar
function animacaoDoMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
}
function mostrarRedesSociais() {
    var list = document.getElementById("social")
    var drop = document.getElementById("dropdown")
    var seta = document.getElementById("setaAnimada")
    seta.classList.toggle("active")

    var isMobile = window.matchMedia("(max-width: 720px)").matches

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


    var social = document.getElementById("social")
    social.classList.toggle("active")
  }


  document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("LlYA9GN3QhSh4Y6-x");
  });
  
  function enviarPedido() {
    var nomeCliente = document.getElementById('nomeCliente').value.trim();
    var emailCliente = document.getElementById('emailCliente').value.trim();
    var telefoneCliente = document.getElementById('telefoneCliente').value.trim();
    var descricaoPedido = document.getElementById('descricao').value;
    var cidadeCliente = document.getElementById('cidadeCliente').value.trim();
    var bairroCliente = document.getElementById('bairroCliente').value.trim();
    var linkImagem = document.getElementById('link').value.trim();
    var casaCliente = document.getElementById('casaCliente').value;
  
    if (nomeCliente === "" || emailCliente === "" || telefoneCliente === "" || descricaoPedido === "" || cidadeCliente === "" || bairroCliente === "" || isNaN(casaCliente)) {
      alert("Preencha todos os campos corretamente");
      return;
    }
  
    emailjs.send("service_ufnl1o9", "template_p331abb", {
      from_name: nomeCliente,
      dica: "*Dica: Responda o cliente o quanto antes para não perde-lo",
      descricao: descricaoPedido,
      to_name: "Gleiciane",
      email: emailCliente,
      telefone: telefoneCliente,
      cidade: cidadeCliente,
      bairro: bairroCliente,
      casa: casaCliente,
      link: linkImagem
    }).then(function(response) {
      alert("Pedido enviado com sucesso!");
    }, function(error) {
      alert("Erro ao enviar o pedido");
      console.error("Erro ao enviar o pedido", error);
    });
  }
  
  