let URL = "https://gpa.madbob.org/query.php?stop=";

function aggiungiPassaggio(linea, orario){
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerHTML = linea;
    p2.innerHTML = orario;
    div.appendChild(p1);
    div.appendChild(p2);
    div.classList.add("col");
    document.getElementById("lista").appendChild(div);    
}

function mostra(lista){
    aggiungiPassaggio(lista[0].line, lista[0].hour);
    aggiungiPassaggio(lista[1].line, lista[1].hour);
}

function cercafermata(){
fetch(URL + document.getElementById("num").value)
.then(x => x.json())
.then(y => mostra(y));
}
