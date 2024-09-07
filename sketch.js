let balls = [];
let gravity = 0.1;


function setup() {
  createCanvas(400, 400);
  // Create multiple balls
  for (let i = 0; i < 5; i++) {
    balls.push(new Ball(random(50, width - 50), random(50, height - 50), random(20, 50)));
  }
}

function draw() {
  background(0);
  text('Press any key to change colour', 100, 200);
  textSize(15);

  // Update and display all balls
  for (let ball of balls) {
    ball.update();
    ball.checkEdges();
    ball.display();
  }
}


// Ball class
class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(random(255), random(255), random(255));
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
  }

  // Update ball's position and apply gravity
  update() {
    this.ySpeed += gravity; // gravity effect
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // Check boundaries for bouncing
  checkEdges() {
    // Bounce horizontally
    if (this.x + this.r > width || this.x - this.r < 0) {
      this.xSpeed *= -1;
    }

    // Bounce vertically with damping effect (reduces speed)
    if (this.y + this.r > height || this.y - this.r < 0) {
      this.ySpeed *= -0.9; // Adding damping effect for gravity
      this.y = constrain(this.y, this.r, height - this.r);
    }
  }

  // Display the ball
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Press key to change size and color of the balls
function keyPressed() {
  for (let ball of balls) {
    ball.color = color(random(255), random(255), random(255));
    ball.r = random(20, 50);
  }
}

