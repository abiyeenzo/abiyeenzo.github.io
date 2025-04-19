
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const resultText = document.getElementById("resultText");
let balance = 100000;
const balanceEl = document.getElementById("balance");

let ball = { x: 200, y: 250, radius: 8 };
let keeper = { x: 170, y: 60, w: 60, h: 20 };
let player = { x: 200, y: 280 };
let isShooting = false;

const odds = { left: 2.0, center: 3.0, right: 2.5 };

function drawField() {
  ctx.fillStyle = "#284";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(50, 50, 300, 10);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

function drawKeeper() {
  ctx.fillStyle = "red";
  ctx.fillRect(keeper.x, keeper.y, keeper.w, keeper.h);
}

function drawPlayer() {
  ctx.fillStyle = "#000";
  ctx.fillRect(player.x - 10, player.y - 20, 20, 20); // corps
  ctx.fillRect(player.x - 5, player.y - 30, 10, 10); // tête
}

function draw() {
  drawField();
  drawKeeper();
  drawPlayer();
  drawBall();
}

function updateBalance(change) {
  balance += change;
  balanceEl.textContent = balance;
}

function placeBet(direction) {
  if (isShooting) return;

  const betAmount = parseInt(document.getElementById("betAmount").value);
  const currency = document.getElementById("currency").value;
  const exchangeRates = { XAF: 1, EUR: 655, USD: 600 };
  const betXAF = Math.floor(betAmount * exchangeRates[currency]);

  if (betXAF < 100 || betXAF > 500000 || betXAF > balance) {
    alert("Montant invalide ou fonds insuffisants !");
    return;
  }

  updateBalance(-betXAF);
  shoot(direction, betXAF);
}

function shoot(direction, betAmount) {
  isShooting = true;
  const positions = { left: 100, center: 200, right: 300 };
  const playerShot = positions[direction];

  const entropy = new Uint32Array(1);
  window.crypto.getRandomValues(entropy);
  const rng = entropy[0] % 3;
  const directions = ["left", "center", "right"];
  
    let keeperDir;
    // 80% de chance que le gardien anticipe la direction
    if (Math.random() < 0.8) {
        keeperDir = direction;
    } else {
        keeperDir = directions[rng];
    }
    
  const keeperMove = positions[keeperDir];

  let frame = 0;
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (frame < 8) player.y -= 5;
    if (frame >= 8 && frame < 20) {
      ball.y -= 10;
      ball.x += (playerShot - ball.x) * 0.2;
      keeper.x += (keeperMove - keeper.x) * 0.3;
    }

    draw();
    frame++;

    if (frame > 22) {
      clearInterval(interval);
      const hit = Math.abs(keeper.x + keeper.w / 2 - ball.x) < 30;
      if (!hit) {
        updateBalance(Math.floor(betAmount * odds[direction]));
        resultText.innerText = "✅ BUT ! Gain: x" + odds[direction];
      } else {
        resultText.innerText = "❌ Arrêté !";
      }
      setTimeout(reset, 1500);
    }
  }, 50);
}

function reset() {
  ball.x = 200;
  ball.y = 250;
  keeper.x = 170;
  player.y = 280;
  isShooting = false;
  draw();
}

draw();
