//observei na pagina https://turismosaovicente.com.br/ tem uma classe chamada """line lft""" que esta em uma div e depois vem outra div e depois vem os """as"""
//mais parecido com a pagina da fatec
//porem não funcionou, acredito que tem mais alguma coisa que temos que mudar

function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".banner_roteiros lft").forEach(function(div){
        var ul = div.children;
        Array.from(ul).forEach(function(li){
            var noticia = li.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
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
        alert("Oi!");
      }
    };
  
  xhttp.open("GET", "https://burles.co/", true);
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

// https://burles.co/ - Funciona