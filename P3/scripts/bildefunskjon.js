document.addEventListener("DOMContentLoaded", function() {

  const pzaImg = document.getElementById('pza');
  const pzaImg2 = document.getElementById('pza2');
  var body = document.getElementById('body');
  //pictureCount er mengden bilder til bildefremvisningen.
  //Hvis man legger til flere bilder må man endre tallet
  //bildene må også følge navn stilen pizza + tall .jpg
  var pictureCount = 4;

  //changePza velger et tilfeldig bilde også kaller det seg selv etter 2 sekunder
  function changePza(img){
    i = Math.floor(Math.random() * pictureCount) + 1;
    str = "img/pizzas/pizza" + i + ".jpg";
    img.src = str;
    setTimeout(function() {
      changePza(img);
    }, 2000);
  }

    changePza(pzaImg);
    changePza(pzaImg2);
});
