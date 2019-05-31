function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".rs-fm-js").forEach(function(main){
        var ul = main.children;
        Array.from(ul).forEach(function(li){
            var noticia = li.children;
            Array.from(noticia).forEach(function(x){
                
            document.body.appendChild(x);
            });
        })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
       
      }
    };
  //servidor do Arthur: https://cors-server-arthurhmk.c9users.io/
  xhttp.open("GET", " https://www.msn.com/pt-br/entretenimento/famosos", true);
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

// https://gente.ig.com.br/ - Funciona
// https://www.msn.com/pt-br/entretenimento/famosos - Funciona até sem servidor, precisamos de mais um

//http://rduirapuru.com.br/noticias/
//https://www.sonoticias.com.br/
//https://www.nsctotal.com.br/dc
//https://alfenashoje.com.br/
//herald-mob-nav

