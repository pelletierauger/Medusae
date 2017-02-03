var looping = true;
var box = {
    width: 60,
    height: 40
}
var showGeometry = true;
var scale = 1;
var sin = Math.sin;
var cos = Math.cos;

var sketch = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('one');
        p.background(0);
        p.noStroke();
        p.frameRate(30);
    }
    p.draw = function() {
        // p.background(51);
        p.translate(p.width / 2, p.height / 2);
        // p.scale(scale, scale);
        // p.fill(255, 0, 0, 50);
        p.ellipse(loneParticle.position.x, loneParticle.position.y, 1, 1);
        loneParticle.update();
        loneParticle.displayHistory();
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
            } else {
                showGeometry = true;
                geometry.canvas.style("display", "block");
            }
        }
        if (p.key == 'q' || p.key == 'Q') {
            sketch.background(0);
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
    }
    p.draw = function() {
        p.clear();
        p.translate(p.width / 2, p.height / 2);
        // p.scale(scale, scale);
        p.noFill();
        p.stroke(255)
        p.rect(-box.width / 2, -box.height / 2, box.width, box.height);
        p.fill(255);
        p.noStroke();
        p.ellipse(loneParticle.position.x, loneParticle.position.y, 5, 5);
    }
});
