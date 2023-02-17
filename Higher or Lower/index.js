const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
};
const random = Math.floor(Math.random() * 101);
const random2 = Math.floor(Math.random() * 101);
const win = "Correct";
let count = 0;
// document.getElementById("men").insertAdjacentHTML(
//   "beforeend",
//   `
//   <h2> ${count}</h2>

// `
// );

function cards() {
  document.getElementById("men").insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
  <h2 class="invis">${random}</h2>
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

document.getElementById("high").addEventListener("click", function () {
  highBtn();
});

function highBtn() {
  if (random > random2) {
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
  <div class="card">
  <h2>Wrong, the number was ${random}</h2>
</div>
`
    );
  } else {
    count++;
  }
}
document.getElementById("low").addEventListener("click", function () {
  lowBtn();
});

function lowBtn() {
  if (random2 > random) {
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h2>Wrong, the number was ${random}</h2>
</div>
`
    );
  } else {
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
<div class="card">
<h2>Correct!</h2>
</div>
`
    );
  }
}
