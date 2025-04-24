const visor = document.getElementById("visor");
const canvas = document.getElementById("carinha");
const ctx = canvas.getContext("2d");

desenharRosto("neutro");

function pressionar(valor) {
  visor.value += valor;
}

function calcular() {
  try {
    const resultado = eval(visor.value);
    visor.value = resultado;

    if (resultado > 0) {
      desenharRosto("feliz");
    } else if (resultado === 0) {
      desenharRosto("neutro");
    } else {
      desenharRosto("triste");
    }
  } catch {
    visor.value = "Erro";
    desenharRosto("erro");
  }
}

function limpar() {
  visor.value = "";
  desenharRosto("neutro");
}

function desenharRosto(expressao) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Olhos do CalcGotchi
  ctx.beginPath();
  ctx.arc(70, 50, 10, 0, Math.PI * 2); // esquerdo
  ctx.arc(180, 50, 10, 0, Math.PI * 2); // direito
  ctx.fillStyle = "#333"; // Cor dos olhos
  ctx.fill();

  // Boca
  ctx.beginPath();
  if (expressao === "feliz") {
    ctx.arc(125, 65, 25, 0, Math.PI, false); // Boca feliz
  } else if (expressao === "triste") {
    ctx.arc(125, 90, 25, Math.PI, 0, false); // Boca triste
  } else if (expressao === "erro") {
    // Boca x
    ctx.moveTo(100, 85);
    ctx.lineTo(150, 85);
    ctx.moveTo(65, 35);
    ctx.lineTo(75, 45);
    ctx.moveTo(75, 35);
    ctx.lineTo(65, 45);
    ctx.moveTo(175, 35);
    ctx.lineTo(185, 45);
    ctx.moveTo(185, 35);
    ctx.lineTo(175, 45);
  } else {
    ctx.moveTo(100, 85);
    ctx.lineTo(150, 85); // Boca neutra
  }
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#333";
  ctx.stroke();
}
