function ball() {
    this.x = mouseX;
    this.y = mouseY;
    this.r = 30;
    this.xspeed = random(-3, 3);
    this.yspeed = random(-3, 3);

    this.make = function() {
      noStroke();
      fill(0,0,0,150)
        ellipse(this.x-1, this.y-1, this.r-5, this.r-5);
        fill(113,161,208,100)
        ellipse(this.x, this.y, this.r, this.r);
        fill(113,208,208,100)
        ellipse(this.x, this.y, this.r, this.r);
    };

    this.move = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.border = function(other) {
        if (this.x - this.r/2 < 0) {
            this.xspeed = random(0, 3);
        } else if (this.y - this.r/2 < 0) {
            this.yspeed = random(0, 3);
        } else if (this.x + this.r/25 > width) {
            this.xspeed = random(-3, 0);
        } else if (this.y + this.r/2 > height) {
            this.yspeed = random(-3, 0);
        }
    };

    this.collision = function(other) {
        if (dist(this.x, this.y, other.x, other.y) < this.r) {
            return true;
        } else {
            return false;
        }
    };
this.vel= function(other){
  var velmemx = other.xspeed;
  var velmemy = other.yspeed;

    other.xspeed = this.xspeed;
    other.yspeed = this.yspeed;
    this.xspeed = velmemx;
    this.yspeed = velmemy;



}
this.offvel= function(other){
  this.xspeed = -other.xspeed;
  this.yspeed = -other.yspeed;
}
};
