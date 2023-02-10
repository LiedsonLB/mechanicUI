var infos = document.querySelectorAll(".bi-info-circle-fill");
var Message = document.getElementById("container-mensagem");
var closeBtn = document.getElementById("close-modal");
var checkbox = document.querySelectorAll(".select-service");

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

//modal de confirmação
var BackBtn = document.getElementById('back');
var confirmBtn = document.getElementById('btn-confirm');
var ConfirmModal = document.getElementById('confirm-modal');
var confirma = document.getElementById('confirm-btn');
var confirmService = document.getElementById('confirm-service')

confirmBtn.addEventListener("click", () => {
    ConfirmModal.classList.toggle("hide");
})
BackBtn.addEventListener("click", () => {
    ConfirmModal.classList.toggle("hide");
})
confirma.addEventListener("click", () => {
    ConfirmModal.classList.toggle("hide");
    confirmBtn.classList.add("hide");
    confirmService.classList.remove("hide");
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].disabled = true;
}
})
