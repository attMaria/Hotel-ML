/*tentativa mascara de telefone*/
$(document).ready(function () {
    $('#telefone').mask('(00) 0000-0000');
});

function ocultar(){
    document.getElementById("textoRadio").style.display = "none";
}

function exibir() {
    var display = document.getElementById("textoEscondido").style.display = "block";
    var item = confirm("Obrigado! Entraremos em contato pelo meio selecionado por favor verifique o contato.");
    if (confirmBox == true) {
        if (b) {
            document.getElementById(cb).checked = true;
        } else {
            document.getElementById(cb).checked = false;
        }
    } else {
        document.getElementById(cb).checked = !b;
    };

    /*TODO -- como limpar formulario com javaScript?*/
    var telefone = document.getElementById("telefone")
    var email = $("email");
    telefone.setAttribute(HTMLInputElement, "");
    email.val("");
}

function ocultarTextoEscondido(){
        document.getElementById("textoEscondido").style.display = "none";
    }
