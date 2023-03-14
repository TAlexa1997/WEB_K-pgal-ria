window.addEventListener("load", init);
var kepLista = [
  "képek/1.jpg",
  "képek/2.jpg",
  "képek/3.jpg",
  "képek/4.jpg",
  "képek/5.jpg",
  "képek/6.jpg",
  "képek/7.jpg",
  "képek/8.jpg",
  "képek/9.jpg",
];

function init() {
  const ARTICLEELEM = document.querySelectorAll("article"); //megfogjuk a HTML-bem szereplő tag-et és változóba rakjuk
  let text = "";
  for (var i = 0; i < kepLista.length; i++) {
    text += `<div class="kepek">
            <img src="${kepLista[i]}" alt="kep">          // $, -jelel tudjuk mutatni neki hog változó lesz az értéke de csak akkor ha ALT Gr+7 idézőjelet használjuk
        </div>`;
  }
  console.log(ARTICLEELEM, text);
  ARTICLEELEM[0].innerHTML = text;
  tovabb();
}

function tovabb() {
  const kepelem = document.querySelectorAll("article img");
  for (var i = 0; i < kepelem.length; i++) {
    kepelem[i].addEventListener("click", function () {
      keprekattint(i);
    });
  }
}

function keprekattint(i) {
  console.log(event.target);
  console.log(event.target.src);
  const nagykep = document.querySelectorAll("section div img");
  console.log(nagykep);
  nagykep[0].src = kepLista[i];
  nagykep[0].src = event.target.src;
}

i = 1;  
max = 8;  
function leptet1()  
{  
    if(i<=1)  
    {  
        i = max;  
        load();  
    }  
    else  
    {  
        i--;  
        load();  
    }  
}  

function leptet2()  
{  
    if(i>=max)  
    {  
        i = 1;  
        load();  
    }  
    else  
    {  
        i++;  
        load();  
    }  
}  

function load()  
{  
  kep.src = kepLista[i];  
}  


