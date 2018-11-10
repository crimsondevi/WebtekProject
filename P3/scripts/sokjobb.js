//Skjema til søkjobb//


function sendSøknad(){
  let navn1 = document.getElementById("navn1");
  let epost = document.getElementById("E-post");
  let kommentar = document.getElementById("søknadsTekst");
  let føds=document.getElementById('Fødselsdato')
  let fil=document.getElementById('fileupload')

  if (navn1.value == ""){
    alert("Du må skrive inn navn for å sende inn søknad");
  }

  else if(epost.value == ""){
    alert("Du må skrive inn en E-postadresse");
  }
  else if (føds.value == ""){
    alert("Du må oppgi fødselsdatoen din");
  }

  else if (kommentar.value == ""){
    alert("Søknaden din må inneholde en kommentar");
  }

  else if (fil.value == ""){
    alert("Du må laste opp en CV");
  }
  else{
    alert("Søknaden er sendt!");
      window.location.reload(true);
  }

}
