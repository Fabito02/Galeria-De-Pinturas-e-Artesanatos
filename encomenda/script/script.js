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
    var ruaCliente = document.getElementById('ruaCliente').value.trim();
    var linkImagem = document.getElementById('link').value.trim();
    var casaCliente = document.getElementById('casaCliente').value;
  
    if (nomeCliente === "" || emailCliente === "" || telefoneCliente === "" || descricaoPedido === "" || cidadeCliente === "" || bairroCliente === "" || isNaN(casaCliente) || ruaCliente === "" || isNaN(telefoneCliente) || casaCliente === "") {
      Swal.fire({
        icon: "info",
        title: "Espere um pouco!",
        text: "Preencha todos os campos obrigatórios!",
        confirmButtonColor: "#a07146",
        iconColor: "#b9895d",
        borderRadius: '16px',
      });
      return;
    }
  
    emailjs.send("service_ufnl1o9", "template_p331abb", {
      from_name: nomeCliente,
      dica: "*OBS: Responda o cliente o quanto antes para não perde-lo",
      descricao: descricaoPedido,
      to_name: "Gleiciane",
      email: emailCliente,
      telefone: telefoneCliente,
      cidade: cidadeCliente,
      bairro: bairroCliente,
      casa: casaCliente,
      link: linkImagem,
      rua: ruaCliente,
    }).then(function(response) {
      Swal.fire({
        title: "Sucesso",
        text: "Seu Pedido foi Enviado com Sucesso!",
        confirmButtonColor: "#a07146",
        icon: "success"
      });
    }, function(error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado! Tente novamente.",
        confirmButtonColor: "#a07146",
      });
      console.error("Erro ao enviar o pedido", error);
    });
  }


  // Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "gleicianelima-6ec50.firebaseapp.com",
  databaseURL: "https://gleicianelima-6ec50-default-rtdb.firebaseio.com", // URL do Realtime Database
  projectId: "gleicianelima-6ec50",
  storageBucket: "gleicianelima-6ec50.appspot.com",
  messagingSenderId: "719666520846",
  appId: "1:719666520846:web:9d207b947e6d4585a7ad5f",
  measurementId: "G-VQZS6N0Q51"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

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
