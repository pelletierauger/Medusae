var Particle = function(startX, startY) {
    this.position = new p5.Vector(startX, startY);
    this.velocity = new p5.Vector(1, 1);
    this.history = [];
}

Particle.prototype.update = function() {
    this.position = p5.Vector.add(this.position, this.velocity);
    var x = this.position.x;
    var y = this.position.y;
    if (this.position.x > (box.width / 2) || this.position.x < -box.width / 2) {
        this.velocity.x *= -1;
    }

    if (this.position.y > (box.height / 2) || this.position.y < -box.height / 2) {
        this.velocity.y *= -1;
    }

    for (var i = 0; i < this.history.length; i++) {
        this.history[i].x -= sin(x * 0.1) * 10;
        this.history[i].y -= sin(y * 0.2) * 10 + cos(x * 0.2) * 10;
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
        var alpha = sketch.map(i, 0, this.history.length, 0, 255);
        sketch.push();
        sketch.translate(pos.x, pos.y);
        sketch.fill(255, alpha);
        sketch.ellipse(0, 0, size, size);
        sketch.pop();
    }
};

var loneParticle = new Particle(-30, 0);
