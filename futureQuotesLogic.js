"use strict"
let article = document.querySelector("article");
let paragraph = document.createElement('p');
let paragraphForAuthor = document.createElement('p');
let wikiLink = document.createElement('a');
let donateButton = document.createElement('button');
let getNav = document.querySelector("nav");

function changeTheQuote() {

let randomQuoteNumber = Math.floor(Math.random() * quotes.length);

paragraph.className = "paragraphForQuote";
paragraph.innerHTML = quotes[randomQuoteNumber].quote;

paragraphForAuthor.className = "paragraphForAuthor";

wikiLink.href = quotes[randomQuoteNumber].link;
wikiLink.innerHTML = quotes[randomQuoteNumber].author;
wikiLink.target = "blank";

donateButton.className = "donate-button";
donateButton.innerHTML = "<a href='https://boosty.to/futurequote'>Поддержать проект</a>";
donateButton.href="https://boosty.to/futurequote";
getNav.append(donateButton);

article.append(paragraph, paragraphForAuthor);
let linkToAuthor = document.querySelector(".paragraphForAuthor");
linkToAuthor.append(wikiLink);
}

let refreshButton = document.querySelector('.refresh');
refreshButton.onclick = changeTheQuote;

document.addEventListener("DOMContentLoaded", changeTheQuote);

