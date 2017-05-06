export default class Mover {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.position = this.p.createVector(this.p.width/2, this.p.height/2);
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0.001, 0.001);
        this.vLimit = 20;
    }
    update() {
        let dir = this.p.createVector(this.p.mouseX, this.p.mouseY);
        dir.sub(this.position);
        dir.normalize();
        dir.mult(3);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.vLimit);
        this.position.add(this.velocity);
    }
    draw() {
        this.p.stroke(50);
        this.p.fill(200);
        this.p.ellipse(this.position.x, this.position.y, 16, 16);
    }
}