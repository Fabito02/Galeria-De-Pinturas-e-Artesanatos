
class Gerenciar {
    constructor(chave, dados) {
      this.chave = chave;
      this.dados = dados;
    }

    novaDescricaoImage() {
      const key = this.chave;
      const imagData = this.dados;
      const newDescription = prompt('Digite a nova descrição (até 250 caracteres):').slice(0, 250);

      if (newDescription === "") {
        Swal.fire({
          icon: "info",
          title: "Espera aí!",
          text: "Você precisa escrever algo para prosseguir.",
          confirmButtonColor: "#a07146",
          iconColor: "#b9895d",
        });
      } else if (newDescription === null) {
        Swal.fire({
          icon: "info",
          title: "Operação cancelada!",
          confirmButtonColor: "#a07146",
          iconColor: "#b9895d",
        });
      } else {
        db.ref('images/' + key).update({ description: newDescription })
          .then(() => {
            Swal.fire({
              title: "Sucesso",
              text: "Descrição atualizada com sucesso!",
              confirmButtonColor: "#a07146",
              icon: "success"
            });
            loadMedia(); // Recarrega as imagens
          })
          .catch((error) => {
            console.error('Erro ao atualizar descrição:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algum erro ocorreu ao atualizar a descrição.",
              confirmButtonColor: "#a07146",
            });
          });
      }
    }

    deleteImage() {
  const key = this.chave;
  const imageData = this.dados;
  const confirmDelete = confirm('Tem certeza de que deseja excluir esta imagem?');

  if (!confirmDelete) {
    return; // Cancela e não exclui
  }

  const fileUrl = imageData.fileUrl; // Assume que 'fileUrl' é a URL da imagem no Storage

  // Deleta do Realtime Database
  db.ref('images/' + key).remove().then(() => { 
    
  // Deleta do Storage
  const storageRef = firebase.storage().refFromURL(fileUrl);

  storageRef.delete().then(() => {
      Swal.fire({
        title: "Sucesso",
        text: "Postagem excluída com sucesso!",
        confirmButtonColor: "#a07146",
        icon: "success"
      });
      loadMedia(); // Recarrega
    }).catch((error) => {
      console.error('Erro ao excluir postagem:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algum erro ocorreu ao excluir a postagem.",
        confirmButtonColor: "#a07146",
      });
      loadMedia(); // Recarrega
    });
  }).catch((error) => {
    console.error('Erro ao excluir postagem:', error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algum erro ocorreu ao excluir a postagem.",
      confirmButtonColor: "#a07146",
    });
    loadMedia(); // Recarrega
  });
}

    novaDescricaoVideo() {
      const key = this.chave;
      const imagData = this.dados;
      const newDescription = prompt('Digite a nova descrição (até 250 caracteres):').slice(0, 250);

      if (newDescription === "") {
        Swal.fire({
          icon: "info",
          title: "Espera aí!",
          text: "Você precisa escrever algo para prosseguir.",
          confirmButtonColor: "#a07146",
          iconColor: "#b9895d",
        });
      } else if (newDescription === null) {
        Swal.fire({
          icon: "info",
          title: "Operação cancelada!",
          confirmButtonColor: "#a07146",
          iconColor: "#b9895d",
        });
      } else {
        db.ref('videos/' + key).update({ description: newDescription })
          .then(() => {
            Swal.fire({
              title: "Sucesso",
              text: "Descrição atualizada com sucesso!",
              confirmButtonColor: "#a07146",
              icon: "success"
            });
            loadMedia(); // Recarrega
          })
          .catch((error) => {
            console.error('Erro ao atualizar descrição:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algum erro ocorreu ao atualizar a descrição.",
              confirmButtonColor: "#a07146",
            });
          });
      }
    }

    deleteVideo() {
  const key = this.chave;
  const imageData = this.dados;
  const confirmDelete = confirm('Tem certeza de que deseja excluir esta postagem?');

  if (!confirmDelete) {
    return; // Cancela e não exclui
  }

  const fileUrl = imageData.fileUrl; // Assume que 'fileUrl' é a URL do vídeo no Storage

  // Deleta do Realtime Database
  db.ref('videos/' + key).remove().then(() => {

  // Deleta do Storage
  const storageRef = firebase.storage().refFromURL(fileUrl);
  storageRef.delete().then(() => {

      Swal.fire({
        title: "Sucesso",
        text: "Postagem excluída com sucesso!",
        confirmButtonColor: "#a07146",
        icon: "success"
      });
      loadMedia(); // Recarrega
    }).catch((error) => {
      console.error('Erro ao excluir postagem:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algum erro ocorreu ao excluir a postagem.",
        confirmButtonColor: "#a07146",
      });
      loadMedia(); // Recarrega
    });
  }).catch((error) => {
    console.error('Erro ao excluir postagem:', error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algum erro ocorreu ao excluir a postagem.",
      confirmButtonColor: "#a07146",
    });
    loadMedia(); // Recarrega
  });
}

    logout() {
      firebase.auth().signOut()
        .then(() => {
          // Logout bem sucedido, redireciona para a página de login
          window.location.href = 'login.html';
        })
        .catch((error) => {
          console.error('Erro ao fazer logout:', error);
          alert('Ocorreu um erro ao fazer logout.');
        });
    }
  }

  // Verifica se há um usuário autenticado ao carregar a página
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      loadMedia();
    } else {
      window.location.href = 'login.html';
    }
  });

  // Função para carregar as imagens
  function loadMedia() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Limpa o conteúdo da galeria

    db.ref('images').once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const imageData = childSnapshot.val();
        const imageKey = childSnapshot.key;

        const imageElement = document.createElement('div');
        imageElement.classList.add('image');

        const img = document.createElement('img');
        img.src = imageData.fileUrl;
        imageElement.appendChild(img);

        const description = document.createElement('h4');
        description.textContent = imageData.description;
        imageElement.appendChild(description);

        // Adiciona os botões de edição e remoção
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => editImage(imageKey, imageData));
        imageElement.appendChild(editButton);
        editButton.classList.add('botao');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => deleteImage(imageKey, imageData));
        imageElement.appendChild(deleteButton);
        deleteButton.classList.add('botao');

        gallery.insertBefore(imageElement, gallery.firstChild);
      });

      db.ref('videos').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const videoData = childSnapshot.val();
          const videoKey = childSnapshot.key;

          const videoElement = document.createElement('div');
          videoElement.classList.add('video');

          const video = document.createElement('video');
          video.src = videoData.fileUrl;
          video.setAttribute('controls', true);
          videoElement.appendChild(video);

          const description = document.createElement('h4');
          description.textContent = videoData.description;
          videoElement.appendChild(description);

          // Adiciona os botões de edição e remoção
          const editButton = document.createElement('button');
          editButton.textContent = 'Editar';
          editButton.addEventListener('click', () => editVideo(videoKey, videoData));
          videoElement.appendChild(editButton);
          editButton.classList.add('botao');

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Excluir';
          deleteButton.addEventListener('click', () => deleteVideo(videoKey, videoData));
          videoElement.appendChild(deleteButton);
          deleteButton.classList.add('botao');

          gallery.insertBefore(videoElement, gallery.firstChild);
        });
      });
    });
  }

  // Função para editar a descrição
  function editImage(key, imageData) {
    new Gerenciar(key, imageData).novaDescricaoImage();
  }
  function editVideo(key, videoData) {
    new Gerenciar(key, videoData).novaDescricaoVideo();
  }

  // Função para excluir
  function deleteImage(key, imageData) {
        new Gerenciar(key, imageData).deleteImage();
  }
  function deleteVideo(key, videoData) {
        new Gerenciar(key, videoData).deleteVideo();
  }


  // Função para logout
  function logout() {
    new Gerenciar().logout()
  }