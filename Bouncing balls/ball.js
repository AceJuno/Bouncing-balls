function ball() {
    this.x = mouseX;
    this.y = mouseY;
    this.r = 30;
    this.xspeed = random(-3, 3);
    this.yspeed = random(-3, 3);

    this.make = function() {
        ellipse(this.x, this.y, this.r, this.r);
    };

    this.move = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.border = function(other) {
        if (this.x - 15 < 0) {
            this.xspeed = random(0, 3);
        } else if (this.y - 15 < 0) {
            this.yspeed = random(0, 3);
        } else if (this.x + 15 > width) {
            this.xspeed = random(-3, 0);
        } else if (this.y + 15 > height) {
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
