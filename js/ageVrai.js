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
    document.getElementById("age").value =" ";
    
})
    oui.addEventListener("click", e =>{
        document.location.reload();
      });

let non = document.getElementById("no");

   non.addEventListener("click", ()=>{

  
        let body = document.getElementById("container");
        body.style.display = "none";
    let fin = document.getElementById("fin").style.display=" block";
})