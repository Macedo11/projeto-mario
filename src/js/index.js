const botaoTrailer = window.document.querySelector(".botao-trailer");
const video = window.document.getElementById("video");
const modal = window.document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkDoVideo);
});


const botaoFecharModal = window.document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
});

