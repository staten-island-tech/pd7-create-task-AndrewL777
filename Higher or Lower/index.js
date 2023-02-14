const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
};
const random = Math.floor(Math.random() * 101);
const random2 = Math.floor(Math.random() * 101);
// Math.floor(Math.random() * 101) random number 0-100

function low() {
  document.getElementById("men").insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
    <h2>${random}</h2>
    <button id=high> higher </button>
    <button id=low> lower </button>

</div>
`
  );
}
low();

function higher() {
  document.getElementById("men").insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
    <h2 class="small">${random2}</h2>
  

    

</div>
`
  );
}
higher();
