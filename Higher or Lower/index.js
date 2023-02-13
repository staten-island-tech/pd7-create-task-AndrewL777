const Dom = {
  men: document.getElementById("men"),
  start: document.getElementById("start"),
  higher: document.getElementById("higer"),
  lower: document.getElementById("lower"),
};

// Math.floor(Math.random() * 101) random number 0-100

function low() {
  Math.floor(Math.random() * 101)
    .document.getElementById("men")
    .insertAdjacentHTML(
      "afterend",
      `
    <div class="card">
    <h2 class="all">${5}</h2>

</div>
`
    );
}

low();
