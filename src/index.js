import P5 from 'p5';
import Ball from './ball';


const sketch = function (p) {
    let ball = new Ball(p);
    p.setup = function () {
        p.createCanvas(640, 480);
        ball.init();
    };

    p.draw = function () {
        p.background(255);
        ball.update();
        ball.draw();
    };
};

new P5(sketch);
