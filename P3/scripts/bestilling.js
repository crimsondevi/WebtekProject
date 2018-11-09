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
  fyll:  'Biff, pepperoni, paprika',
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
          console.log("test")
          let liste = document.getElementById('liste');
          liste.innerHTML+="<li id= 'pizza"+i+"'>"+ retter[i].pizza +"</li>"
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
      });

document.getElementById('velg1').addEventListener('click', function() {
           liste.innerHTML+="<li id=pizza1>"+ retter[1].pizza +' '+retter[1].pris+',-'+"</li>"
             document.getElementById('handlekurv').style.display="inline";

      });

document.getElementById('velg2').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza2>"+ retter[2].pizza +' '+retter[2].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
        });
document.getElementById('velg3').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza3>"+ retter[3].pizza +' '+retter[3].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
        });
document.getElementById('velg4').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza4>"+ retter[4].pizza +' '+retter[4].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

document.getElementById('velg5').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza5>"+ retter[5].pizza +' '+retter[5].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

document.getElementById('velg6').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza6>"+ retter[6].pizza +' '+retter[6].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

document.getElementById('velg7').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza7>"+ retter[7].pizza +' '+retter[7].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

document.getElementById('velg8').addEventListener('click', function() {
            liste.innerHTML+="<li id=pizza8>"+ retter[8].pizza +' '+retter[8].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

document.getElementById('velg9').addEventListener('click', function() {
            liste.innerHTML+="<li id='pizza9'>"+retter[9].pizza+' '+retter[9].pris+',-'+"</li>"
              document.getElementById('handlekurv').style.display="inline";
          });

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
        alert('Din bestilling er sendt!')
        window.location.reload(true);
        document.getElementById('handlekurv').style.display="none";
      }
      document.getElementById('send').addEventListener('click',sendbestilling);



/*
const retter=[
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
  fyll:  'Biff, pepperoni, paprika',
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

/*lager menyen, 10 elementer */


/*
for ( var i=0; i<10; i++){

  var tittel=document.createElement("h2");
  tittel.className = ('tittel');
  var navn=document.createTextNode((1+i)+'.'+retter[i].pizza);
  tittel.appendChild(navn);
  document.getElementById('pizza').appendChild(tittel);

  var paragraf = document.createElement("p");
  paragraf.className=('fyll');
  var tekst = document.createTextNode(retter[i].fyll);
  paragraf.appendChild(tekst);
  document.getElementById('pizza').appendChild(paragraf);

  var pris=document.createElement('p');
  pris.className=("pris");
  var pris1=document.createTextNode(retter[i].pris +',-');
  pris.appendChild(pris1);
  document.getElementById('pizza').appendChild(pris);

  var btn=document.createElement('button');
  btn.setAttribute('class','add');
  btn.setAttribute('id','add'+(i+1));
  var velg=document.createTextNode("Velg");
  btn.appendChild(velg);
  document.getElementById('pizza').appendChild(btn);


  var linje=document.createElement('hr');
  linje.className=("linje");
  document.getElementById('pizza').appendChild(linje);


}



/*Bestill */
/*
for ( var i=0; i<10; i++){
  document.getElementById('add'+(i+1)).addEventListener("click", function(){lagListe(i)});
}


function lagListe(i) {
    document.getElementById('handlekurv').style.display="inline";
    var li=document.createElement('li');
    liste.appendChild(li);
    li.innerHTML+=(retter[i].pizza);

}
  /*  createShoppingElement(i)
  }



/*var liste=document.getElementById("liste");

function createShoppingElement(i) {
  element.addEventListener("click",changeDisplay(element));
}

for(var i=0;i++;i<10) {
  createShoppingElement(i)
}

function changeDisplay(element) {

}

function changeDisplay1(){
  document.getElementById("velg1").style.display="none";
  document.getElementById("angre1").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel1').textContent));
  liste.appendChild(li);

}
function changeDisplay2(){
  document.getElementById("velg2").style.display="none";
  document.getElementById("angre2").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel2').textContent));
  liste.appendChild(li);
}

  function changeDisplay3(){

  document.getElementById("velg3").style.display="none";
  document.getElementById("angre3").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel3').textContent));
  liste.appendChild(li);
}

  function changeDisplay4(){

  document.getElementById("velg4").style.display="none";
  document.getElementById("angre4").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel4').textContent));
  liste.appendChild(li);
}

  function changeDisplay5(){

  document.getElementById("velg5").style.display="none";
  document.getElementById("angre5").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel5').textContent));
  liste.appendChild(li);
}

  function changeDisplay6(){

  document.getElementById("velg6").style.display="none";
  document.getElementById("angre6").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel6').textContent));
  liste.appendChild(li);
}

  function changeDisplay7(){

  document.getElementById("velg7").style.display="none";
  document.getElementById("angre7").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel7').textContent));
  liste.appendChild(li);
}

  function changeDisplay8(){

  document.getElementById("velg8").style.display="none";
  document.getElementById("angre8").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel8').textContent));
  liste.appendChild(li);
}

  function changeDisplay9(){

  document.getElementById("velg9").style.display="none";
  document.getElementById("angre9").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel9').textContent));
  liste.appendChild(li);
}

  function changeDisplay10(){

  document.getElementById("velg10").style.display="none";
  document.getElementById("angre10").style.display="inline";
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(document.getElementById('ptittel10').textContent));
  liste.appendChild(li);




}
/*

  var pizzatype=document.getElementById('ptittel');
  var liste=document.createElement('.liste');
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(pizzatype.textContent));
  liste.appendChild(li);
  console.log("hei");*/






/*

function changeDisplayagain1(){
  document.getElementById("velg1").style.display="inline";
  document.getElementById("angre1").style.display="none";
}

  function changeDisplayagain2(){

  document.getElementById("velg2").style.display="inline";
  document.getElementById("angre2").style.display="none";
}

  function changeDisplayagain3(){

  document.getElementById("velg3").style.display="inline";
  document.getElementById("angre3").style.display="none";
}

function changeDisplayagain4(){
  document.getElementById("velg4").style.display="inline";
  document.getElementById("angre4").style.display="none";
}

function changeDisplayagain5(){
  document.getElementById("velg5").style.display="inline";
  document.getElementById("angre5").style.display="none";
}

function changeDisplayagain6(){
  document.getElementById("velg6").style.display="inline";
  document.getElementById("angre6").style.display="none";
}

function changeDisplayagain7(){
  document.getElementById("velg7").style.display="inline";
  document.getElementById("angre7").style.display="none";
}

function changeDisplayagain8(){
  document.getElementById("velg8").style.display="inline";
  document.getElementById("angre8").style.display="none";
}

function changeDisplayagain9(){
  document.getElementById("velg9").style.display="inline";
  document.getElementById("angre9").style.display="none";
}

function changeDisplayagain10(){
  document.getElementById("velg10").style.display="inline";
  document.getElementById("angre10").style.display="none";
}
*/
