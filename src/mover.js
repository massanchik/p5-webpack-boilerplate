import P5 from 'p5';

export default class Mover {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.mass = this.p.random(.5, 4);
        this.size = 16 * this.mass;

        this.position = this.p.createVector(this.p.random(this.size, this.p.width-this.size), this.p.height/2);
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0, 0);
    }
    update() {
        this.bounds();
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    draw() {
        this.p.stroke(50);
        this.p.fill(200);
        this.p.ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    applyForce(force) {
        let f = P5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
    bounds() {
        if (this.position.y > this.p.height - this.size) {
            this.applyForce(this.p.createVector(0, -5));
        }
        if (this.position.x > this.p.width - this.size) {
            this.applyForce(this.p.createVector(-5, 0));
        }
        if (this.position.x < this.size) {
            this.applyForce(this.p.createVector(5, 0));
        }
    }
}