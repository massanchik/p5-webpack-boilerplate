import P5 from 'p5';
import Rain from './rain';


const sketch = function (p) {
    let rain = new Rain(p);
    p.setup = function () {
        p.createCanvas(640, 480);
        rain.init(500);
    };

    p.draw = function () {
        p.background(200);

        rain.update();
        rain.draw();
    };
};

new P5(sketch);
