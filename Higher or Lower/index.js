const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
};
const random = Math.floor(Math.random() * 101);
const random2 = Math.floor(Math.random() * 101);
const win = "Correct";
// Math.floor(Math.random() * 101) random number 0-100

function cards() {
  document.getElementById("men").insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
  <h2 class="small">${random}</h2>
</div>
`,
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
  <div class="card">
  <h2>${random2}</h2>
</div>
`
    )
  );
}
cards();

function highBtn() {
  if (random > random2) {
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
  <div class="card">
  <h2>${"Wrong, the number was"}</h2>
</div>
`
    );
  }
}

function lowBtn() {
  if (random2 > random) {
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
  <div class="card">
  <h2>${"Wrong, the number was"}</h2>
</div>
`
    );
  }
}

highBtn();
