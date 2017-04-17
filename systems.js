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

var loneParticle4 = new System({
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
        var newY = sin(y / 20) * tan(x / 10) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.5);
        sketch.stroke(255, 125);
        for (var i = h.length - 1; i >= 1; i--) {
            sketch.vertex(h[i].x, h[i].y * 0.3);
            sketch.vertex(h[i - 1].x, h[i - 1].y * 0.3);
        }
        sketch.endShape();
    }
});

var loneParticle5 = new System({
    startPosition: { x: -50, y: 0 },
    velocity: { x: 3, y: 2 },
    box: {
        width: 150,
        height: 50
    },
    translate: {
        x: 0,
        y: 350
    },
    scale: {
        x: 1.2,
        y: 1.2
    },
    historyLength: 210,
    trailFunction: function(x, y) {
        var newX = cos(y / 50) * sin(x / 50) * 6;
        var newY = sin(y / 20) * sin(y / 10) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.5);
        sketch.stroke(255, 125);
        for (var i = h.length - 1; i >= 1; i--) {
            sketch.vertex(h[i].x, h[i].y);
            sketch.vertex(h[i - 1].x, h[i - 1].y);
        }
        sketch.endShape();
    }
});

var loneParticle6 = new System({
    startPosition: { x: -50, y: 0 },
    velocity: { x: 3, y: 2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: -300,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    historyLength: 210,
    trailFunction: function(x, y) {
        var newX = cos(cos(x / 50)) * sin(x / 50) * 6;
        var newY = cos(sin(y / 20)) * sin(y / 10) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: "lines"
});

var loneParticle7 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.8, y: 0.4 },
    box: {
        width: 100,
        height: 100
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 1.25,
        y: 1.25
    },
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.05) * 6;
        var newY = sin(y * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var basicOldEgg = new System({
    startPosition: { x: -5, y: 0 },
    velocity: { x: 0.8, y: 0.8 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 2,
        y: 2
    },
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * cos(x * 0.05) * 6;
        var newY = sin(y * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var extravertedEgg = new System({
    startPosition: { x: -5, y: 0 },
    velocity: { x: 0.08, y: 0.08 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 2,
        y: 2
    },
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * cos(x * 0.05) * 6;
        var newY = sin(y * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var extravertedEgg2 = new System({
    startPosition: { x: -5, y: 0 },
    velocity: { x: 0.08, y: 0.08 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    rotate: Math.PI / 2,
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * cos(x * 0.5) * 6;
        var newY = sin(y * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});
var extravertedEgg3 = new System({
    startPosition: { x: -5, y: 0 },
    velocity: { x: 0.08, y: 0.08 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * cos(y * 0.5) * 6;
        var newY = sin(y * 0.25) * cos(y * 0.5) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var extravertedEgg4 = new System({
    startPosition: { x: -5, y: 0 },
    velocity: { x: 0.08, y: 0.08 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * cos(y * 0.5) * cos(x * 0.25) * 6;
        var newY = sin(y * 0.25) * cos(y * 0.5) * cos(x * 0.25) * 6;
        return { x: newX * 3, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var extravertedEgg5 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.08, y: 0.16 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.25) * 6;
        var newY = sin(y * 0.25) * cos(y * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var extravertedEgg6 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.16, y: 0.16 },
    box: {
        width: 10,
        height: 20
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 5,
        y: 5
    },
    rotate: Math.PI / 2,
    historyLength: 25,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.125) * 6;
        var newY = sin(y * 0.125) * cos(x * 0.25) * 6;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var peanut = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 4,
        height: 4
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3.5,
        y: 3.5
    },
    rotate: Math.PI * 0.9,
    historyLength: 130,
    trailFunction: function(x, y) {
        var newX = sin(x * 0.5) * 12 + sin(y * 0.5) * 5;
        var newY = sin(y * 0.25) * 12 + sin(y * 0.05) * 5;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});


var peanut2 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3.5,
        y: 3.5
    },
    rotate: Math.PI * 0.75,
    historyLength: 130,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * 10;
        var newY = sin(y / 10) * 10;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);

        for (var i = h.length - 1; i >= 1; i--) {
            var mappedAlpha = sketch.map(i, h.length - 1, h.length - h.length / 2, 0, 125);
            sketch.stroke(255, mappedAlpha);
            sketch.line(h[i].x, h[i].y, h[i - 1].x, h[i - 1].y);
        }
    }
});

var bubbles = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 610,
        y: 0
    },
    scale: {
        x: 1,
        y: 1
    },
    // rotate: Math.PI * 0.75,
    historyLength: 200,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * Math.sign(sin(x / 10)) * 25;
        var newY = sin(y / 10) * 25;
        return { x: newX, y: newY };
    },
    displayFunction: "lines"
});

var fish = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 1,
        y: 1
    },
    // rotate: Math.PI * 0.75,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * 5;
        var newY = sin(y / 5) * 2.5;
        return { x: newX * 1.35, y: newY * 2 };
    },
    displayFunction: "lines"
});

var fish2 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 2,
        y: 2
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * 2.5;
        var newY = sin(y / 1.5) * 2.5;
        return { x: newX * 1.35, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish3 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * 2.5;
        var newY = sin(y / 2.5) * 2.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish4 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * 2.5;
        var newY = sin(y / 2.5) * 2.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish5 = new System({
    startPosition: { x: -25 / 4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * 2.5;
        var newY = sin(y / 2.5) * 2.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish6 = new System({
    startPosition: { x: -25 / 4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 2)) * 2.5;
        var newY = sin(y / 7.5) * 2.5;
        return { x: newX * 1, y: newY * 0.7 };
    },
    displayFunction: "lines"
});

var fish7 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 5,
        y: 5
    },
    rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 2)) * cos(y / (7.5 / 2)) * 2.5;
        var newY = sin(y / 7.5) * 2.5;
        return { x: newX * 1, y: newY * 0.7 };
    },
    displayFunction: function(h) {
        var size = 0.25;
        for (var i = 0; i < (h.length - 1); i++) {
            var pos = h[(h.length - 1) - i];
            var alpha = sketch.map(i, 0, h.length, 0, 255);
            sketch.push();
            sketch.translate(pos.x, pos.y);
            sketch.fill(255, alpha);
            sketch.ellipse(0, 0, size, size);
            sketch.pop();
        }
    }
});

var fish8 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 5,
        y: 5
    },
    rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 4)) * cos(y / (7.5 / 2)) * 2.5;
        var newY = sin(y / 7.5) * 2.5;
        return { x: newX * 0.9, y: newY * 0.7 };
    },
    displayFunction: "lines"
});

var fish9 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 5,
        y: 5
    },
    rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 4)) * cos(y / (7.5 / 4)) * 2.5;
        var newY = sin(y / 7.5 / 4) * 2.5;
        return { x: newX * 0.9, y: newY * 0.7 };
    },
    displayFunction: "lines"
});
var fish10 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 50,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 5,
        y: 5
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 4)) * cos(y / (7.5 / 4)) * 2.5;
        var newY = sin(y / 7.5 / 4) * 2.5;
        return { x: newX * 1.3, y: newY * 1.2 };
    },
    displayFunction: "lines"
});

var fish11 = new System({
    startPosition: { x: 25 / 4, y: 25 / 4 },
    velocity: { x: 0.2, y: -0.2 },
    box: {
        width: 25,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    // rotate: Math.PI / 5,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 8)) * cos(y / (7.5 / 8)) * 2.5;
        var newY = sin(y / 7.5 / 8) * 2.5;
        return { x: newX * 1.3, y: newY * 3 };
    },
    displayFunction: "lines"
});

var fish12 = new System({
    startPosition: { x: 25 / 4, y: 25 / 4 },
    velocity: { x: 0.2, y: -0.2 },
    box: {
        width: 25,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    // rotate: Math.PI / 5,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 16)) * cos(y / (7.5 / 16)) * 2.5;
        var newY = sin(y / 7.5 / 16) * 2.5;
        return { x: newX * 1.3, y: newY * 6 };
    },
    displayFunction: "lines"
});

var fish13 = new System({
    startPosition: { x: 25 / 4, y: 25 / 4 },
    velocity: { x: 0.2, y: -0.2 },
    box: {
        width: 25,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    // rotate: Math.PI / 5,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 16) + 0.06) * cos(y / (7.5 / 16) + 0.06) * 2.5;
        var newY = sin(y / 7.5 / 16 + 0.06) * 2.5;
        return { x: newX * 1.3 / 1.5, y: newY * 6 };
    },
    displayFunction: "lines"
});

var fish14 = new System({
    startPosition: { x: 25 / 4, y: 25 / 4 },
    velocity: { x: 0.2, y: -0.2 },
    box: {
        width: 25,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 4,
        y: 4
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / (7.5 / 16)) * cos(y / (7.5 / 16)) * 2.5;
        var newY = sin(y / 7.5 / 16) * 2.5;
        return { x: newX * 0.8, y: newY * 6 };
    },
    displayFunction: function(h) {
        for (var j = 0; j < 5; j++) {
            var mapSW = sketch.map(j, 0, 5, 10, 1);
            var mapAlpha = sketch.map(j, 0, 5, 2, 10);
            if (j == 4) {
                mapAlpha = 255;
                mapSW = 0.25;
                sketch.stroke(255, 255, 150, mapAlpha);
            } else {
                sketch.stroke(0, 150, 255, mapAlpha);
            }
            sketch.beginShape();
            sketch.noFill();
            sketch.strokeWeight(mapSW);

            for (var i = h.length - 15; i >= 1; i--) {
                sketch.vertex(h[i].x, h[i].y);
                sketch.vertex(h[i - 1].x, h[i - 1].y);
            }
            sketch.endShape();
        }
    }
});

var fish15 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 500,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * sin(x / 5) * 4.5;
        var newY = sin(y / 2.5) * 3;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish16 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 500,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * sin(x / 5) * 4.5;
        var newY = sin(y / 5) * 1.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish17 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 570,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * sin(x / 2.5) * 6.5;
        var newY = sin(y) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish18 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 570,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 100) * sin(x / 100) * 600.5;
        var newY = sin(y) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish19 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 30,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * cos(x / 10) * 12.5;
        var newY = sin(y) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish20 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 30,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * cos(x / 2.5) * 12;
        var newY = sin(y) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish21 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 30,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * cos(x / 5) * 12;
        var newY = sin(y) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish22 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 30,
    trailFunction: function(x, y) {
        var newX = sin(x / 10) * cos(x / 5) * 12;
        var newY = sin(y / 2) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var fish23 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 30,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * cos(x / 5) * 12;
        var newY = sin(y / 5) * 2.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var marketNight01 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: -50,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    rotate: Math.PI / 2 * 3,
    historyLength: 50,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * sin(x / 5) * 4.5;
        var newY = sin(y / 5) * 4;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});

var marketNight02 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 70,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    rotate: Math.PI / 2 * 3,
    historyLength: 50,
    trailFunction: function(x, y) {
        var newX = sin(x / 1.25) * sin(x / 5) * 5.5;
        var newY = sin(y / 5) * 4;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});
var marketNight03 = new System({
    startPosition: { x: 0, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 50,
        height: 25
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2 * 3,
    historyLength: 50,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * 7;
        var newY = cos(y / 1.25) * sin(y / 2.5) * 6.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});
var ultraSimpleSpiral = new System({
    startPosition: { x: -4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 10,
        height: 10
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 2,
        y: 2
    },
    // rotate: Math.PI / 2 * 3,
    historyLength: 50,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * 7;
        var newY = cos(y / 5) * sin(y / 2.5) * 6.5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});
var ultraSimpleSpiral02 = new System({
    startPosition: { x: 0, y: -1 },
    velocity: { x: 0.2, y: 0.1 },
    box: {
        width: 10,
        height: 5
    },
    translate: {
        x: 0,
        y: 600
    },
    scale: {
        x: 1,
        y: 1
    },
    rotate: Math.PI / 2,
    historyLength: 175,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * cos(x / 5) * 10;
        var newY = cos(y / 5) * sin(y / 2.5) * sin(y / 1.25) * 17;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "lines"
});
var basics = new System({
    startPosition: { x: -150, y: 0 },
    velocity: { x: 1, y: 5 },
    box: {
        width: 300,
        height: 300
    },
    translate: {
        x: 150,
        y: 150
    },
    scale: {
        x: 1,
        y: 1
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = Math.abs(sin(x / 10)) * 5;
        var newY = Math.abs(sin(y / 10)) * 5;
        return { x: newX * 1, y: newY * 1 };
    },
    displayFunction: "dots"
});

var hopeAtTheMarket = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 400,
        y: 0
    },
    scale: {
        x: 12,
        y: 12
    },
    // rotate: Math.PI / 2,
    historyLength: 300,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * sin(x / 5) * 4.5 / 10;
        var newY = sin(y / 2) * 3 / 10;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        if (!this.drawCount) {
            this.drawCount = 0;
        }
        var size = 0.25;
        for (var i = 0; i < (h.length - 1); i++) {
            var pos = h[i];
            var t = this.drawCount / 20;
            var x = 0 + cos(t / (sin(t / 1000))) * 5;
            var y = sin(t / (sin(t / 1000))) * 5;
            var xx = pos.x;
            var yy = pos.y;
            var lerpX = sketch.lerp(x, xx, 0.85);
            var lerpY = sketch.lerp(y, yy, 0.85);
            var vec = sketch.createVector(lerpX, lerpY);
            sketch.fill(255, 50);

            // var colmap = sketch.map(sin(t / 100), -1, 1, 0, 205);
            // var colmap2 = sketch.map(Math.abs(xx), 0, sketch.width, 0, 255);
            // var colmap3 = sketch.map(sin(t / 100), -1, 1, 150, 0);
            // sketch.fill(colmap, colmap2, colmap3, 50);
            sketch.ellipse(vec.x, vec.y, 0.1);
            this.drawCount++;
        }
    },
    backgroundColor: 0
});

var hopeAtTheMarketColor = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 400,
        y: 0
    },
    scale: {
        x: 12,
        y: 12
    },
    // rotate: Math.PI / 2,
    historyLength: 300,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * sin(x / 5) * 4.5 / 10;
        var newY = sin(y / 2) * 3 / 10;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        if (!this.drawCount) {
            this.drawCount = 0;
        }
        var size = 0.25;
        for (var i = 0; i < (h.length - 1); i++) {
            var pos = h[i];
            var t = this.drawCount / 20;
            var x = 0 + cos(t / (sin(t / 1000))) * 5;
            var y = sin(t / (sin(t / 1000))) * 5;
            var xx = pos.x;
            var yy = pos.y;
            var lerpX = sketch.lerp(x, xx, 0.85);
            var lerpY = sketch.lerp(y, yy, 0.85);
            var vec = sketch.createVector(lerpX, lerpY);
            // sketch.fill(255, 50);

            var colmap = sketch.map(sin(t / 400), -1, 1, 70, 255);
            var colmap2 = sketch.map(Math.abs(yy), 0, sketch.height / 10, 0, 255);
            var colmap3 = sketch.map(sin(t / 400), -1, 1, 150, 0);
            sketch.fill(colmap, colmap2, colmap3, 50);
            sketch.ellipse(vec.x, vec.y, 0.1);
            this.drawCount++;
        }
    },
    backgroundColor: 0
});

var hopeAtTheMarketColor2 = new System({
    startPosition: { x: -2, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 12,
        y: 12
    },
    rotate: Math.PI / 2,
    historyLength: 300,
    trailFunction: function(x, y) {
        var newX = sin(x / 5) * cos(x / 10) * 4.5 / 10;
        var newY = sin(y / 2) * cos(y / 10) * 3 / 10;
        return { x: newX, y: newY };
    },
    displayFunction: function(h) {
        if (!this.drawCount) {
            this.drawCount = 0;
        }
        var size = 0.25;
        for (var i = 0; i < (h.length - 1); i++) {
            var pos = h[i];
            var t = this.drawCount / 20;
            var x = cos(t / (sin(t / 1000))) * 5;
            var y = sin(t / (sin(t / 1000))) * 5;
            var xx = pos.x;
            var yy = pos.y;
            var lerpX = sketch.lerp(x, xx, 0.95);
            var lerpY = sketch.lerp(y, yy, 0.95);
            var vec = sketch.createVector(lerpX, lerpY);
            // sketch.fill(255, 50);

            var colmap = sketch.map(sin(t / 400), -1, 1, 70, 255);
            var colmap2 = sketch.map(Math.abs(yy), 0, sketch.height / 20, 255, 0);
            var colmap3 = sketch.map(sin(t / 400), -1, 1, 150, 0);
            sketch.fill(colmap, colmap2, colmap3, 50);
            sketch.ellipse(vec.x, vec.y * 1.8, 0.1);
            this.drawCount++;
        }
    },
    backgroundColor: 0
});

var windsOfSpring001 = new System({
    startPosition: { x: -25 / 4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    // rotate: Math.PI / 2,
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * cos(x / 5) * 2.5;
        var newY = sin(y / 2.5) * 2.5;
        return { x: newX * 2.125, y: newY * 1.25 };
    },
    displayFunction: "lines"
});

var windsOfSpring002 = new System({
    startPosition: { x: -25 / 4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * cos(x / 5) * 2.5;
        var newY = sin(y / 5) * cos(y / 5) * 2.5;
        return { x: newX * 2.125, y: newY * 2.45 };
    },
    displayFunction: "lines"
});

var windsOfSpring003 = new System({
    startPosition: { x: -25 / 4, y: 0 },
    velocity: { x: 0.2, y: 0.2 },
    box: {
        width: 25,
        height: 50
    },
    translate: {
        x: 0,
        y: 0
    },
    scale: {
        x: 3,
        y: 3
    },
    historyLength: 100,
    trailFunction: function(x, y) {
        var newX = sin(x / 2.5) * 2.5;
        var newY = sin(y / 2.5) * 2.5;
        return { x: newX * 3.45, y: newY * 3.45 };
    },
    displayFunction: "lines",
    updateFunction: function(t) {
        return {
            x: cos(t / 10) * 15,
            y: sin(t / 10) * 15
        }
    }
});


var system = windsOfSpring003;
