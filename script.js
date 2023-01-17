function scrolltop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Enviar() {
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert("Obrigado " + nome.value + " sua mensagem foi enviada com sucesso!");
  }
}

function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url =
    "https://api.whatsapp.com/send?phone=5519997679034&text=" + // Seu numero
    "Nome: " +
    nome +
    "%0a" + // Dados do formulário
    "Telefone: " +
    telefone +
    "%0a" +
    "E-mail: " +
    email +
    "%0a" +
    "Mensagem: " +
    msg;
  window.open(url, "_blank").focus();
}
