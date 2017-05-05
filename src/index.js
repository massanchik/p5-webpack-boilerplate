import P5 from 'p5';
import Walker from './walker';


const sketch = function (p) {
    let walker = new Walker(p);
    p.setup = function () {
        p.createCanvas(1280, 720);
        walker.init(100);
    };

    p.draw = function () {
        walker.update();
        walker.draw();
    };
};

new P5(sketch);
