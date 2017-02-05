var System = function(particle) {
    this.position = new p5.Vector(particle.startPosition.x, particle.startPosition.y);
    this.velocity = new p5.Vector(particle.velocity.x, particle.velocity.y);
    this.box = particle.box;
    this.history = [];
    this.translate = particle.translate || { x: 0, y: 0 };
    this.scale = particle.scale || { x: 0, y: 0 };
    this.historyLength = particle.historyLength;
    this.trailFunction = particle.trailFunction;

    if (particle.displayFunction) {
        this.displayFunction = particle.displayFunction;
    }
}

System.prototype.update = function() {
    this.position = p5.Vector.add(this.position, this.velocity);
    var x = this.position.x;
    var y = this.position.y;
    if (this.position.x > (this.box.width / 2) || this.position.x < -this.box.width / 2) {
        this.velocity.x *= -1;
    }

    if (this.position.y > (this.box.height / 2) || this.position.y < -this.box.height / 2) {
        this.velocity.y *= -1;
    }

    for (var i = 0; i < this.history.length; i++) {
        this.history[i].x -= this.trailFunction(x, y, i).x;
        this.history[i].y -= this.trailFunction(x, y, i).y;
    }

    var v = new p5.Vector(this.position.x, this.position.y);
    this.history.push(v);
    if (this.history.length > this.historyLength) {
        this.history.splice(0, 1);
    }
}

System.prototype.basicDisplayFunction = function(h) {
    var size = 1;
    for (var i = 0; i < (h.length - 1); i++) {
        var pos = h[(h.length - 1) - i];
        var alpha = sketch.map(i, 0, h.length, 0, 255);
        sketch.push();
        sketch.translate(pos.x, pos.y);
        sketch.fill(255, alpha);
        sketch.ellipse(0, 0, size, size);
        sketch.pop();
    }
};

System.prototype.displayHistory = function() {
    if (this.displayFunction) {
        this.displayFunction(this.history);
    } else {
        this.basicDisplayFunction(this.history);
    }
};
