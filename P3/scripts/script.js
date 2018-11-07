

function sendMail(){
  let name = document.getElementById("navn");
  let mail = document.getElementById("mail");
  let comment = document.getElementById("kommentar");

  if (name.value == ""){
    alert("Du må skrive inn navn for å sende mailen");
  }

  else if(mail.value == ""){
    alert("Du må skrive inn enn email");
  }

  else if (comment.value == ""){
    alert("Mailen din må inneholde en komentar");
  }

  else{
    alert("Emailen er sendt!");
  }
}
