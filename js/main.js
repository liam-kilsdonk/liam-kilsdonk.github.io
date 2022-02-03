const text = document.getElementById("text");
const prog = "Liam Kilsdonk.....";
let idx = 1;

function writeText() {
  text.innerText = prog.slice(0, idx);

  idx++;

  if (idx > prog.length) {
    idx = 1;
  }
}

if (text) {
  setInterval(writeText, 150);
}
