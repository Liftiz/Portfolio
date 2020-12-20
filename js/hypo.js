
let calcul = document.getElementById("calcul");
let result =document.getElementById("resulta");

calcul.addEventListener("click", ()=> {
 let c1 = Number(document.getElementById("c1").value);
let c2 = Number(document.getElementById("c2").value);
   result.innerHTML = (Math.floor(Math.hypot(c1, c2)));
})