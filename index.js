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

const firstPassEl = document.getElementById("pass-one-el"); // First password element
const secondPassEl = document.getElementById("pass-sec-el"); // Second password element
const copyMessageEl = document.getElementById("copy-message"); // Copy message element
const passwordLengthInput = document.getElementById("password-length"); // Password length input

function generatePassword() {
  const length = Math.max(
    6,
    Math.min(32, Number(passwordLengthInput.value) || 15),
  );
  let firstPassword = "";
  let secondPassword = "";
  for (let i = 0; i < length; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  firstPassEl.textContent = firstPassword;
  secondPassEl.textContent = secondPassword;
  firstPassEl.disabled = false;
  secondPassEl.disabled = false;
  copyMessageEl.textContent = "";

  // Remove previous length classes
  firstPassEl.classList.remove("short", "medium", "long");
  secondPassEl.classList.remove("short", "medium", "long");

  // Add color class based on length
  const getLengthClass = (len) =>
    len < 10 ? "short" : len < 20 ? "medium" : "long";
  firstPassEl.classList.add(getLengthClass(firstPassword.length));
  secondPassEl.classList.add(getLengthClass(secondPassword.length));
}

// Copy password to clipboard
function copyPassword(elementId) {
  const text = document.getElementById(elementId).textContent;
  if (!text) return;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showCopyMessage("Copied!");
    })
    .catch((err) => {
      showCopyMessage("Failed to copy");
      console.error("Failed to copy: ", err);
    });
}

// Show copy message
function showCopyMessage(msg) {
  copyMessageEl.textContent = msg;
  setTimeout(() => {
    copyMessageEl.textContent = "";
  }, 1200);
}
