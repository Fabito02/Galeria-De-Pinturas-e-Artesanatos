function login() {
  var userField = document.getElementById("usuario");
  var passField = document.getElementById("senha");
  var error = document.getElementById("error");

  var user = userField.value; // obtendo o valor do campo de usuário
  var pass = passField.value; // obtendo o valor do campo de senha

  if (user === "admin" && pass === "12345") {
      alert("Bem-vindo Gleiciane Lima");
      window.open('../gallery/gallery.html', '_blank');
  } else {
      error.style.color = '#ca1515';
      error.innerHTML = "Login ou senha incorretos!";
      userField.style.borderColor = '#ca1515';
      passField.style.borderColor = '#ca1515';
  }
}

function novaSenha() {
  var userField = document.getElementById("usuario");
  var passField = document.getElementById("senha");
  var error = document.getElementById("error");

  var user = userField.value; // obtendo o valor do campo de usuário
  var pass = passField.value; // obtendo o valor do campo de senha

  if (user === "admin" && pass === "12345") {
      alert("Bem-vindo Gleiciane Lima");
      window.open('../gallery/gallery.html', '_blank');
  } else {
      error.style.color = '#ca1515';
      error.innerHTML = "Login ou senha incorretos!";
      userField.style.borderColor = '#ca1515';
      passField.style.borderColor = '#ca1515';
  }
}