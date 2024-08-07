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

document.getElementById('olho').addEventListener('click', function() {
  var passwordField = document.getElementById('password');
  var olhoIcon = document.getElementById('olho');
  
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    olhoIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    passwordField.type = 'password';
    olhoIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
});
