export default class Ball {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.center = this.p.createVector(this.p.width / 2, this.p.height / 2);
        this.size = this.p.createVector(32, 32);
        this.position = this.p.createVector(this.center.x, this.center.y);
        this.velocity = this.p.createVector(3, 3);
        this.t = this.p.createVector(0, 108);
    }
    update() {
        this.position.add(this.velocity);
        if (this.position.x > this.p.width - this.size.x/2 || this.position.x < this.size.x/2) {
            this.velocity.x *= -1;
        }
        if (this.position.y > this.p.height - this.size.y/2 || this.position.y < this.size.y/2) {
            this.velocity.y *= -1;
        }
        let mx = this.velocity.x < 0 ? -1 : 1;
        let my = this.velocity.y < 0 ? -1 : 1;
        this.velocity.x = this.p.map(this.p.noise(this.t.x), 0, 1, 0, 16) * mx;
        this.velocity.y = this.p.map(this.p.noise(this.t.y), 0, 1, 0, 16) * my;
        this.t.x += 0.01;
        this.t.y += 0.01;
    }
    draw() {
        this.p.stroke(0);
        this.p.fill(200);
        this.p.ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
