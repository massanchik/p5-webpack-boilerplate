import P5 from 'p5';
import Mover from './mover';


const sketch = function (p) {
    let movers = [];
    p.setup = function () {
        p.createCanvas(640, 480);
        for (let i = 0; i < 100; i++) {
            let mover = new Mover(p);
            mover.init();
            movers.push(mover);
        }
    };

    p.draw = function () {
        p.background(200);


        let wind = p.createVector(0.5, 0);
        let fc = -0.03;
        let dc = -0.001;

        movers.map((mover) => {
            let friction = mover.velocity.copy();
            friction.normalize();
            friction.mult(fc);
            mover.applyForce(friction);

            let drag = mover.velocity.copy();
            drag.normalize();
            let speed = mover.velocity.mag();
            drag.mult(dc * speed * speed);
            mover.applyForce(drag);

            let gravity = p.createVector(0, 0.3 * mover.mass);
            mover.applyForce(gravity);

            if (p.mouseIsPressed) {
                mover.applyForce(wind);
            }

            mover.update();
            mover.draw();
        });
    };
};

new P5(sketch);
