let fcalcul = document.getElementById("fact");

fcalcul.addEventListener("click", ()=>{

    let recup = Number(document.getElementById("recup").value);
    let facto = 1;
    for (let i = 1; i <= recup ; i++){
        facto*=i;
    }
    let affiche = document.getElementById("affichage").innerHTML = recup+"! = "+facto;
    document.getElementById("recup").value = "";

}) 