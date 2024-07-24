    // Event listener para o formulário de login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm['email'].value;
      const password = loginForm['password'].value;

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.history.back(); //redireciona para a página anterior caso o login seja bem sucedido
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          document.getElementById('message').textContent = errorMessage;
        });
    });