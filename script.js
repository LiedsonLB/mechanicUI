var infos = document.querySelectorAll(".bi-info-circle-fill");
var Message = document.getElementById("container-mensagem");
var closeBtn = document.getElementById("close-modal");

// Função que alerta o ID da div clicada
function infoClick() {
    Message.classList.remove("hide");
}

// Associação de cada div à função
for(var i=0; i<infos.length; i++) {
    infos[i].onclick = infoClick;
}
closeBtn.addEventListener("click", () => {
    Message.classList.add("hide");
})
