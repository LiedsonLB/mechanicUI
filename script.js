var infos = document.querySelectorAll(".bi-info-circle-fill");
var Message = document.getElementById("container-mensagem");
var closeBtn = document.getElementById("close-modal");

//abrindo modal
function infoClick() {
    Message.classList.remove("hide");
}

//clique nos botões de info
for(var i=0; i<infos.length; i++) {
    infos[i].onclick = infoClick;
}

//fechando modal
closeBtn.addEventListener("click", () => {
    Message.classList.add("hide");
})
