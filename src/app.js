/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.GetRandomCard = function() {
  console.log("Generar carta random");
  let cardValue = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let iconCard = ["♦", "♥", "♠", "♣"];
  let ramdomCardValue = Math.floor(Math.random() * cardValue.length);
  document.getElementById("number").innerHTML = cardValue[ramdomCardValue];

  let randomIconCard = Math.floor(Math.random() * iconCard.length);
  let iconStyle = ["-red", "-black"];
  let randomIconStyle = Math.floor(Math.random() * iconStyle.length);
  document.getElementById("icon").innerHTML = `
  <span
    class="d-block"
    style="font-size: 80px; float: left; height: 70px ; margin-left: 20px;"
    id="icon${iconStyle[randomIconStyle]}"
    >${iconCard[randomIconCard]}</span
  >
   `;
  document.getElementById("icon2").innerHTML = ` <span
            class="d-block "
            style="font-size: 80px; float: right; margin-right: 20px;"
            id="icon2${iconStyle[randomIconStyle]}"
            >${iconCard[randomIconCard]}</span
          >`;
};

window.ChangeWidthHeight = function() {
  let ancho = document.getElementById("ancho").value;
  let alto = document.getElementById("alto").value;
  document.getElementById("ContainerCard").style.width = ancho + "px";
  document.getElementById("ContainerCard").style.height = alto + "px";
};
window.IntervalCard = function() {
  setInterval(GetRandomCard, 3000);
};
