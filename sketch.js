var looping = true;
var box = {
    width: 60,
    height: 60
}
var showGeometry = true;
// var scale = 0.5;
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;

var sketch = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('one');
        p.background(system.backgroundColor);
        p.noStroke();
        p.frameRate(30);
    }
    p.draw = function() {
        p.translate(p.width / 2, p.height / 2);
        p.rotate(system.rotate);
        p.translate(system.translate.x, system.translate.y);
        p.scale(system.scale.x, system.scale.y);
        for (var i = 0; i <  system.iterationsPerFrame; i++) {
            system.update();
            system.displayHistory();
        }
    }
    p.keyPressed = function() {
        if (p.keyCode === 32) {
            if (looping) {
                p.noLoop();
                geometry.noLoop();
                looping = false;
            } else {
                p.loop();
                geometry.loop();
                looping = true;
            }
        }
        if (p.key == 'g' || p.key == 'G') {
            if (showGeometry) {
                showGeometry = false;
                geometry.canvas.style("display", "none");
                geometry.noLoop();
            } else {
                showGeometry = true;
                geometry.canvas.style("display", "block");
                geometry.loop();
            }
        }
        if (p.key == 'q' || p.key == 'Q') {
            sketch.background(system.backgroundColor);
        }
    }
});
var geometry = new p5(function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('two');
        p.frameRate(30);
        p.strokeWeight(1 / system.scale.x);
    }
    p.draw = function() {
        p.clear();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(system.rotate);
        p.translate(system.translate.x, system.translate.y);
        p.scale(system.scale.x, system.scale.y);
        for (var i = 0; i < system.iterationsPerFrame; i++) {
            if (system.updateFunction == "box") {
                p.noFill();
                p.stroke(255, 0, 0);
                p.rect(-system.box.width / 2, -system.box.height / 2, system.box.width, system.box.height);

                var pos = p.createVector(system.position.x, system.position.y);
                var vel = p.createVector(system.velocity.x, system.velocity.y);
                p.stroke(255, 0, 0, 100);
                p.beginShape();
                p.vertex(system.position.x, system.position.y);
                for (var j = 0; j < 1000; j++) {
                    var staticUpdate = system.staticUpdate(pos, vel);
                    pos = staticUpdate.pos;
                    vel = staticUpdate.vel;
                    p.vertex(pos.x, pos.y);
                }
                p.endShape(p.OPEN);
            } else {
                p.noFill();
                p.stroke(255, 0, 0, 100);
                p.beginShape();
                p.vertex(system.position.x, system.position.y);
                for (var j = 0; j < 65; j++) {
                    var v = system.updateFunction(system.sumOfIterations + j);
                    p.vertex(v.x, v.y);
                }
                p.endShape(p.OPEN);
            }
            p.fill(255, 0, 0);
            p.noStroke();
            p.ellipse(system.position.x, system.position.y, 5 / system.scale.x, 5 /  system.scale.y);
        }
    }
});
