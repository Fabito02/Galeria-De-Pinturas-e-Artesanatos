  // Verifica se há um usuário autenticado ao carregar a página
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = 'login.html';
    }
  });

  class Firebase {
    constructor(file, description, usuario) {
      this.file = file
      this.description = description
      this.usuario = usuario
    }

    upload() {
    if (!this.file) {
      Swal.fire({
        icon: "info",
        title: "Espera aí!",
        text: "Selecione um arquivo",
        confirmButtonColor: "#a07146",
        iconColor: "#b9895d",
      });
      return;
    }

    if (!this.usuario) {
      Swal.fire({
        icon: "info",
        title: "Ação Bloqueada",
        text: 'Você precisa logar como Admin para fazer upload de arquivos.',
        confirmButtonColor: "#a07146",
        iconColor: "#b9895d",
      });
      return;
    }

    // Determina se o arquivo é uma imagem ou um vídeo
    const fileType = this.file.type.split('/')[0];
    const folder = fileType === 'image' ? 'images' : 'videos';
    const storageRef = storage.ref(`${folder}/${this.file.name}`);

    const uploadTask = storageRef.put(this.file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        var textProgress = document.getElementById('uploadProgress');
        textProgress.innerHTML = `Progresso: ${progress.toFixed(2)}%`;
        console.log(`Progresso: ${progress.toFixed(2)}%`);
      },
      (error) => {
        console.error('Erro ao fazer upload: ', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algum erro ocorreu ao enviar o arquivo",
          confirmButtonColor: "#a07146",
        });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('Arquivo enviado com sucesso: ', downloadURL);
          Swal.fire({
            title: "Sucesso",
            text: "O Arquivo foi enviado com Sucesso!",
            confirmButtonColor: "#a07146",
            icon: "success"
          });

          const key = db.ref().child(folder).push().key;
          
          function formatarData() {
            const dataAtual = new Date();
            const dia = dataAtual.getDate().toString().padStart(2, '0'); 
            const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); 
            const ano = dataAtual.getFullYear();
            const hora = dataAtual.getHours().toString().padStart(2, '0'); 
            const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
            return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
          }
          const dataHoraAtual = formatarData();
          const postData = {
            uid: this.usuario.uid,
            fileUrl: downloadURL,
            description: this.description,
            dataDaPostagem: dataHoraAtual,
          };

          let updates = {};
          updates[`/${folder}/` + key] = postData;

          db.ref().update(updates)
            .then(() => {
              console.log('Dados salvos no Banco de Dados (Realtime Database) com sucesso');
              document.getElementById('file-input').value = '';
              document.getElementById('descricao').value = '';
              document.getElementById('uploadProgress').innerHTML = '';
            })
            .catch((error) => {
              console.error('Erro ao salvar dados: ', error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algum erro ocorreu ao salvar os dados",
                confirmButtonColor: "#a07146",
              });
            });
        });
      }
    );

    }

    logout() {
    firebase.auth().signOut()
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
        alert('Ocorreu um erro ao fazer logout.');
      });
    }
  }

  function login() {
    const arquivo = document.getElementById('file-input').files[0];
    const descricao = document.getElementById('descricao').value;
    const user = auth.currentUser;

    new Firebase(arquivo, descricao, user).logar()
  }

  function logout() {
    new Firebase().logout()
  }

  function uploadFile() {
    const arquivo = document.getElementById('file-input').files[0];
    const descricao = document.getElementById('descricao').value;
    const user = auth.currentUser;

    new Firebase(arquivo, descricao, user).upload()
  }