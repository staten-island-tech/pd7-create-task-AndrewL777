const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
};

const history = [];
let right = Math.floor(Math.random() * 101);
let left = Math.floor(Math.random() * 101);
let count = 0;



function cards() {
  document.getElementById("men").insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <h2 id="invis">${right}</h2>
    </div>
    `
  );
  document.getElementById("men").insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <h2 id="visible">${left}</h2>
    </div>
    `
  );
}
cards();
document.getElementById("low").addEventListener("click", function () {
  lowBtn();
});
document.getElementById("high").addEventListener("click", function () {
  highBtn();
});

function highBtn() {
  if (right > left) {
    alert(`Wrong, the number is ${right}`);
    location.reload();
  } else {
    count++;
    document.getElementById("streak").innerHTML = `Win Streak: ${count}`;
    replace();
history.push(right);
document.getElementById("Hist").innerHTML = `Previous Number(s): ${history}`
  }
}


function lowBtn() {
  if (left > right) {
    alert(`Wrong, the number is ${right}`);
    location.reload();
  } else {
    count++;
    document.getElementById("streak").innerHTML = `Win Streak: ${count}`;
    replace();
    history.push(right);
    document.getElementById("Hist").innerHTML = `Previous Number(s): ${history}`
  }
}

function replace () {
   right = Math.floor(Math.random() * 101);
   document.getElementById("invis").innerHTML = `${right}`;
   left = Math.floor(Math.random() * 101);
   document.getElementById("visible").innerHTML = `${left}`;

}

