window.addEventListener("load", init);
var kepLista = [
  "képek/9dHdawT-siberian-husky-wallpaper.jpg",
  "képek/ck8RvOm-siberian-husky-wallpaper.jpg",
  "képek/E97OfW1-siberian-husky-wallpaper.jpg",
  "képek/EfqK5ho-siberian-husky-wallpaper.jpg",
  "képek/GOQTC7J-siberian-husky-wallpaper.jpg",
  "képek/HUjZnqI-siberian-husky-wallpaper.jpg",
  "képek/jC8Qevv-siberian-husky-wallpaper.jpg",
  "képek/Qom1Iwe-siberian-husky-wallpaper.jpg",
  "képek/yIBRXxO-siberian-husky-wallpaper.jpg",
];

function init() {
  const ARTICLEELEM = document.querySelectorAll("article"); //megfogjuk a HTML-bem szereplő tag-et és változóba rakjuk
  let text = "";
  for (var i = 0; i < kepLista.length; i++) {
    text += `<div class="kepek">
            <img src="${kepLista[i]}" alt="">          // $, -jelel tudjuk mutatni neki hog változó lesz az értéke de csak akkor ha ALT Gr+7 idézőjelet használjuk
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
