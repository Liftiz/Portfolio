
let calcul = document.getElementById("calcul");

calcul.addEventListener("click", () => {
    var nbr1, nbr2, sum;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);

    sum = nbr1 + nbr2;
    document.getElementById("sum").innerHTML= "Somme: " +  sum;
    sum = sum / 2 ; 

    document.getElementById("moy").innerHTML= "Moyenne: " +  sum;
    document.getElementById("nbr1").value =" ";
    document.getElementById("nbr2").value =" ";
})

