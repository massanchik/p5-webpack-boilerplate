import P5 from 'p5';
import Mover from './mover';


const sketch = function (p) {
    let mover = new Mover(p);
    p.setup = function () {
        p.createCanvas(640, 480);
        mover.init();
    };

    p.draw = function () {
        p.background(200);

        mover.update();
        mover.draw();
    };
};

new P5(sketch);
