const retter = [
  {
  pizza:'Margherita',
  fyll:'Tomatsaus, fersk mozarella, basilikum',
  pris: 150
},
{
  pizza: 'Vesuvio',
  fyll:'Tomatsaus, ost, skinke',
  pris: 170
},
{
  pizza: 'Parma',
  fyll:'Parmaskinke, løk, parmesan, pesto',
  pris: 180
},
{
  pizza: 'Napoli',
  fyll:'Pepperoni, paprika, ananas',
  pris: 180
},
{
  pizza: 'Hawaii',
  fyll:'Skinke, ananas',
  pris: 170
},
{
  pizza: 'Singsaker',
  fyll:'Kjøttdeig, løk, paprika, champignon',
  pris: 190
},
{
  pizza: 'Mjøndalen Spesial',
  fyll: 'Biff, pepperoni, paprika',
  pris: 200
},
{
  pizza: 'Kebabpizza',
  fyll:  'Biff, paprika, løk, sterk saus, pomes frites, salat',
  pris: 190
},
{
  pizza:'Vegetar',
  fyll:'Paprika, ananas, champignon, løk, oliven',
  pris: 160
},
{
  pizza:'Tacokylling',
  fyll: 'Krydret kylling, løk, jalapeno, nachochips ',
  pris: 200
}
];
;

let meny = document.getElementById("pizza");
let liste = document.getElementById('liste');


for (let i = 0; i < retter.length; i++) {
  meny.innerHTML +=
  `<hr>
  <h2>`+ retter[i].pizza + `</h2>
  <p>`+ retter[i].fyll + `</p>
  <p class='pris'>`+ (retter[i].pris+',-') + `</p>
  <button class='velg' id='velg`+ i + `''>Velg<i class='fa fa-shopping-cart'></i></button>
  <button class='angre' id='angre`+i+`'><i class='fa fa-close'></i> Fjern</button>`

  /*document.getElementById('velg'+i).addEventListener('click', function() {
          liste.innerHTML+="<li id= 'pizza"+i+"'>"+ retter[i].pizza +"</li>";
          document.getElementById('handlekurv').style.display="inline";
          document.getElementById("aapne").style.display="none";
        });

I teorien børe dette funke men det gjør det ikke,
etter å ha prøvd alt for mange forskjellige alternative løsninger,
ble det bestemt å heller skrive ut koden under. Det samme gjelder angre funksjonen som kunne vært skrevet slik:

document.getElementById("angre"+i).addEventListener("click", function() {
            let fjern = document.getElementById("pizza"+i)
            fjern.parentNode.removeChild(fjern);
          })
  */
}

document.getElementById('velg0').addEventListener('click', function() {
        liste.innerHTML+="<li id=pizza0>"+ retter[0].pizza +' '+retter[0].pris+',-'+"</li>"
        document.getElementById('handlekurv').style.display="inline";
          document.getElementById("aapne").style.display="none";

      });

document.getElementById('velg1').addEventListener('click', function() {
           liste.innerHTML+="<li id=pizza1>"+ retter[1].pizza +' '+retter[1].pris+',-'+"</li>"
             document.getElementById('handlekurv').style.display="inline";
               document.getElementById("aapne").style.display="none";
      });

document.getElementById('velg2').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza2>"+ retter[2].pizza +' '+retter[2].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
        });
document.getElementById('velg3').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza3>"+ retter[3].pizza +' '+retter[3].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
        });
document.getElementById('velg4').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza4>"+ retter[4].pizza +' '+retter[4].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

document.getElementById('velg5').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza5>"+ retter[5].pizza +' '+retter[5].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

document.getElementById('velg6').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza6>"+ retter[6].pizza +' '+retter[6].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

document.getElementById('velg7').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza7>"+ retter[7].pizza +' '+retter[7].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

document.getElementById('velg8').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza8>"+ retter[8].pizza +' '+retter[8].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

document.getElementById('velg9').addEventListener('click', function() {
            liste.innerHTML+="<li id='pizza9'>"+retter[9].pizza+' '+retter[9].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
                document.getElementById("aapne").style.display="none";
          });

/* Angre på pizzavalg */

document.getElementById("angre0").addEventListener("click", function() {
            let fjern = document.getElementById("pizza0")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre1").addEventListener("click", function() {
            let fjern = document.getElementById("pizza1")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre2").addEventListener("click", function() {
            let fjern = document.getElementById("pizza2")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre3").addEventListener("click", function() {
            let fjern = document.getElementById("pizza3")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre4").addEventListener("click", function() {
            let fjern = document.getElementById("pizza4")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre5").addEventListener("click", function() {
            let fjern = document.getElementById("pizza5")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre6").addEventListener("click", function() {
            let fjern = document.getElementById("pizza6")
            fjern.parentNode.removeChild(fjern);
          })

document.getElementById("angre7").addEventListener("click", function() {
            let item = document.getElementById("pizza7")
            item.parentNode.removeChild(item);
          })

document.getElementById("angre8").addEventListener("click", function() {
            let item = document.getElementById("pizza8")
            item.parentNode.removeChild(item);
          })

document.getElementById("angre9").addEventListener("click", function() {
              let item = document.getElementById("pizza9")
              item.parentNode.removeChild(item);
      })



      /* Send bestilling */

      function sendbestilling(){
          let tlf = document.getElementById("tlfnr");
          let adresse = document.getElementById("adressebestilling");

          if (tlf.value == ""){
            alert("Du må skrive inn et telefonnummer");
          }

          else if(adresse.value == ""){
            alert("Du må skrive inn en adresse");
          }
          else{

          alert('Din bestilling er sendt!')
          window.location.reload(true);
          document.getElementById('handlekurv').style.display="none";
          }
        }
      document.getElementById('send').addEventListener('click',sendbestilling);

      function lukkhandlekurv() {
        document.getElementById("handlekurv").style.display="none"
        document.getElementById("aapne").style.display="inline";

      }

      function aapnehandlekurv(){
        document.getElementById("handlekurv").style.display="inline"
        document.getElementById("aapne").style.display="none";

      }
