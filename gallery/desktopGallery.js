var isMobile = window.matchMedia("(max-width: 720px)").matches; 

    if (isMobile != true) { 
        // Função para abrir o modal com a imagem clicada
        function abrirModal(fileUrl) {
          let modal = document.getElementById("modal");
          let imagemModal = document.getElementById("imagem-modal");
          imagemModal.src = fileUrl;
          modal.style.display = "block";
        }
    }

// Função pra fechar o modal
function fecharModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}