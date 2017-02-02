var looping = true;
var sketch = new p5(function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        p.canvas = p.createCanvas(200, 200);
        p.canvas.addClass('one');
        p.background(51);
    }
    p.draw = function() {
        p.fill(255, 0, 200, 25);
        p.noStroke();
        p.ellipse(p.x, p.y, 48, 48);
        p.x = p.x + p.random(-10, 10);
        p.y = p.y + p.random(-10, 10);
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
    }
});
var geometry = new p5(function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        p.canvas = p.createCanvas(200, 200);
        p.canvas.addClass('two');
        // p.background(51);
    }
    p.draw = function() {
        p.clear();
        p.fill(255, 255, 0, 25);
        p.noStroke();
        p.ellipse(p.x, p.y, 48, 48);
        p.x = p.x + p.random(-10, 10);
        p.y = p.y + p.random(-10, 10);

    }
});
