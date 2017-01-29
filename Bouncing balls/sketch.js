var balls = [];
var j = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(102, 178, 255);
    fill(255);

    for (var i = 0; i < balls.length; i++) {
        balls[i].make();
        balls[i].move();
        balls[i].border();
        for (var k = 0; k < balls.length; k++) {
            if (i != k && balls[i].collision(balls[k])) {
                balls[i].vel(balls[k]);
                //balls[k].vel(balls[i]);
            }
        }
    }
};

function mousePressed() {
    //  ellipse(100,100,30,30);
            balls[j] = new ball();
            j++;
        }
