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
    displayFunction: function(h) {
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        sketch.strokeWeight(0.25);
        sketch.stroke(255, 125);
        for (var i = h.length - 1; i >= 1; i--) {
            sketch.vertex(h[i].x, h[i].y);
            sketch.vertex(h[i - 1].x, h[i - 1].y);
        }
        sketch.endShape();
    }
});

var system = loneParticle3;
