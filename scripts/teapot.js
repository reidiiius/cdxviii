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

    Page.html.setAttribute("lang", "en");
    Page.head.setAttribute("data-head", "I\'m a Teapot");
    Page.meta.setAttribute("charset", "UTF-8");
    Page.title.setAttribute("data-title", "I\'m a Teapot");
    Page.link.setAttribute("rel", "stylesheet");
    Page.link.setAttribute("href", "styles\/porcelain.css");
    Page.link.setAttribute("type", "text\/css");
    Page.script.setAttribute("src", "scripts\/saucer.js");
    Page.script.setAttribute("type", "application\/javascript");
    Page.body.setAttribute("id", "bdy");
    Page.image.setAttribute("src", "images\/teapoteche.svg");
    Page.image.setAttribute("alt", "I\'m a Teapot");
    Page.image.setAttribute("width", "auto");
    Page.image.setAttribute("height", "auto");
    Page.header.setAttribute("id", "hdr");
    Page.article.setAttribute("id", "art");
    Page.section.setAttribute("id", "sec");
    Page.aside.setAttribute("id", "asd");
    Page.footer.setAttribute("id", "ftr");

    Page.head.appendChild(Page.meta);
    Page.head.appendChild(Page.title);
    Page.head.appendChild(Page.link);
    Page.head.appendChild(Page.script);
    Page.body.appendChild(Page.header);
    Page.body.appendChild(Page.article);
      Page.article.appendChild(Page.section);
        Page.section.appendChild(Page.aside);
    Page.body.appendChild(Page.footer);
    Page.body.insertBefore(Page.aside, Page.article.nextSibling);
    Page.article.insertBefore(Page.image, Page.section);
    Page.article.insertBefore(Page.br, Page.image);

    Page.body.style.fontFamily = "\'DejaVu Sans Mono\', monospace";
    Page.body.style.fontSize = "32px";
    Page.body.style.color = "DarkSlateGrey";
    Page.header.style.opacity = 0.4;
    Page.section.style.opacity = 0.2;
    Page.aside.style.opacity = 0.4;
    Page.footer.style.opacity = 0.8;

    Page.title.textContent   = "I\'m a Teapot";
    Page.section.textContent = Page.title.textContent;
    Page.aside.textContent   = Page.section.textContent;
    Page.footer.textContent  = Page.aside.textContent;

};

