"use strict";

var BayouTeche = new Object();

  BayouTeche.teapot = new Image(100, 100);
  BayouTeche.teapot.src = "images\/teapoteche.svg";
  BayouTeche.teapot.alt = "Teche Teapot";

  Object.freeze(BayouTeche.teapot);

window.onload = function() {

var Page = {
  html : document.documentElement,
  head : document.head,
  body : document.body
};

var scripTagZero = document.getElementsByTagName("script")[0];

  Page.html   .setAttribute("lang", "");

  Page.meta    = document.createElement("meta");
  Page.meta   .setAttribute("charset", "UTF-8");
  Page.head   .insertBefore(Page.meta, scripTagZero);

  Page.title   = document.createElement("title");
  Page.title  .textContent = btoa("\x49\x27\x6D\x20\x61\x20\x54\x65\x61\x70\x6F\x74");
  Page.title  .setAttribute("data-title", Page.title.textContent);

  Page.head   .setAttribute("data-head", Page.title.textContent);
  Page.head   .insertBefore(Page.title, scripTagZero);

  Page["link favicon"]    = document.createElement("link");
  Page["link favicon"]   .setAttribute("rel", "icon");
  Page["link favicon"]   .setAttribute("href", "images\/favicon.png");
  Page["link favicon"]   .setAttribute("type", "image\/png");
  Page.head              .insertBefore(Page["link favicon"], scripTagZero);

  Page.link_porcelain    = document.createElement("link");
  Page.link_porcelain   .setAttribute("rel", "stylesheet");
  Page.link_porcelain   .setAttribute("href", "styles\/porcelain.css");
  Page.link_porcelain   .setAttribute("type", "text\/css");
  Page.head             .insertBefore(Page.link_porcelain, scripTagZero);

  Page.script_saucer  = document.createElement("script");
  Page.script_saucer .setAttribute("src", "scripts\/saucer.js");
  Page.script_saucer .setAttribute("type", "application\/javascript");
  Page.head          .appendChild(Page.script_saucer);

  Page.clean = function(str) {
    return str.replace(/[\x20\x27]/g, "").toUpperCase();
  };

  Page.token = Page.clean(atob(Page.title.textContent));

  Page.codex = function(str) {
    var arsci = [];
    for (var i = 0; i < str.length; i++){
      arsci.push(str.charCodeAt(i));
    }
    return "A" + arsci.join("");
  };

  Page.body   .setAttribute("id", Page.codex(Page.token));
  Page.body    .style.margin = 0;
  Page.body.style.paddingTop = (innerHeight/1122.5).toFixed(3) + "em";
  Page.body.style.fontFamily = "\'DejaVu Sans Mono\', monospace";
  Page.body  .style.fontSize = "32px";
  Page.body     .style.color = "DarkSlateGrey";

  Page.ostracon = document.createDocumentFragment();

  Page.canvas  = document.createElement("canvas");
  Page.canvas .setAttribute("id", "cnv");
  Page.canvas .setAttribute("width", innerWidth);
  Page.canvas .setAttribute("height", innerHeight);

  Page.canvas .style.position = "fixed";
  Page.canvas .style.zIndex   = "-1";
  Page.canvas .style.opacity  = 0.2;

var CanvasContext = Page.canvas.getContext("2d");

  CanvasContext.fillStyle = "LightSeaGreen";
   CanvasContext.fillRect(0, 0, innerWidth, innerHeight);

    CanvasContext.beginPath();
   CanvasContext.moveTo(0, 0);
  CanvasContext.lineTo(0, (innerHeight/1.335).toFixed(3));
 CanvasContext.lineTo((innerWidth/1.498).toFixed(3), (innerHeight/1.335).toFixed(3));
CanvasContext.lineTo((innerWidth/1.498).toFixed(3), 0);
 CanvasContext.closePath();
  CanvasContext.lineWidth = 3;
   CanvasContext.strokeStyle = "Wheat";
    CanvasContext.stroke();

  Page.ostracon.appendChild(Page.canvas);

  Page.header  = document.createElement("header");
  Page.header .setAttribute("id", "hdr");
  Page.header .style.opacity = 0.4;
  Page.header .style.paddingLeft = (innerWidth/672.7).toFixed(3) + "em";

  Page.ostracon.appendChild(Page.header);

  Page.article = document.createElement("article");
  Page.article.setAttribute("id", "art");
  Page.article.style.width = "61.8%";
  Page.article.style.opacity = 1.0;
  Page.article.style.paddingLeft = (innerWidth/336.4).toFixed(3) + "em";

  Page.section = document.createElement("section");
  Page.section.setAttribute("id", "sec");
  Page.section.style.opacity = 0.1;
  Page.section.style.paddingLeft = (innerWidth/336.4).toFixed(3) + "em";
  Page.section.textContent = Page.title.textContent;
  Page.article.appendChild(Page.section);

  Page.pre     = document.createElement("pre");
  Page.pre    .setAttribute("id", "pr");
  Page.section.appendChild(Page.pre);

  Page.code    = document.createElement("code");
  Page.code   .setAttribute("data-code", Page.title.textContent);
  Page.pre    .appendChild(Page.code);

  Page.span    = document.createElement("span");
  Page.span   .setAttribute("style", "display:none");
  Page.span   .textContent = Page.title.textContent;
  Page.code   .appendChild(Page.span);

  Page["image teapoteche"] = document.createElement("img");
  Page["image teapoteche"].setAttribute("src", BayouTeche.teapot.src);
  Page["image teapoteche"].setAttribute("alt", Page.title.textContent);
  Page["image teapoteche"].setAttribute("width", "auto");
  Page["image teapoteche"].setAttribute("height", "auto");
  Page["image teapoteche"].style.opacity = 0.9;
  Page["image teapoteche"].style.paddingLeft = (innerWidth/224.5).toFixed(3) + "em";
  Page.article.insertBefore(Page["image teapoteche"], Page.section);

  Page.br      = document.createElement("br");
  Page.article.insertBefore(Page.br, Page["image teapoteche"]);

  Page.div     = document.createElement("div");
  Page.div    .setAttribute("id", "dv");
  Page.div    .style.opacity = 0.3;
  Page.div    .style.paddingLeft = (innerWidth/672.7).toFixed(3) + "em";
  Page.div.appendChild(document.createTextNode(Object.isExtensible(BayouTeche)));
    if (!Object.isExtensible(BayouTeche.teapot)) {
      Page.div.appendChild(BayouTeche.teapot);
    }
  Page.article.insertBefore(Page.div, Page.section.nextSibling);

  Page.ostracon.appendChild(Page.article);

  Page.aside   = document.createElement("aside");
  Page.aside  .setAttribute("id", "asd");
  Page.aside  .setAttribute("data-aside", Page.title.textContent);
  Page.aside  .style.opacity = 0.5;
  Page.aside  .style.paddingLeft = (innerWidth/336.4).toFixed(3) + "em";
  Page.aside  .textContent = Page.section.textContent.toLowerCase();

  Page.ostracon.insertBefore(Page.aside, Page.article.nextSibling);

  Page.anchor  = document.createElement("a");
  Page.anchor .setAttribute("name", Page.title.textContent);

  Page.ostracon.insertBefore(Page.anchor, Page.article);

  Page.footer  = document.createElement("footer");
  Page.footer .setAttribute("id", "ftr");
  Page.footer .style.opacity = 0.7;
  Page.footer .style.paddingLeft = (innerWidth/672.7).toFixed(3) + "em";
  Page.footer .textContent = Page.aside.textContent;

  Page.ostracon.appendChild(Page.footer);

  Page.body.appendChild(Page.ostracon);

};

