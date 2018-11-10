//Skjema til kontakt oss//

function sendMail(){
  let name = document.getElementById("navn");
  let mail = document.getElementById("mail");
  let comment = document.getElementById("kommentar");

  if (name.value == ""){
    alert("Du må skrive inn navn for å sende E-posten");
  }

  else if(mail.value == ""){
    alert("Du må skrive inn en E-postadresse");
  }

  else if (comment.value == ""){
    alert("Mailen din må inneholde en kommentar");
  }

  else{
    alert("E-posten er sendt!");
      window.location.reload(true);
  }
}
