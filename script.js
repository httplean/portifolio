// script.js
function enviarWhatsapp() {
    var nome = document.querySelector('.nome').value;
    var email = document.querySelector('.email').value;
    var mensagem = document.querySelector('.mensagem').value;

    var url = "https://wa.me/5511949295634" + "?text="
        + "Nome : " + encodeURIComponent(nome) + "%0a"
        + "Email : " + encodeURIComponent(email) + "%0a"
        + "Mensagem : " + encodeURIComponent(mensagem) + "%0a";

    window.open(url, '_blank').focus();
}