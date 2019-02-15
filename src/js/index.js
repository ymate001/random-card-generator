// import $ from "jquery";
// import "bootstrap"; //breathecode dom for more explicit errors
// //import 'breathecode-dom'; //DOM override to make JS easier to use
// import "../style/index.scss";

window.onload = function() {
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "K",
    "Q",
    "K",
    "A"
  ];

  let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  var cardnum = number[Math.floor(Math.random() * number.length)];
  var type = suit[Math.floor(Math.random() * suit.length)];

  switch (type) {
    case "&hearts;":
      document.querySelector("#cardtype").style.color = "red";
      break;
    case "&diams;":
      document.querySelector("#cardtype").style.color = "red";
      break;
    default:
      document.querySelector("#cardtype").style.color = "black";
      break;
  }

  var copy = JSON.parse(JSON.stringify(type));

  switch (copy) {
    case "&hearts;":
      document.querySelector("#cardtype2").style.color = "red";
      break;
    case "&diams;":
      document.querySelector("#cardtype2").style.color = "red";
      break;
    default:
      document.querySelector("#cardtype2").style.color = "black";
      break;
  }

  document.querySelector("#card").innerHTML = cardnum;
  document.querySelector("#cardtype").innerHTML = type;
  document.querySelector("#cardtype2").innerHTML = copy;
};
