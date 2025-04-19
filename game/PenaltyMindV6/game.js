
const canvas = document.getElementById("goal");
const ctx = canvas.getContext("2d");

const goal = {
    whiteZone: { x: 100, y: 20, width: 100, height: 110 },
    keeperZone: { x: 140, y: 60, width: 20, height: 30 }
};

let resultDiv = document.getElementById("result");

function drawGoal() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(goal.whiteZone.x, goal.whiteZone.y, goal.whiteZone.width, goal.whiteZone.height);

    ctx.fillStyle = "red";
    ctx.fillRect(goal.keeperZone.x, goal.keeperZone.y, goal.keeperZone.width, goal.keeperZone.height);
}

function shootBall() {
    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 150);

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    // Test but
    const inWhite = x > goal.whiteZone.x && x < goal.whiteZone.x + goal.whiteZone.width &&
                    y > goal.whiteZone.y && y < goal.whiteZone.y + goal.whiteZone.height;

    const hitKeeper = x > goal.keeperZone.x && x < goal.keeperZone.x + goal.keeperZone.width &&
                      y > goal.keeperZone.y && y < goal.keeperZone.y + goal.keeperZone.height;

    if (hitKeeper) {
        resultDiv.textContent = "ARRÊTÉ PAR LE GARDIEN !";
    } else if (inWhite) {
        resultDiv.textContent = "BUT !!!";
    } else {
        resultDiv.textContent = "HORS CADRE.";
    }
}

canvas.addEventListener("click", () => {
    drawGoal();
    shootBall();
});

drawGoal();
