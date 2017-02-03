var System = function(particle) {
    this.position = new p5.Vector(particle.startPosition.x, particle.startPosition.y);
    this.velocity = new p5.Vector(particle.velocity.x, particle.velocity.y);
    this.box = particle.box;
    this.history = [];
    this.trailFunction = particle.trailFunction;
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
        this.history[i].x -= this.trailFunction(x, y).x;
        this.history[i].y -= this.trailFunction(x, y).y;
    }

    var v = new p5.Vector(this.position.x, this.position.y);
    this.history.push(v);
    if (this.history.length > 200) {
        this.history.splice(0, 1);
    }
}

System.prototype.displayHistory = function() {
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

var loneParticle = new System({
    startPosition: { x: -60, y: 0 },
    velocity: { x: 1, y: 1 },
    box: {
        width: 120,
        height: 120
    },
    trailFunction: function(x, y) {
        var newX = sin(x * 0.1) * 10;
        var newY = sin(y * 0.1) * 10 + cos(x * 0.2) * 10;
        return { x: newX, y: newY };
    }
});

var system = loneParticle;
