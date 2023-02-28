const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
};
let random = Math.floor(Math.random() * 101);
let random2 = Math.floor(Math.random() * 101);
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
    "afterbegin",
    `
    <div class="card">
    <h2 class="invis">${random}</h2>
    </div>
    `
  );
  document.getElementById("men").insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <h2>${random2}</h2>
    </div>
    `
  );
}
cards();

document.getElementById("high").addEventListener("click", function () {
  highBtn();
});

function highBtn() {
  if (random > random2) {
    alert(`Wrong, the number is ${random}`);
    location.reload();
  } else {
    count++;
    streak();
  }
}
document.getElementById("low").addEventListener("click", function () {
  lowBtn();
});

function lowBtn() {
  if (random2 > random) {
    alert(`Wrong, the number is ${random}`);
    location.reload();
  } else {
    count++;
    streak();
  }
}

function streak() {
  document.getElementById("streak").innerHTML = `Win Streak: ${count}`;
}
