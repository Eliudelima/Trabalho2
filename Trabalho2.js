
function sendReq() {
    var xhttp = new XMLHttpRequest();
 //essa função interna(filha) é o callback ela que chama o codigo que vc quer pegar   
    xhttp.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
       montarPagina(this.responseText);
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

window.onload = sendReq;
//window.onload roda assim que a pagina carrega.
//alvo description-noticia, responseText é a pagina toda
//function montarPagina(pagina){
//    document.write(pagina);
//}

function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".description-noticia").forEach(function(div){
        var p = div.children[1].innerHTML;
        var div2 = document.createElement("div");
        div2.innerHTML = p;
        document.body.appendChild(div2);
    });
}