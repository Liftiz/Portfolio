let calcul = document.getElementById("calcul");
let affichage = document.getElementById("result");

calcul.addEventListener("click", ()=>{
    let result = 1;  // <-- Le résultat doit être initalisé lors du clique
    let numbValue = Number(document.getElementById("numb").value)  // <-- C'est lors du clique que l'on récupère la valeur
    for(let i = 1; i<= numbValue; i++){
        result += i;
    }
   affichage.innerText = "le résultat des "  +" "+  numbValue +" "+ "premiers entiers est" +" "+ result;
   document.getElementById("numb").value = "";
});


// Montée en puissance:
let calcul2 = document.getElementById("calcul2");
let affichage2 = document.getElementById("result2");

calcul2.addEventListener("click", ()=>{
    let result2 = 1;  // <-- A initialiser lors du clique, sinon lorsque result2 sera multiplié par X dans la boucle, si c'est un second clique, result2 ne sera pas égal à 1 mais à la valeur assigné au premier clique
    let X = Number(document.getElementById("X").value);  // <-- La valeur doit être récupérée au moment du clique (pas au moment du chargement du fichier JS)
    let Y = Number(document.getElementById("Y").value);  // <-- Idem que pour X
    for(let i = 1; i<=Y; i++){
        result2 = result2 * X;
    }
   affichage2.innerText = "Le résultat de "  +" "+  X +" puissance "+ Y +" " +" est de"+" "+ result2;
   
})


//Le dix-vingt:

let envoye = document.getElementById("envoye");
let affiche = document.getElementById("affichage");


let nbEssais = 1;  // <-- le nombre d'essais ne doit pas être initialisé au moment du clique sinon il sera égal uniquement à 1 ou à 2
let gameOver = false;
envoye.addEventListener("click", () =>{
    if (gameOver) nbEssais = 1  // Si true alors le joueur a trouvé le bon nombre à la partie précédente, on réinitialise le compteur nbEssais
    gameOver = false;
    let nbSaisie = 0;
    nbSaisie= Number(document.getElementById("devine").value);
    if(nbSaisie < 10) {
        affiche.innerText = " Plus grand ! ";
        nbEssais = nbEssais + 1;
    }
    else if (nbSaisie > 20){
        affiche.innerText = " Plus petit ! ";
        nbEssais = nbEssais + 1;
    }
    else if (nbSaisie>= 10 && nbSaisie <=20 ){
        gameOver=true;
        affiche.innerText = "Le résultat correspond ! Vous avez effectué " + " " + nbEssais +" "+ "essais !";
    }

   })

// let button = document.getElementById("envoye");
// button.addEventListener("click", ()=>{
// let nbEssais = 0;
// let gameOver = false;

// do{
//     let nbSaisie = parseInt(prompt("Saisissez un nombre entre 10 et 20"));
//     if (nbSaisie < 10) {
//         alert("Plus grand");
//         nbEssais +=1 ;
//     } else if (nbSaisie > 20){
//         alert("Plus petit");
//         nbEssais += 1;
//     }else {
//         gameOver = true;
//         alert("Le résultat correspond ! Vous avez effectué" + nbEssais + "essaies");
//     }
// } while(!gameOver);
// })



