import P5 from 'p5';


let t1 = 0;
let t2 = 108;
const sketch = function (p) {
    p.setup = function () {
        p.createCanvas(640, 480);
    };

    p.draw = function () {
        let n1 = p.noise(t1);
        let n2 = p.noise(t2);
        let x = p.map(n1, 0, 1, 0, p.width);
        let y = p.map(n2, 0, 1, 0, p.height);
        p.ellipse(x, y, 16, 16);
        t1 += 0.01;
        t2 += 0.01;
    };
};

new P5(sketch);
