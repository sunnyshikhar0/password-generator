const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPassword = "";
let secondPassword = "";

let firstPassEl = document.getElementById("pass-one-el");
let secondPassEl = document.getElementById("pass-sec-el");

function generatePassword() {
  firstPassword = "";
  secondPassword = "";
  for (let i = 1; i < 16; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  firstPassEl.textContent = firstPassword;
  secondPassEl.textContent = secondPassword;
}

function copyPassword() {
  let text = document.getElementById("pass-one-el").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
