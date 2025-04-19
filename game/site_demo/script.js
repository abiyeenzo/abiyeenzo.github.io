let balance = 1000;
const balanceEl = document.getElementById('balance');
const wheel = document.getElementById('wheel');
const messageEl = document.getElementById('message');
let selectedColor = null;

document.getElementById('bet-red').addEventListener('click', () => select('red'));
document.getElementById('bet-black').addEventListener('click', () => select('black'));

function select(color) {
  selectedColor = color;
  document.querySelectorAll('.bet-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('bet-' + color).classList.add('selected');
}

document.getElementById('play').addEventListener('click', () => {
  const amount = parseInt(document.getElementById('amount').value);
  if (!selectedColor) { message('Choisissez une couleur', 'lose'); return; }
  if (amount > balance || amount <= 0) { message('Montant invalide', 'lose'); return; }

  const randomAngle = Math.floor(Math.random() * 360) + 720;  // Deux tours minimum
  wheel.style.transform = `rotate(${randomAngle}deg)`;

  setTimeout(() => {
    const result = ((randomAngle % 360) < 180) ? 'red' : 'black';
    if (result === selectedColor) {
      balance += amount;
      message('Vous gagnez ' + amount + '$ !', 'win');
    } else {
      balance -= amount;
      message('Vous perdez ' + amount + '$', 'lose');
    }
    updateBalance();
  }, 4000);
});

function updateBalance() {
  balanceEl.textContent = 'Solde: $' + balance;
}

function message(text, cls) {
  messageEl.textContent = text;
  messageEl.className = cls;
}

updateBalance();