import P5 from 'p5';
import SD from './sd';


const sketch = function (p) {
    let sd = new SD(p);
    p.setup = function () {
        p.createCanvas(640, 480);
        sd.init();
    };

    p.draw = function () {
        sd.update();
        sd.draw();
    };
};

new P5(sketch);
