
let multipli = document.getElementById("calcul");

multipli.addEventListener("click", ()=>{
let a = Number(document.getElementById("multip").value);
let reponse = document.getElementById("res");


reponse.innerHTML = "La table de multiplication du nombre: " +a

document.write('<table border  >');

for(var i=1;i<=10;i++)  {
   document.write('<tr id "tr">');
   document.write("<td>"+a+" x "+i+" =</td>");
   document.write("<td>"+a*i+"</td>");
   document.write("</tr>");
}
document.write("<h1> La table de multiplication est "+ a);
document.write("</table>");
document.write("Voulez vous tester une autre table ? ")
document.write('<input type="button" value = "Oui" id="oui">');
oui.addEventListener("click", e =>{
   document.location.reload();
 });

})
