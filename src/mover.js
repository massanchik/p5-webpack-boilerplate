export default class Mover {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.position = this.p.createVector(this.p.width/2, this.p.height/2);
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0, 0);
        this.size = 16;
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        if (this.position.y > this.p.height - this.size/2) {
            this.acceleration.add(this.p.createVector(0, -5));
        }
        if (this.position.x > this.p.width - this.size/2) {
            this.acceleration.add(this.p.createVector(-5, 0));
        }
        if (this.position.x < this.size/2) {
            this.acceleration.add(this.p.createVector(5, 0));
        }
    }
    draw() {
        this.p.stroke(50);
        this.p.fill(200);
        this.p.ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    applyForce(force) {
        this.acceleration.add(force);
    }
}