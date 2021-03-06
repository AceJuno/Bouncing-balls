function ball() {
    var x = constrain(mouseX, this.r / 2, width - this.r / 2);
    var y = constrain(mouseY, this.r / 2, height - this.r / 2);
    this.x = mouseX;
    this.y = mouseY;
    this.r = 50;
    this.xspeed = random(-3, 3);
    this.yspeed = random(-3, 3);
    constrain
    this.make = function() {
        noStroke();
        fill(0, 0, 0, 150)
        ellipse(this.x - 1, this.y - 1, this.r - 5, this.r - 5);
        fill(113, 161, 208, 100)
        ellipse(this.x, this.y, this.r, this.r);
        fill(113, 208, 208, 100)
        ellipse(this.x, this.y, this.r, this.r);
    };

    this.move = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.border = function(other) {
        if (this.x - this.r / 2 < 0) {
            this.xspeed = -this.xspeed;
        } else if (this.y - this.r / 2 < 0) {
            this.yspeed = -this.yspeed;
        } else if (this.x + this.r / 2 > width) {
            this.xspeed = -this.xspeed;
        } else if (this.y + this.r / 2 > height) {
            this.yspeed = -this.yspeed;
        }
    };

    this.collision = function(other) {
        if (dist(this.x, this.y, other.x, other.y) < this.r) {
            return true;
        } else {
            return false;
        }
    };
    this.vel = function(other) {
        var velmemx = other.xspeed;
        var velmemy = other.yspeed;

        other.xspeed = this.xspeed;
        other.yspeed = this.yspeed;
        this.xspeed = velmemx;
        this.yspeed = velmemy;



    }
    this.offvel = function(other) {
        this.xspeed = -other.xspeed;
        this.yspeed = -other.yspeed;
    }
};
