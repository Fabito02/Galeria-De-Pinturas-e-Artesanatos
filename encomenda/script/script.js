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


  // Configuração do Firebase<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaVIJxHPHkiLLY8qw8cp2KxGBH1Mv0jn0",
  authDomain: "pinturas-e-artesanatos-gl.firebaseapp.com",
  databaseURL: "https://pinturas-e-artesanatos-gl-default-rtdb.firebaseio.com",
  projectId: "pinturas-e-artesanatos-gl",
  storageBucket: "pinturas-e-artesanatos-gl.appspot.com",
  messagingSenderId: "817700092735",
  appId: "1:817700092735:web:91076dbdca2010b8f6b18a",
  measurementId: "G-BZLN1EJXLL"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  
  // Função para registrar um usuário
  function registrar(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Usuário registrado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Erro ao registrar:", error);
    });
  }

  // Função para fazer login de um usuário
  function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error);
    });
  }

  // Função para fazer logout
  function logout() {
    firebase.auth().signOut().then(() => {
      console.log("Usuário deslogado");
    }).catch((error) => {
      console.error("Erro ao fazer logout:", error);
    });
  }
