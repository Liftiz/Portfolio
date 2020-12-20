let calcul = document.getElementById("calcul");
calcul.addEventListener("click", ()=>{

 let comp = document.getElementById("compteur");
    let compteur = 0;

    
    for(let i = 0; compteur <20; i++){
      if ( i % 2 != 0) {
            compteur +=1;
            comp.innerText += i + "est le " + compteur + "-ème nombre impair! \n";
        }
    }

})
   

