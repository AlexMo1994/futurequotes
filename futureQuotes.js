"use strict"
let quotes = [
  { quote: '"Будущее никогда не бывает случайным — его творят!"' ,
  author: "Жак Фреско", 
  link:"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B5%D1%81%D0%BA%D0%BE,_%D0%96%D0%B0%D0%BA"},
  { quote: '"Будущее принадлежит тем, кто готовится к нему сегодня."' ,
   author: "Малкольм Икс", 
   link:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%BA%D0%BE%D0%BB%D1%8C%D0%BC_%D0%98%D0%BA%D1%81"},
  { quote: '"Будущее всегда выглядит иначе, нежели мы способны его себе вообразить."',
   author: "Станислав Лем", 
   link:"https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BC,_%D0%A1%D1%82%D0%B0%D0%BD%D0%B8%D1%81%D0%BB%D0%B0%D0%B2"},
  { quote: '"Если вы будете думать о том, «что было бы, если…», то у вас будет тысяча прошлых и никакого будущего."' ,
   author: "ХФ `Тайна в его глазах`", 
   link:"https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D0%BD%D0%B0_%D0%B2_%D0%B5%D0%B3%D0%BE_%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0%D1%85"},
  { quote: '"Если путешествия во времени возможны, то где же туристы из будущего?" ',
   author: "Стивен Уильям Хокинг", 
   link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BA%D0%B8%D0%BD%D0%B3,_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD"},
  { quote: '"Будущее приходит значительно быстрее, если идти ему навстречу."' ,
   author: "Борис Крутиер", 
   link:"http://www.mislynet.ru/biografii/krutier-boris"},
  { quote: '"Будущее начинается сегодня, если не откладывать на завтра."' ,
   author: "Борис Крутиер", 
   link:"http://www.mislynet.ru/biografii/krutier-boris"},
  { quote: '"Ваше будущее создается тем, что вы делаете сегодня, а не тем, что будете делать завтра."' ,
   author: "Роберт Кийосаки", 
   link:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B9%D0%BE%D1%81%D0%B0%D0%BA%D0%B8,_%D0%A0%D0%BE%D0%B1%D0%B5%D1%80%D1%82"},
  { quote: '"Ничто так не способствует созданию будущего, как смелые мечты. Сегодня утопия, завтра - плоть и кровь!" ',
   author: "Виктор Гюго", 
   link:"https://ru.wikipedia.org/wiki/%D0%93%D1%8E%D0%B3%D0%BE,_%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80"},
  { quote: '"Будущее нельзя предвидеть, но можно изобрести." ',
   author: "Жак Фреско", 
   link:"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B5%D1%81%D0%BA%D0%BE,_%D0%96%D0%B0%D0%BA"},
  { quote: '"Если мы не будем строить свое будущее, нам придется его терпеть."' ,
   author: "Жак Фреско", 
   link:"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B5%D1%81%D0%BA%D0%BE,_%D0%96%D0%B0%D0%BA"},
  { quote: '"И мы обязательно увидим светлое будущее, потому что у нас нет другого выхода. "' ,
   author: "Александр Васильев", 
   link:"https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87"},
  {quote: '"Настоящее всегда чревато будущим"',
   author: "Готфрид Лейбниц",
  link:"https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B9%D0%B1%D0%BD%D0%B8%D1%86,_%D0%93%D0%BE%D1%82%D1%84%D1%80%D0%B8%D0%B4_%D0%92%D0%B8%D0%BB%D1%8C%D0%B3%D0%B5%D0%BB%D1%8C%D0%BC"},
  {quote: '"Когда все остальное потеряно, все же остается еще будущее"',
  author: "Кристиан Боуви",
  link: "https://ru.wikiquote.org/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD_%D0%9D%D0%B5%D1%81%D1%82%D0%B5%D0%BB_%D0%91%D0%BE%D1%83%D0%B2%D0%B8"}

  
]

let article = document.querySelector("article");
let paragraph = document.createElement('p');
let paragraphForAuthor = document.createElement('p');
let wikiLink = document.createElement('a');

function changeTheQuote() {

let randomQuoteNumber = Math.floor(Math.random() * quotes.length);

paragraph.className = "paragraphForQuote";
paragraph.innerHTML = quotes[randomQuoteNumber].quote;

paragraphForAuthor.className = "paragraphForAuthor";

wikiLink.href = quotes[randomQuoteNumber].link;
wikiLink.innerHTML = quotes[randomQuoteNumber].author;
wikiLink.target = "blank";

article.append(paragraph, paragraphForAuthor);
let linkToAuthor = document.querySelector(".paragraphForAuthor");
linkToAuthor.append(wikiLink);
};

let refreshButton = document.querySelector('.refresh');
refreshButton.onclick = changeTheQuote;

document.addEventListener("DOMContentLoaded", changeTheQuote);

