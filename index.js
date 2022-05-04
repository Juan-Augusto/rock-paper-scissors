let results = []
let victories = []
function game() {
  let userChoice = document.getElementById("user-choice").value;
  let gamesPlayed = document.getElementById("games-played");
  let computerResult = document.getElementById("computer-choice");
  let victoryPercentage =   document.getElementById("victory-percentage");

  let result = document.getElementById("result");
  let choose = ["Pedra", "Papel", "Tesoura"];
  let computerChoice = choose[Math.floor(Math.random() * choose.length)];
  result.classList.remove('draw', 'win', 'lose');

  if (userChoice === computerChoice) {
    results.push("Empate");
    result.classList.toggle("draw");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Foi um empate!</h2>`;

  } else if (userChoice === "Pedra" && computerChoice === "Tesoura") {
    results.push("Vitória");
    victories.push("Vitória");
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else if (userChoice === "Papel" && computerChoice === "Pedra") {
    results.push("Vitória");
    victories.push("Vitória");
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else if (userChoice === "Tesoura" && computerChoice === "Papel") {
    results.push("Vitória");
    victories.push("Vitória");
    result.classList.toggle("win");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Ganhou!<h2>`;

  } else {
    results.push("Derrota");
    result.classList.toggle("lose");
    computerResult.innerHTML = `<h2>Escolha da máquina: ${computerChoice}<h2>`;
    result.innerHTML = `<h2>Você Perdeu!<h2>`;
  }
  
  results.length === 1 ? gamesPlayed.innerHTML = `<h2>Você jogou ${results.length} vez</h2>` : gamesPlayed.innerHTML = `<h2>Você jogou ${results.length} vezes</h2>`;
  victoryPercentage.innerHTML = `<h2>Percentual de vitória: ${Math.round((victories.length / results.length) * 100, -2)}%</h2>`;
}
