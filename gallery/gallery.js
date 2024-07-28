class Firebase {
  constructor() {
  }

  carregarImagens() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    db.ref('images').once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const imageData = childSnapshot.val();
        const imageKey = childSnapshot.key;

        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        imageElement.addEventListener('click', () => abrirModal(imageData.fileUrl));

        const img = document.createElement('img');
        img.src = imageData.fileUrl;
        img.alt = imageData.description;
        imageElement.appendChild(img);

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const text = document.createElement('div');
        text.classList.add('text');
        text.textContent = imageData.description;

        overlay.appendChild(text);
        imageElement.appendChild(overlay);

            // Insere o novo elemento antes do primeiro filho existente
        gallery.insertBefore(imageElement, gallery.firstChild);


      });
    });
  }
  
  carregarVideos() {
    const gallery = document.getElementById('galleryVideo');
    gallery.innerHTML = '';

    db.ref('videos').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const videoData = childSnapshot.val();
            const videoKey = childSnapshot.key;

            const videoElement = document.createElement('span');
            videoElement.classList.add('video');

            const video = document.createElement('video');
            video.src = videoData.fileUrl;
            video.setAttribute('controls', true);
            videoElement.appendChild(video);

            const text = document.createElement('span');
            text.classList.add('textVideo');
            const conteudo = document.createElement('span');
            conteudo.classList.add('conteudoText');
            conteudo.textContent = videoData.description;
            text.appendChild(conteudo);
            videoElement.appendChild(text);

            gallery.insertBefore(videoElement, gallery.firstChild);
        });
    });
}
}

// Funções para carregar imagens e vídeos
function loadImages() {
  new Firebase().carregarImagens();
}

function loadVideos() {
  new Firebase().carregarVideos();
}

document.addEventListener('DOMContentLoaded', () => {
  loadImages();
});


function mostrarImagens() {
  gallery = document.getElementById('gallery').style.display = "flex";
  galleryVideos = document.getElementById('galleryVideo').style.display = "none";
  loadImages();
}

function mostrarVideos() {
  gallery = document.getElementById('gallery').style.display = "none";
  galleryVideos = document.getElementById('galleryVideo').style.display = "flex";
  loadVideos();
}

var isMobile = window.matchMedia("(max-width: 720px)").matches; 

    if (isMobile != true) { 
        // Função para abrir o modal com a imagem clicada
        function abrirModal(fileUrl) {
          let main = document.querySelector("main")
          let modal = document.getElementById("modal");
          let imagemModal = document.getElementById("imagem-modal");
          main.style.filter = "blur(7px)"
          imagemModal.src = fileUrl;
          modal.style.display = "flex";
        }
    }

// Função pra fechar o modal
function fecharModal() {
  let main = document.querySelector("main")
  let modal = document.getElementById("modal");
  modal.style.display = "none";
  main.style.filter = "blur(0px)"
}

window.onclick = function(event) {
    if (event.target == modal) {
        fecharModal();
    }
}