// page contact:
function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Entrer un nom valide";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
        text = "Entrer un sujet valide";
        error_message.innerHTML = text;
        return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Entrer un numéro valide";
    error_message.innerHTML = text;
    return false;
}
if(email.indexOf("@") == -1|| email.length < 6){
    text = "Entrer un email valide";
    error_message.innerHTML = text;
    return false;
}
if(message.length <= 140){
    text = "Entrer un message de plus de 140 caractères";
    error_message.innerHTML = text;
    return false;
}
alert('Formulaire soumis avec succès !');
return true;
}