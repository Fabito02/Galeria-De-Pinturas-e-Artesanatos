
class Gerenciar {
    constructor(chave, dados) {
      this.chave = chave;
      this.dados = dados;
    }

    novaDescricaoImage() {
      const key = this.chave;
      const imagData = this.dados;
      Swal.fire({
        title: 'Digite a nova descrição (até 250 caracteres):',
        input: 'text',
        inputAttributes: {
          maxlength: 250
        },
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        confirmButtonColor: '#5caf4c',
        cancelButtonColor: '#dd4141',
        cancelButtonText: 'Cancelar',
        activeLoaderOnConfirm: true,
        preConfirm: (newDescription) => {
          if (!newDescription) {
            Swal.activeValidationMessage('Você precisa escrever algo para prosseguir.');
          }
          return newDescription;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const newDescription = result.value;
          db.ref('images/' + key).update({ description: newDescription })
            .then(() => {
              Swal.fire({
                title: 'Sucesso',
                text: 'Descrição atualizada com sucesso!',
                icon: 'success',
                confirmButtonColor: '#a07146'
              });
              loadMedia(); // Recarrega as imagens
            })
            .catch((error) => {
              console.error('Erro ao atualizar descrição:', error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algum erro ocorreu ao atualizar a descrição.',
                confirmButtonColor: '#a07146'
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: 'info',
            title: 'Operação cancelada!',
            confirmButtonColor: '#a07146',
            iconColor: '#e0b382'
          });
        }
      });
    }

    deleteImage() {
  const key = this.chave;
  const imageData = this.dados;
  Swal.fire({
    title: 'Tem certeza de que deseja excluir esta postagem?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#5caf4c',
    cancelButtonColor: '#dd4141',
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
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
    } else {
      return;
    }

  });

}

    novaDescricaoVideo() {
      const key = this.chave;
      const imagData = this.dados;
      Swal.fire({
        title: 'Digite a nova descrição (até 250 caracteres):',
        input: 'text',
        inputAttributes: {
          maxlength: 250
        },
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        confirmButtonColor: '#5caf4c',
        cancelButtonColor: '#dd4141',
        cancelButtonText: 'Cancelar',
        activeLoaderOnConfirm: true,
        preConfirm: (newDescription) => {
          if (!newDescription) {
            Swal.activeValidationMessage('Você precisa escrever algo para prosseguir.');
          }
          return newDescription;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const newDescription = result.value;
          db.ref('videos/' + key).update({ description: newDescription })
            .then(() => {
              Swal.fire({
                title: 'Sucesso',
                text: 'Descrição atualizada com sucesso!',
                icon: 'success',
                confirmButtonColor: '#a07146'
              });
              loadMedia(); // Recarrega
            })
            .catch((error) => {
              console.error('Erro ao atualizar descrição:', error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algum erro ocorreu ao atualizar a descrição.',
                confirmButtonColor: '#a07146'
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: 'info',
            title: 'Operação cancelada!',
            confirmButtonColor: '#a07146',
            iconColor: '#b9895d'
          });
        }
      });      
}

deleteVideo() {
  const key = this.chave;
  const imageData = this.dados;
  Swal.fire({
    title: 'Tem certeza de que deseja excluir esta postagem?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#5caf4c',
    cancelButtonColor: '#dd4141',
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
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
    } else {
      return;
    }
  })
}

    logout() {
      firebase.auth().signOut()
        .then(() => {
          // Logout bem sucedido, redireciona para a página de login
          window.location.href = 'login.html';
        })
        .catch((error) => {
          console.error('Erro ao fazer logout:', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algum erro ocorreu ao fazer logout.",
            confirmButtonColor: "#a07146",
          });
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

  // Função para carregar as postagens
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
        description.innerHTML = `${imageData.description}<br><br>(${imageData.dataDaPostagem})`;
        imageElement.appendChild(description);

        // Adiciona os botões de edição e remoção
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Editar <i class="fas fa-edit"></i>';
        editButton.addEventListener('click', () => editImage(imageKey, imageData));
        imageElement.appendChild(editButton);
        editButton.classList.add('editar');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Excluir <i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => deleteImage(imageKey, imageData));
        imageElement.appendChild(deleteButton);
        deleteButton.classList.add('deletar');

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
          video.volume = 0
          videoElement.appendChild(video);

          const description = document.createElement('h4');
          description.innerHTML = `${videoData.description}<br><br>${videoData.dataDaPostagem})`;
          videoElement.appendChild(description);

          // Adiciona os botões de edição e remoção
          const editButton = document.createElement('button');
          editButton.innerHTML = 'Editar <i class="fas fa-edit"></i>';
          editButton.addEventListener('click', () => editVideo(videoKey, videoData));
          videoElement.appendChild(editButton);
          editButton.classList.add('editar');

          const deleteButton = document.createElement('button');
          deleteButton.innerHTML = 'Excluir <i class="fas fa-trash-alt"></i>';
          deleteButton.addEventListener('click', () => deleteVideo(videoKey, videoData));
          videoElement.appendChild(deleteButton);
          deleteButton.classList.add('deletar');

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