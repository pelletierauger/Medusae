var System = function(particle) {
    if (particle.startPosition) {
        this.position = new p5.Vector(particle.startPosition.x, particle.startPosition.y);
    } else {
        this.position = new p5.Vector(0, 0);
    }
    if (particle.velocity) {
        this.velocity = new p5.Vector(particle.velocity.x, particle.velocity.y);
    } else {
        this.velocity = new p5.Vector(0, 0);
    }
    this.box = particle.box || {
        width: 10,
        height: 10
    };
    this.history = [];
    this.translate = particle.translate || { x: 0, y: 0 };
    this.rotate = particle.rotate || 0;
    this.scale = particle.scale || { x: 1, y: 1 };
    this.historyLength = particle.historyLength;
    this.trailFunction = particle.trailFunction;
    this.displayFunction = particle.displayFunction || "dots";
    this.backgroundColor = (particle.backgroundColor == null) ? 51 : particle.backgroundColor;
    this.updateFunction = particle.updateFunction || "box";
    this.iterationsPerFrame = particle.iterationsPerFrame || 1;
    this.sumOfIterations = 0;
}

System.prototype.update = function() {
    if (this.updateFunction !== "box") {
        this.position = this.updateFunction(this.sumOfIterations);
        var x = this.position.x;
        var y = this.position.y;
    } else {
        this.position = p5.Vector.add(this.position, this.velocity);
        var x = this.position.x;
        var y = this.position.y;
        if (this.position.x > (this.box.width / 2) || this.position.x < -this.box.width / 2) {
            this.velocity.x *= -1;
        }

        if (this.position.y > (this.box.height / 2) || this.position.y < -this.box.height / 2) {
            this.velocity.y *= -1;
        }
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
    this.sumOfIterations++;
}

System.prototype.staticUpdate = function(pos, vel) {
    pos = p5.Vector.add(pos, vel);
    var x = pos.x;
    var y = pos.y;
    if (x > (this.box.width / 2) || x < -this.box.width / 2) {
        vel.x *= -1;
    }

    if (y > (this.box.height / 2) || y < -this.box.height / 2) {
        vel.y *= -1;
    }
    return {
        pos: pos,
        vel: vel
    };
}

System.prototype.displayDots = function(h) {
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

System.prototype.displayLines = function(h) {
    // sketch.beginShape(sketch.LINES);
    sketch.beginShape();
    sketch.noFill();
    sketch.strokeWeight(0.25);
    sketch.stroke(255, 125);
    for (var i = h.length - 1; i >= 1; i--) {
        sketch.vertex(h[i].x, h[i].y);
        // sketch.vertex(h[i - 1].x, h[i - 1].y);
    }
    sketch.endShape();
}

System.prototype.displayHistory = function() {
    if (this.displayFunction == "dots") {
        this.displayDots(this.history);
    } else if (this.displayFunction == "lines") {
        this.displayLines(this.history);
    } else {
        this.displayFunction(this.history);
    }
};
