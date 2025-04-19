
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 400, y: 400, radius: 20 };
let ball = { x: 400, y: 400, radius: 10, vx: 0, vy: 0, moving: false };
let goal = { x: 300, y: 50, width: 200, height: 50 };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw goal
    ctx.fillStyle = "white";
    ctx.fillRect(goal.x, goal.y, goal.width, goal.height);

    // Draw player
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw ball
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    if (ball.moving) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 0.98;
        ball.vy *= 0.98;
        if (Math.abs(ball.vx) < 0.1 && Math.abs(ball.vy) < 0.1) {
            ball.moving = false;
            checkGoal();
        }
    }
    draw();
    requestAnimationFrame(update);
}

canvas.addEventListener("click", function(e) {
    if (ball.moving) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - ball.x;
    const dy = mouseY - ball.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    ball.vx = dx / dist * 10;
    ball.vy = dy / dist * 10;
    ball.moving = true;
});

function checkGoal() {
    if (ball.x > goal.x && ball.x < goal.x + goal.width &&
        ball.y > goal.y && ball.y < goal.y + goal.height) {
        alert("BUT !!!");
    } else {
        alert("Raté !");
    }
}

draw();
update();
