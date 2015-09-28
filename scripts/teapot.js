"use strict";

onload = function() {

var Page = {
    html : document.documentElement,
    head : document.head,
    body : document.body,
    link : document.links,
   title : document.title,
   image : document.images,
  anchor : document.anchors,
  script : document.scripts
};

  Page.meta    = document.createElement("meta");
  Page.title   = document.createElement("title");
  Page.link    = document.createElement("link");
  Page.script  = document.createElement("script");
  Page.anchor  = document.createElement("a");
  Page.canvas  = document.createElement("canvas");
  Page.image   = document.createElement("img");
  Page.header  = document.createElement("header");
  Page.article = document.createElement("article");
  Page.section = document.createElement("section");
  Page.aside   = document.createElement("aside");
  Page.footer  = document.createElement("footer");
  Page.span    = document.createElement("span");
  Page.div     = document.createElement("div");
  Page.pre     = document.createElement("pre");
  Page.code    = document.createElement("code");
  Page.br      = document.createElement("br");
  Page.para    = document.createElement("p");

    Page.html   .setAttribute("lang", "en");
    Page.head   .setAttribute("data-head", "I\'m a Teapot");
    Page.meta   .setAttribute("charset", "UTF-8");
    Page.title  .setAttribute("data-title", "I\'m a Teapot");
    Page.link   .setAttribute("rel", "stylesheet");
    Page.link   .setAttribute("href", "styles\/porcelain.css");
    Page.link   .setAttribute("type", "text\/css");
    Page.script .setAttribute("src", "scripts\/saucer.js");
    Page.script .setAttribute("type", "application\/javascript");
    Page.body   .setAttribute("id", "bdy");
    Page.canvas .setAttribute("id", "cnv");
    Page.canvas .setAttribute("width", innerWidth);
    Page.canvas .setAttribute("height", innerHeight);
    Page.canvas .setAttribute("style", "position:fixed");
    Page.image  .setAttribute("src", "images\/teapoteche.svg");
    Page.image  .setAttribute("alt", "I\'m a Teapot");
    Page.image  .setAttribute("width", "auto");
    Page.image  .setAttribute("height", "auto");
    Page.header .setAttribute("id", "hdr");
    Page.article.setAttribute("id", "art");
    Page.section.setAttribute("id", "sec");
    Page.aside  .setAttribute("id", "asd");
    Page.aside  .setAttribute("data-aside", "I\'m a Teapot");
    Page.footer .setAttribute("id", "ftr");
    Page.div    .setAttribute("id", "dv");

    Page.head   .appendChild(Page.meta);
    Page.head   .appendChild(Page.title);
    Page.head   .appendChild(Page.link);
    Page.head   .appendChild(Page.script);
    Page.body   .appendChild(Page.canvas);
    Page.body   .appendChild(Page.header);
    Page.body   .appendChild(Page.article);
    Page.article.appendChild(Page.section);
    Page.section.appendChild(Page.aside);
    Page.body   .appendChild(Page.footer);
    Page.div    .appendChild(document.createTextNode(Page.head.dataset.head));

    Page.body     .insertBefore(Page.aside, Page.article.nextSibling);
    Page.article  .insertBefore(Page.image, Page.section);
    Page.article  .insertBefore(Page.br,    Page.image);
    Page.article  .insertBefore(Page.div,   Page.section.nextSibling);

var CanvasContext = Page.canvas.getContext("2d");
      CanvasContext.fillStyle = "LightSeaGreen";
     CanvasContext.fillRect(0, 0, innerWidth, innerHeight);
    CanvasContext.beginPath();
   CanvasContext.moveTo(0, 0);
  CanvasContext.lineTo(0, innerHeight/1.335);
 CanvasContext.lineTo(innerWidth/1.498, innerHeight/1.335);
CanvasContext.lineTo(innerWidth/1.498, 0);
 CanvasContext.closePath();
  CanvasContext.lineWidth = 3;
   CanvasContext.strokeStyle = "Wheat";
    CanvasContext.stroke();

    Page.body    .style.margin = 0;
    Page.body.style.fontFamily = "\'DejaVu Sans Mono\', monospace";
    Page.body  .style.fontSize = "32px";
    Page.body     .style.color = "DarkSlateGrey";

    Page.canvas   .style.zIndex = "-1";

    Page.header   .style.paddingLeft = innerWidth/672.7 + "em";
    Page.article  .style.paddingLeft = innerWidth/336.4 + "em";
    Page.image    .style.paddingLeft = innerWidth/224.5 + "em";
    Page.section  .style.paddingLeft = innerWidth/336.4 + "em";
    Page.div      .style.paddingLeft = innerWidth/672.7 + "em";
    Page.aside    .style.paddingLeft = innerWidth/336.4 + "em";
    Page.footer   .style.paddingLeft = innerWidth/672.7 + "em";

    Page.canvas   .style.opacity = 0.2;
    Page.header   .style.opacity = 0.4;
    Page.section  .style.opacity = 0.1;
    Page.div      .style.opacity = 0.3;
    Page.aside    .style.opacity = 0.5;
    Page.footer   .style.opacity = 0.7;

    Page.title    .textContent = "I\'m a Teapot";
    Page.section  .textContent = Page.title.textContent;
    Page.aside    .textContent = Page.section.textContent;
    Page.footer   .textContent = Page.aside.textContent;

};

