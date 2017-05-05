export default class Walker {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.x = this.p.width / 2;
        this.y = this.p.height / 2;
    }
    update() {
        this.x += this.chooseDir(this.x, this.p.mouseX);
        this.y += this.chooseDir(this.y, this.p.mouseY);

        this.x = this.p.constrain(this.x, 0, this.p.width-1);
        this.y = this.p.constrain(this.y, 0, this.p.height-1);
    }
    draw() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }
    chooseDir(source, target) {
        if (source - target > 0) {
            return this.p.random([-1, -1, 1]);
        }
        return this.p.random([-1, 1, 1]);
    }
}
