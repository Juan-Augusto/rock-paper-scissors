function game() {
  let userChoice = document.getElementById("user-choice").value;
  let computerResult = document.getElementById("computer-choice");
  let result = document.getElementById("result");
  result.classList.remove('draw', 'win', 'lose');
  let results = []
  let choose = ["Pedra", "Papel", "Tesoura"];
  let computerChoice = choose[Math.floor(Math.random() * choose.length)];

  console.log(userChoice, computerChoice);
  if (userChoice === computerChoice) {
    results.push("Empate");
    result.classList.toggle("draw");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Foi um empate!</h2>`;

  } else if (userChoice === "Pedra" && computerChoice === "Tesoura") {
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else if (userChoice === "Papel" && computerChoice === "Pedra") {
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else if (userChoice === "Tesoura" && computerChoice === "Papel") {
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else {
    result.classList.toggle("lose");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Perdeu!<h2>`;
  }
}
