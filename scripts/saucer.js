"use strict";

(function() {

var teaPotHead = document.getElementsByTagName("head")[0];
var xArt = document.getElementById("art");
  xArt.insertAdjacentHTML("afterbegin", teaPotHead.dataset.head);

var teaPotTitle = document.getElementsByTagName("title")[0];
var xHdr = document.getElementById("hdr");
  xHdr.textContent = teaPotTitle.dataset.title;

var xTxt = document.createTextNode(xHdr.textContent);
var xBdy = document.getElementsByTagName("body")[0];
  xBdy.appendChild(xTxt);

var teapoTeche = "url(\'images\/teapoteche.svg\')";

var artEcho = document.querySelector("article");
  artEcho.style.backgroundImage    = teapoTeche;
  artEcho.style.backgroundColor    = "Beige";
  artEcho.style.backgroundPosition = "80% 35%";
  artEcho.style.backgroundRepeat   = "no-repeat";

})();

