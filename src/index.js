import P5 from 'p5';
import Distributor from './distributor';


const sketch = function (p) {
    let d = new Distributor(p);
    p.setup = function () {
        p.createCanvas(640, 480);
        d.init();
    };

    p.draw = function () {
        d.update();
        d.draw();
    };
};

new P5(sketch);
