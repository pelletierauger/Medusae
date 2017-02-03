var Particle = function(startX, startY) {
    this.position = new p5.Vector(startX, startY);
    this.velocity = new p5.Vector(1, 1);
    this.history = [];
}

Particle.prototype.update = function() {
    this.position = p5.Vector.add(this.position, this.velocity);
    if ((this.position.x > (box.width / 2)) || (this.position.x < -box.width / 2)) {
        this.velocity.x *= -1;
    }

    if ((this.position.y > (box.height / 2)) || (this.position.y < -box.height / 2)) {
        this.velocity.y *= -1;
    }
}

var loneParticle = new Particle(0, 0);
