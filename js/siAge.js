// Je créer une fonction qui récupere la valeur de id "age" puis je met 
// le nom de la fonction sur l'input "envoye"

let envoye = document.getElementById("envoye");
envoye.addEventListener("click", ()=>{
let age = document.getElementById("age").value;
let reponse = document.getElementById("textAge");

// Je compare age pour rentrer dans le programme et l'afficher:
if (age < 18){
    reponse.innerHTML = "Ce programme est réservé aux personnes majeurs.";
}
else if (age >=18  && age <= 26){
    reponse.innerHTML = "Vous êtes dans le programme pour jeune";
}
else if (age > 27 && age < 65){
    reponse.innerHTML = "Vous êtes dans le programme pour adulte";
}

else if (age > 65){
    reponse.innerHTML ="Ce programme est réservé aux personnes non retraités";
}
document.getElementById("age").value = "";

})


// Animation du texte:
function hover(str){
    let split = str.split('');

    split.forEach(letter => {
        let span = document.createElement('span');
      span.innerHTML = letter;
      document.querySelector('.title').appendChild(span);
    });

    let spans = document.querySelectorAll('.title span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('hover');
        });
        span.addEventListener('mouseleave', () => {
            span.classList.remove('hover');
        });

    });
}

hover('Quel-âge-avez-vous ? ');