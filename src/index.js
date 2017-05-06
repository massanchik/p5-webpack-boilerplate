import P5 from 'p5';


const sketch = function (p) {
    p.setup = function () {
        p.createCanvas(640, 480);
    };

    p.draw = function () {
        p.background(200);

        let mouse = p.createVector(p.mouseX, p.mouseY);
        let center = p.createVector(p.width/2, p.height/2);

        mouse.sub(center);
        mouse.setMag(50);
        // Or
        // mouse.normalize();
        // mouse.mult(50);

        p.translate(center.x, center.y);

        p.fill(100);
        p.ellipse(0, 0, 100, 100);

        p.stroke(255);
        p.line(0, 0, mouse.x, mouse.y);
    };
};

new P5(sketch);
