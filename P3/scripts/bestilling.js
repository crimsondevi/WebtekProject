

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
  btn.setAttribute('class','add')
  btn.setAttribute('id','add'+(i+1))
  var velg=document.createTextNode("Velg");
  btn.appendChild(velg);
  document.getElementById('pizza').appendChild(btn);

  var btn1=document.createElement('button');
  btn1.setAttribute('class','fjern')
  btn1.setAttribute('id','fjern'+(i+1))
  var fjern=document.createTextNode("fjern");
  btn1.appendChild(fjern);
  document.getElementById('pizza').appendChild(btn1);

  var linje=document.createElement('hr');
  linje.className=("linje");
  document.getElementById('pizza').appendChild(linje);


}

/* Send bestilling */
function sendbestilling(){
  alert('Din bestilling er send!')
  window.location.reload(true);
  document.getElementById('handlekurv').style.display="none";
}
document.getElementById('send').addEventListener('click',sendbestilling);

/*Bestill */
for ( var i=0; i<10; i++){
  function changeDisplay(){
    document.getElementById('handlekurv').style.display="inline";
    document.getElementById('fjern'+(i+1)).style.display="inline";
    document.getElementById('add'+(i+1)).style.display="none";
}
  document.getElementById('add'+(i+1)).addEventListener("click", changeDisplay);
  document.getElementById('add'+(i+1)).addEventListener("click", lagListe);
}

function lagListe() {
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(navn.textContent));
  liste.appendChild(li);
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
