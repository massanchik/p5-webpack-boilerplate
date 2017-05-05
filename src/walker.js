export default class Walker {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.x = this.p.width / 2;
        this.y = this.p.height / 2;
    }
    update() {
        let stepX = this.p.int(this.p.random(3)) -1;
        let stepY = this.p.int(this.p.random(3)) -1;

        this.x += stepX;
        this.y += stepY;

        this.x = this.p.constrain(this.x, 0, this.p.width-1);
        this.y = this.p.constrain(this.y, 0, this.p.height-1);
    }
    draw() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }
}
