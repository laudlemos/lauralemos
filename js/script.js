// Slider
let indice=1, quantidadeBanner=3;

function trocaBanner(numeroBanner) {
  $("#cover").removeClass();
  $("#cover").addClass("banner"+numeroBanner);
}
setInterval(function(){
  if(indice > quantidadeBanner){
    indice=1;
  }
  trocaBanner(indice);
  indice++;
}, 5000);

// Modal
let botaoEnglishBox = document.querySelector("#cover-english-box");
let modalEnglishBox = document.querySelector("#english-box");

botaoEnglishBox.onclick = function() {
  modalEnglishBox.classList.add("visivel");
}
modalEnglishBox.onclick = function(e) {
  if (e.target == modalEnglishBox) {
    modalEnglishBox.classList.remove("visivel");
  }
}