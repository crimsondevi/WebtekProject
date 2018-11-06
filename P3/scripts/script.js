let navn= document.getElementById("navn");
let mail= document.getElementById("emailadresse");
let kommentar= document.getElementById("kommentar");


function emailSent(){
  alert("Emailen er sendt");
}
function fyllInNavn(){
  alert("Du må fylle inn et navn hvis du ønsker å sende en mail");
}
function fyllInKommentar(){
  alert("Mailen din må inneholde en kommentar");
}

function fyllInnEmail(){
  alert("Du må fylle inn en email hvis du ønsker å sende en mail");
}

function sendMail(){
  if(navn.value==""){
    fyllInNavn();
  }
  else if(mail.value==""){
    fyllInnEmail();
  }
  else if (kommentar.value=="") {
    fyllInKommentar();
  }
  else {
    emailSent();
  }

}
