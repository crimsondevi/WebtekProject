
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

document.getElementById("navigasjonsmeny").innerHTML =(`<div class="meny">

<div>

  <a href="hjem.html"><input type="image" id="logo2" alt="Login" src="img/logopizza.png"></input></a>

                  <ul id="headerul">
                      <a href="hjem.html"><input type="image" id="logo" alt="Login" src="img/logopizza.png"></input></a>
                      <li class="headerli"><a href="Meny.html">Meny/bestill</a></li>
                      <li class="headerli"><a href="omoss.html">Om restauranten</a></li>
                      <li class="headerli"><a href="kontakt.html">Ta kontakt</a></li>
                      <li class="headerli"><a href="sok_jobb.html">Søk jobb</a></li>
                  </ul>

                  <div class="dropdown">
                    <button class="dropbtn"><i class="fa fa-bars"></i></button>
                        <div class="dropdown-content">
                  <a href="Meny.html">Meny/bestill</a>
                    <a href="omoss.html">Om resturanten</a>
                    <a href="kontakt.html">Ta kontakt</a>
                      <a href="sok_jobb.html">Søk jobb</a>
                  </div>
                </div>
                </div>
                  <hr id="menylinje">
                        </div>
                  </div>`)

document.getElementById("footer").innerHTML = (`<footer>
    <hr id="footerlinje">
  <ul id="footerul">
    <li class="footerli">
      Kontakt oss:
    </li>
    <br />
    <li class="footerli">
      Epostadresse: pizza@martin.lange.no
    </li>
    <li class="footerli">
      tlf: +47 959 40 838
    </li>
    <li class="footerli">
      Facebook: @Pizzastekeren
    </li>
    <li class="footerli">

    </li>
  </ul>
</footer>`);
