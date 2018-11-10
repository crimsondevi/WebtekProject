
//universell header//
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

  //universell footer//

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
