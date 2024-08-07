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
          const errorMessage = "Login ou senha incorretos."
          document.getElementById('message').textContent = errorMessage;
        });
    });

let isPasswordVisible = false;

document.getElementById('olho').addEventListener('mousedown', function() {
  document.getElementById('password').type = 'text';
  document.getElementById('olho').innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
});

document.getElementById('olho').addEventListener('mouseup', function() {
  document.getElementById('password').type = 'password';
  document.getElementById('olho').innerHTML = '<i class="fa-solid fa-eye"></i>';
});

// Para que o password não fique exposto após mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
  document.getElementById('password').type = 'password';
  document.getElementById('olho').innerHTML = '<i class="fa-solid fa-eye"></i>';
});

document.getElementById('olho').addEventListener('click', function() {
  if (isPasswordVisible) {
    document.getElementById('password').type = 'password';
    document.getElementById('olho').innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    document.getElementById('password').type = 'text';
    document.getElementById('olho').innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  }
  isPasswordVisible = !isPasswordVisible;
});
