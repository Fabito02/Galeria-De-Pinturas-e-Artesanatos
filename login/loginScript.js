function login() {
  var user = document.getElementById("usuario").value // obtendo o valor do campo de usuário
  var pass = document.getElementById("senha").value // obtendo o valor do campo de senha
  
  if (user === "admin") {
    if (pass === "12345") { 
      alert("Bem vindo Gleiciane Lima")
      window.open('../gallery/gallery.html', '_blank');
    } else {
      alert("Login ou senha incorretos!")
    }
  } else {
    alert("Login ou senha incorretos!")
  }
}
