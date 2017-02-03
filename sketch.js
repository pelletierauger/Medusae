var looping = true;
var box = {
    width: 350,
    height: 400
}
var showGeometry = true;

var sketch = new p5(function(p) {
    p.x = 200;
    p.y = 200;
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('one');
        p.background(51);
        p.noStroke();
    }
    p.draw = function() {
        p.translate(p.width / 2, p.height / 2);
        p.fill(255, 0, 0, 50);
        p.ellipse(loneParticle.position.x, loneParticle.position.y, 5, 5);
        loneParticle.update();
    }
    p.keyPressed = function() {
        if (p.keyCode === 32) {
            if (looping) {
                p.noLoop();
                looping = false;
            } else {
                p.loop();
                looping = true;
            }
        }
        if (p.key == 't' || p.key == 'T') {
            if (showGeometry) {
                showGeometry = false;
                geometry.canvas.style("display", "none");
            } else {
                showGeometry = true;
                geometry.canvas.style("display", "block");
            }
        }
    }
});
var geometry = new p5(function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('two');
    }
    p.draw = function() {
        p.clear();
        p.translate(p.width / 2, p.height / 2);
        p.noFill();
        p.stroke(255)
        p.rect(-box.width / 2, -box.height / 2, box.width, box.height);
        p.fill(255);
        p.noStroke();
        p.ellipse(loneParticle.position.x, loneParticle.position.y, 5, 5);
    }
});
