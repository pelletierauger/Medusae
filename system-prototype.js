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

var loneParticle = new System({
    startPosition: { x: -60, y: 0 },
    velocity: { x: 1, y: 1 },
    box: {
        width: 120,
        height: 120
    },
    historyLength: 200,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.1) * 10;
        var newY = sin(y * 0.1) * 10;
        return { x: newX, y: newY };
    }
});
var loneParticle2 = new System({
    startPosition: { x: -60, y: 0 },
    velocity: { x: 1, y: 1 },
    box: {
        width: 120,
        height: 120
    },
    historyLength: 200,
    trailFunction: function(x, y) {
        var newX = cos(x * 0.1) * 10;
        var newY = sin(x * 0.2) * 10;
        return { x: newX, y: newY };
    }
});
var loneParticle3 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 2, y: 2 },
    box: {
        width: 50,
        height: 100
    },
    translate: {
        x: 600,
        y: 0
    },
    scale: {
        x: 1.2,
        y: 1.2
    },
    historyLength: 210,
    trailFunction: function(x, y) {
        var newX = cos(x / 50) * cos(x / 25) * 6;
        var newY = sin(y / 50) * sin(x / 10) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.5);
        sketch.stroke(255, 125);
        for (var i = h.length - 1; i >= 1; i--) {
            sketch.vertex(h[i].x, h[i].y * 2);
            sketch.vertex(h[i - 1].x, h[i - 1].y * 2);
        }
        sketch.endShape();
    }
});

var system = loneParticle3;
