var Particle = function(startX, startY) {
    this.position = new p5.Vector(startX, startY);
    this.velocity = new p5.Vector(0.3, 0.3);
    this.history = [];
}

Particle.prototype.update = function() {
    this.position = p5.Vector.add(this.position, this.velocity);
    if (this.position.x > (box.width / 2) || this.position.x < -box.width / 2) {
        this.velocity.x *= -1;
    }

    if (this.position.y > (box.height / 2) || this.position.y < -box.height / 2) {
        this.velocity.y *= -1;
    }

    for (var i = 0; i < this.history.length; i++) {
        this.history[i].x -= sin(this.position.x / 50) * 6.7;
        this.history[i].y -= sin(this.position.y / 50) * 6.7;
    }

    var v = new p5.Vector(this.position.x, this.position.y);
    this.history.push(v);
    if (this.history.length > 200) {
        this.history.splice(0, 1);
    }
}

Particle.prototype.displayHistory = function() {
    var size = 1;
    for (var i = 0; i < (this.history.length - 1); i++) {
        var pos = this.history[(this.history.length - 1) - i];
        sketch.push();
        sketch.translate(pos.x, pos.y);
        sketch.fill(255, 50);
        sketch.ellipse(0, 0, size, size);
        sketch.pop();
    }
};

var loneParticle = new Particle(0, 0);
