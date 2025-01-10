document.getElementById("numerolinea").innerHTML = "29";

let URL = "https://gpa.madbob.org/query.php?stop=1695";

function mostra(testo){
    document.getElementById("numerolinea").innerHTML = testo;
}

fetch(URL)
.then(x => x.text())
.then(y => mostra(y));