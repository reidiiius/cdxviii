"use strict";

(function() {

var teaPotHead = document.getElementsByTagName("head")[0];
var xArt = document.getElementById("art");
  xArt.insertAdjacentHTML("afterbegin", teaPotHead.dataset.head);

var teaPotTitle = document.getElementsByTagName("title")[0];
var xHdr = document.getElementById("hdr");
  xHdr.textContent = teaPotTitle.dataset.title;

var xTxt = document.createTextNode(xHdr.textContent);
var xBdy = document.getElementById("bdy");
  xBdy.appendChild(xTxt);

})();

