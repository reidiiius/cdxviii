"use strict";

(function() {

var teaPotHead = document.getElementsByTagName("head")[0];

var teaPotTitle = document.getElementsByTagName("title")[0];

var xBdy = document.getElementsByTagName("body")[0];

var xHdr = document.getElementById("hdr");

var xArt = document.getElementById("art");

var xSpn = document.createElement("span");

var xTxt = document.createTextNode("\u2600");

var teapoTeche = "url(\'images\/teapoteche.svg\')";

var artEcho = document.querySelector("article");

requestAnimationFrame(function() {
  xHdr.textContent = teaPotTitle.dataset.title;
  xArt.insertAdjacentHTML("afterbegin", teaPotHead.dataset.head);

  artEcho.style.backgroundImage    = teapoTeche;
  artEcho.style.backgroundColor    = "Beige";
  artEcho.style.backgroundPosition = "80% 35%";
  artEcho.style.backgroundRepeat   = "no-repeat";

  xSpn.style.marginLeft = "20%";
  xSpn.style.fontSize = "64px";
  xSpn.style.color = "Gold";
  xSpn.style.textShadow = "0.85em 0.33em 0.05em SkyBlue"
  xSpn.appendChild(xTxt);
  xBdy.appendChild(xSpn);
});

})();

