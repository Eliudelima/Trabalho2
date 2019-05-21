function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("OI");
      }
    };
  
  xhttp.open("GET", "https://fatecrl.edu.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;
//alvo description-noticia, responseText é a pagina toda
function montarPagina(pagina){
    document.write(pagina);
}