let result = document.getElementById("resultat");

var tabJeu = [
  [7, 1, 6, 5],
  [8, 2, 5, 4],
  [3, 8, 1, 4],
  [7, 2, 6, 3],
];

affichierTableau();

function affichierTableau() {
  let txt = " ";

  for (let i = 0; i < tabJeu.length; i++) {
    txt += "<div>";
    for (let j = 0; j < tabJeu[i].length; j++) {
      if (tabJeu[i][j] === 0) {
        txt +=
          "<button class='btn btn-primary m-2' style='width:100px;height:100px'>Afficher </button>";
      } else {
        txt +=
          "<img src='" +
          getImage(tabJeu[i][j]) +
          "' alt='image' style='width:100px;height:100px' class='m-2'>";
      }
    }
    txt += "</div>";
  }

  result.innerHTML = txt;
}

function getImage(valeur) {
  let imgTxt = "image/";

  switch (valeur) {
    case 1:
      imgTxt += "elephant.png";
      break;
    case 2:
      imgTxt += "giraffe.png";
      break;
    case 3:
      imgTxt += "hippo.png";
      break;
    case 4:
      imgTxt += "monkey.png";
      break;
    case 5:
      imgTxt += "panda.png";
      break;
    case 6:
      imgTxt += "parrot.png";
      break;
    case 7:
      imgTxt += "penguin.png";
      break;
    case 8:
      imgTxt += "pig.png";
      break;
    default:
      console.log("cas non pris en compte");
  }

  return imgTxt;
}
